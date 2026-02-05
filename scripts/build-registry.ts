import { registry } from "@/registry";
import { promises as fs } from "fs";
import type { z } from "zod";
import type { registryitemFileType } from "@/registry/schema";
import path from "path";

const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = "public/r";

type File = z.infer<typeof registryitemFileType>;

/**
 * Ensures path is project-relative (NO leading slash)
 */
function normalizeRegistryPath(p: string) {
  return p.replace(/^\/+/, "");
}

async function writeFileRecursive(filePath: string, data: string) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, data, "utf-8");
  console.log(`✔ File written → ${filePath}`);
}

const getComponentsFile = async (files: File[], registryType: string) => {
  const fileArrayPromise = files.map(async (file) => {
    // CASE 1 — string file path
    if (typeof file === "string") {
      const normalizedPath = normalizeRegistryPath(file);
      const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const fileName = path.basename(normalizedPath);

      return {
        type: registryType,
        content: fileContent,
        path: normalizedPath,
        target: `components/ui/${fileName}`, // SAFE target
      };
    }

    // CASE 2 — object file
    const normalizedPath = normalizeRegistryPath(file.path);
    const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const fileName = path.basename(normalizedPath);

    const getTargetpath = (type: string) => {
      switch (type) {
        case "registry:component":
          return `components/ui/${fileName}`;
        case "registry:lib":
          return `lib/${fileName}`;
        case "registry:style":
          return `styles/${fileName}`;
        case "registry:theme":
          return `theme/${fileName}`;
        default:
          return `components/ui/${fileName}`;
      }
    };

    const fileType = file.type || registryType;

    return {
      type: fileType,
      content: fileContent,
      path: normalizedPath,
      target: file.target
        ? normalizeRegistryPath(file.target)
        : getTargetpath(fileType),
    };
  });

  return Promise.all(fileArrayPromise);
};

const main = async () => {
  for (const component of registry) {
    if (!component.files) throw new Error("No files found for component");

    const fileArray = await getComponentsFile(
      component.files,
      component.type
    );

    const json = JSON.stringify(
      {
        ...component,
        files: fileArray,
      },
      null,
      2
    );

    const jsonPath = path.join(
      PUBLIC_FOLDER_BASE_PATH,
      `${component.name}.json`
    );

    await writeFileRecursive(jsonPath, json);
  }

  console.log("🎉 Registry build complete");
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
