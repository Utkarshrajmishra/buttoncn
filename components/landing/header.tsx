"use client";
import { useState } from "react";
import DefaultSearchDialog from "./search";
import Wrapper from "./wrapper";
import { Search, Menu } from "lucide-react";
import Logo from "../svg/logo";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="h-14 border-b border-neutral-700 backdrop-blur-md flex items-center justify-center sticky top-0 z-50">
      <Wrapper className="flex px-4 sm:px-6 items-center justify-between w-full">
        <h1 className="text-neutral-100 gap-1.5 sm:gap-2 font-sarpanch flex items-center tracking-tight text-lg sm:text-xl font-semibold">
          <Logo className="h-4 sm:h-5 w-auto shrink-0" />
          <span className="hidden xs:inline">Fluxbuttons</span>
          <span className="xs:hidden">Fluxbuttons</span>
        </h1>

        <nav
          className="hidden md:flex gap-4 lg:gap-6 tracking-tight text-sm text-neutral-400"
          aria-label="Main navigation"
        >
          <a href="/docs" className="hover:text-neutral-100 transition-colors">
            Docs
          </a>
          <a
            href="/docs/installation"
            className="hover:text-neutral-100 transition-colors"
          >
            Installation
          </a>
          <a
            href="/docs/components"
            className="hover:text-neutral-100 transition-colors"
          >
            Components
          </a>
          {/* <a href="#" className="hover:text-neutral-100 transition-colors">
            Templates
          </a> */}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 sm:gap-4 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-neutral-600"
            aria-label="Open search dialog"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Search className="size-3.5 sm:size-4" />
              <span className="hidden sm:inline">Search</span>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              <kbd className="text-xs bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">
                Ctrl
              </kbd>
              <kbd className="text-xs bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">
                K
              </kbd>
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 p-2 text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all"
            aria-label="Toggle mobile menu"
          >
            <Menu className="size-4" />
          </button>
        </div>

        <DefaultSearchDialog open={open} onOpenChange={setOpen} />

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 right-0 bg-neutral-900 border-b border-neutral-700 backdrop-blur-md">
            <nav className="flex flex-col gap-1 p-4 text-sm text-neutral-400">
              <a
                href="/docs"
                className="hover:text-neutral-100 transition-colors py-2 px-3 rounded-md hover:bg-neutral-800"
              >
                Docs
              </a>
              <a
                href="/docs/installation"
                className="hover:text-neutral-100 transition-colors py-2 px-3 rounded-md hover:bg-neutral-800"
              >
                Installation
              </a>
              <a
                href="#"
                className="hover:text-neutral-100 transition-colors py-2 px-3 rounded-md hover:bg-neutral-800"
              >
                Components
              </a>
              {/* <a
                href="#"
                className="hover:text-neutral-100 transition-colors py-2 px-3 rounded-md hover:bg-neutral-800"
              >
                Templates
              </a> */}
            </nav>
          </div>
        )}
      </Wrapper>
    </header>
  );
};

export default Header;
