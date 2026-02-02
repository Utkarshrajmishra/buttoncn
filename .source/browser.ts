// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"fold-button.mdx": () => import("../content/docs/fold-button.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "pluse-button.mdx": () => import("../content/docs/pluse-button.mdx?collection=docs"), "rainbow-button.mdx": () => import("../content/docs/rainbow-button.mdx?collection=docs"), "splash-button.mdx": () => import("../content/docs/splash-button.mdx?collection=docs"), "sweep-button.mdx": () => import("../content/docs/sweep-button.mdx?collection=docs"), "wave-button.mdx": () => import("../content/docs/wave-button.mdx?collection=docs"), }),
};
export default browserCollections;