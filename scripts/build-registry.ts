import { registry } from "@/registry";
import { promises as fs } from "fs";
import type { z } from "zod";
import type { registryitemFileType } from "@/registry/schema";
import path from "path";

const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = "public/r";

type File = z.infer<typeof registryitemFileType>;

async function writeFileRecursive(filePath: string, data: string) {
  const dir = path.dirname(filePath);

  try {
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filePath, data, "utf-8");
    console.log(`File written to ${filePath}`);
  } catch (error) {
    console.log(`File written to ${filePath}`);
    console.log(error);
  }
}

const getComponentsFile = async (files: File[], registryType: string) => {
  const fileArrayPromise = files.map(async (file) => {
    if (typeof file === "string") {
      const normalizedPath = file.startsWith("/") ? file : `/${file}`;
      const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const fileName = normalizedPath.split("/").pop() || "";

      return {
        type: registryType,
        content: fileContent,
        path: normalizedPath,
        target: `/buttoncn/${fileName}`,
      };
    }

    const normalizedpath = file.path.startsWith("/")
      ? file.path
      : `/${file.path}`;
    const filePath = path.join(REGISTRY_BASE_PATH, normalizedpath);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const fileName = normalizedpath.split("/").pop() || "";

    const getTargetpath = (type: string) => {
      switch (type) {
        case "registry:component":
          return `/components/buttoncn/${fileName}`;
        case "registry:lib":
          return `/lib/${fileName}`;
        case "registry:ui":
          return `/ui/${fileName}`;
        case "registry:page":
          return `/page/${fileName}`;
        case "registry:file":
          return `/file/${fileName}`;
        case "registry:style":
          return `/style/${fileName}`;
        case "registry:theme":
          return `/theme/${fileName}`;
        case "registry:item":
          return `/item/${fileName}`;
        default:
          return `/components/buttoncn/${fileName}`;
      }
    };

    const fileType =
      typeof file === "string" ? registryType : file.type || registryType;

    return {
      type: fileType,
      content: fileContent,
      path: normalizedpath,
      target:
        typeof file === "string"
          ? getTargetpath(registryType)
          : file.target || getTargetpath(fileType),
    };
  });

  const fileArray = await Promise.all(fileArrayPromise);
  return fileArray;
};

const main = async () => {
  for (let i = 0; i < registry.length; i++) {
    const component = registry[i];
    const files = component.files;
    if (!files) throw new Error("No files found for component");

    const fileArray = await getComponentsFile(files, component.type);

    const json = JSON.stringify(
      {

        ...component,
        files: fileArray,
      },
      null,
      2,
    );

    const jsonPath = `${PUBLIC_FOLDER_BASE_PATH}/${component.name}.json`;
    await writeFileRecursive(jsonPath, json);

    console.log(json);
  }
};

main().then(()=>{
    console.log("done");
}).catch((error)=>{
    console.log(error);
    process.exit(1);
})