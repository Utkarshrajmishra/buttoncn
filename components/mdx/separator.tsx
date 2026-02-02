'use client';

import type{ Separator } from "fumadocs-core/page-tree";

export function SidebarSeparator({ item }: { item: Separator }) {
  return (
    <div className=" py-4 text-xs ">
      {item.name}
    </div>
  );
}