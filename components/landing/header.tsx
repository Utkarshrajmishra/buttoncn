"use client"
import { useState } from "react";
import DefaultSearchDialog from "./search";
import Wrapper from "./wrapper";
import { Search } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-14 border-b border-neutral-800  backdrop-blur-md flex items-center justify-center sticky top-0 z-50">
      <Wrapper className="flex px-6 items-center justify-between w-full">
        
        {/* Logo */}
        <h1 className="text-neutral-100 tracking-tight text-xl font-semibold">
          Fluxbuttons
        </h1>

        {/* Navigation */}
        <nav
          className="hidden md:flex gap-6 tracking-tight text-sm text-neutral-400"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="hover:text-neutral-100 transition-colors"
          >
            Docs
          </a>
          <a
            href="#"
            className="hover:text-neutral-100 transition-colors"
          >
            Installation
          </a>
          <a
            href="#"
            className="hover:text-neutral-100 transition-colors"
          >
            Components
          </a>
           <a
            href="#"
            className="hover:text-neutral-100 transition-colors"
          >
            Templates
          </a>
        </nav>

        {/* Search Button */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-4 rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-neutral-600"
          aria-label="Open search dialog"
        >
          <div className="flex items-center gap-2">
            <Search className="size-4" />
            <span className="hidden sm:inline">Search</span>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            <kbd className="text-xs bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">
              Ctrl
            </kbd>
            <kbd className="text-xs bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">
              K
            </kbd>
          </div>
        </button>

        <DefaultSearchDialog open={open} onOpenChange={setOpen} />
      </Wrapper>
    </header>
  );
};

export default Header;
