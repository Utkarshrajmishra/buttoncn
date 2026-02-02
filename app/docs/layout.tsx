import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { SidebarSeparator } from '@/components/mdx/separator';
export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}  sidebar={{
    components: {
      Separator: SidebarSeparator,
    },
  }}>
      {children}
    </DocsLayout>
  );
}