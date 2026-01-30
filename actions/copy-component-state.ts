"use server"

import path from "path";
import { cache } from "react";
import { promises as fs } from "fs";

export type CopyComponentState = {
    error: string;
    content: string;
    success: boolean;
};

export const readFileCache = cache(async (path: string) => {
    return await fs.readFile(path, "utf-8");
});

export const getComponent = async (fileName: string, folder: string) => {
    const baseDir = path.join(process.cwd(), "component/buttoncn");
    if (!fileName || fileName === "undefined") {
        const fullPath = path.join(baseDir, `${folder}.tsx`);
        return await readFileCache(fullPath);
    }
    const fullPath = path.join(baseDir, folder, `${fileName}.tsx`);
    return await readFileCache(fullPath);
};

export async function copyComponent(
    state: CopyComponentState | undefined,
    payload?: FormData
): Promise<CopyComponentState> {
    try {
        if (!payload) {
            return { error: "No payload provided", content: "", success: false };
        }

        const folder = payload.get("folder") as string;
        const fileName = payload.get("fileName") as string;

        if (!folder || !fileName) {
            return { error: "Folder and filename are required", content: "", success: false };
        }

        const content = await getComponent(fileName, folder);

        if (!content) {
            return { error: "Component not found", content: "", success: false };
        }

        return { error: "", content, success: true };
    } catch (error: any) {
        return { error: error.message || "Unknown error", content: "", success: false };
    }
}
