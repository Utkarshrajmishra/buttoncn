import { source } from '@/lib/source'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';

type Props = {
  params: {
    slug?: string[];
  };
};

export default async function Page({ params }: Props) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const typedPage = page as typeof page & {
    data: typeof page.data & {
      body: React.ComponentType<any>;
      toc: any;
      full?: boolean;
    };
  };

  const MDX = typedPage.data.body;

  return (
    <DocsPage toc={typedPage.data.toc} full={typedPage.data.full}>
      <DocsTitle>{typedPage.data.title}</DocsTitle>
      <DocsDescription>{typedPage.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents({ a: createRelativeLink(source, page) })} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
