import { defineDocs, defineConfig, frontmatterSchema, metaSchema, defineCollections } from 'fumadocs-mdx/config';

export const docs = defineCollections({
 type:"doc",
 dir:"content/docs",
 schema:frontmatterSchema
});

export const meta = defineCollections({
 type:"meta",
 dir:"content/meta",
 schema:metaSchema
})


