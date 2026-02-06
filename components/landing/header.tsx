"use client"
import { useState } from "react";
import DefaultSearchDialog from "./search";
import Wrapper from "./wrapper";
import { Search } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-12 border-b border-neutral-200 flex items-center justify-center sticky top-0 bg-white z-50">
      <Wrapper className="flex items-center justify-between">
        <h1 className="text-neutral-800 tracking-tight text-2xl font-semibold">
          Fluxera
        </h1>

        <nav className="flex gap-6 text-sm text-neutral-700" aria-label="Main navigation">
          <a href="#" className="cursor-pointer hover:text-neutral-900 transition-colors">
            Docs
          </a>
          <a href="#" className="cursor-pointer hover:text-neutral-900 transition-colors">
            Installation
          </a>
          <a href="#" className="cursor-pointer hover:text-neutral-900 transition-colors">
            Components
          </a>
        </nav>
        
        <button
          onClick={() => setOpen(true)}
          className="text-sm cursor-pointer flex rounded-md border border-neutral-200 gap-2 text-neutral-800 bg-neutral-100 px-4 py-2 hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
          aria-label="Open search dialog"
        >
          <div className="flex items-center gap-6">
            <Search className="size-3.5" />
            <span>Search</span>
          </div> 
          <div className="flex items-center gap-1">
            <kbd className="text-xs bg-neutral-800 text-white px-1.5 py-0.5 rounded-sm">
              Ctrl
            </kbd>
            <kbd className="text-xs bg-neutral-800 text-white px-1.5 py-0.5 rounded-sm">
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