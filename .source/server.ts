// @ts-nocheck
import * as __fd_glob_9 from "../content/docs/wave-button.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/sweep-button.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/splash-button.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/shimmer-button.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/rainbow-button.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/pluse-button.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/installation.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/fold-button.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"fold-button.mdx": __fd_glob_1, "index.mdx": __fd_glob_2, "installation.mdx": __fd_glob_3, "pluse-button.mdx": __fd_glob_4, "rainbow-button.mdx": __fd_glob_5, "shimmer-button.mdx": __fd_glob_6, "splash-button.mdx": __fd_glob_7, "sweep-button.mdx": __fd_glob_8, "wave-button.mdx": __fd_glob_9, });