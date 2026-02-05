import { z } from "zod";

export const blockChunkType = z.object({
  name: z.string(),
  description: z.string(),
  component: z.any(),
  file: z.string(),
  code: z.string(),
  container: z
    .object({
      className: z.string().nullish(),
    })
    .optional(),
});

export const registryItemType = z.enum([
  "registry:component",
  "registry:block",
  "registry:lib",
  "registry:hook",
  "registry:ui",
  "registry:page",
  "registry:file",
  "registry:style",
  "registry:theme",
  "registry:item",
]);

export const registryitemFileType = z.union([
  z.string(),
  z.object({
    path: z.string(),
    content: z.string().optional(),
    type: registryItemType,
    target: z.string().optional(),
  }),
]);

export const registryItemTailwindType = z.object({
  config: z.object({
    content: z.array(z.string()).optional(),
    theme: z.record(z.string(), z.any()).optional(),
    plugins: z.array(z.string()).optional(),
  }),
});

export const registryItemCssVarsType = z.object({
  light: z.record(z.string(), z.string()).optional(),
  dark: z.record(z.string(), z.string()).optional(),
});

export const registryEntryType = z.object({
  name: z.string(),
  type: registryItemType,
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  hookDependencies: z.array(z.string()).optional(),
  files: z.array(registryitemFileType).optional(),
  tailwind: registryItemTailwindType.optional(),
  cssVars: registryItemCssVarsType.optional(),
  source: z.string().optional(),
  category: z.string().optional(),
  subcategory: z.string().optional(),
  chunks: z.array(blockChunkType).optional(),
  docs: z.string().optional(),
});


export const blockType=registryEntryType.extend({
    type:z.literal("registry:block"),
    style:z.enum(["default","new-york"]),
    component:z.any(),
    container:z.object({
        height:z.string().nullish(),
        className:z.string().nullish(),
    }).optional(),
    code:z.string(),
    heighlightedCode:z.string()
})


export const registryType=z.array(registryEntryType)

export type RegistryEntry=z.infer<typeof registryEntryType>

export type Registry=z.infer<typeof registryType>

export type Block=z.infer<typeof blockType>

export type BlockChunk=z.infer<typeof blockChunkType>