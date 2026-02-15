"use client";
import { useState } from "react";

import { Menu, Search } from "lucide-react";

import Logo from "../svg/logo";
import DefaultSearchDialog from "./search";
import Wrapper from "./wrapper";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-center border-b border-neutral-700 backdrop-blur-md">
      <Wrapper className="flex w-full items-center justify-between px-4 sm:px-6">
        <h1 className="font-sarpanch flex items-center gap-1.5 text-lg font-semibold tracking-tight text-neutral-100 sm:gap-2 sm:text-xl">
          <Logo className="h-4 w-auto shrink-0 sm:h-5" />
          <span className="xs:inline hidden">Fluxbuttons</span>
          <span className="xs:hidden">Fluxbuttons</span>
        </h1>

        <nav
          className="hidden gap-4 text-sm tracking-tight text-neutral-400 md:flex lg:gap-6"
          aria-label="Main navigation"
        >
          <a href="/docs" className="transition-colors hover:text-neutral-100">
            Docs
          </a>
          <a
            href="/docs/installation"
            className="transition-colors hover:text-neutral-100"
          >
            Installation
          </a>
          <a
            href="/docs/components"
            className="transition-colors hover:text-neutral-100"
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
            className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs text-neutral-300 transition-all hover:bg-neutral-800 hover:text-white focus:ring-2 focus:ring-neutral-600 focus:outline-none sm:gap-4 sm:px-4 sm:py-2 sm:text-sm"
            aria-label="Open search dialog"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Search className="size-3.5 sm:size-4" />
              <span className="hidden sm:inline">Search</span>
            </div>

            <div className="hidden items-center gap-1 lg:flex">
              <kbd className="rounded bg-neutral-800 px-1.5 py-0.5 text-xs text-neutral-400">
                Ctrl
              </kbd>
              <kbd className="rounded bg-neutral-800 px-1.5 py-0.5 text-xs text-neutral-400">
                K
              </kbd>
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 p-2 text-neutral-300 transition-all hover:bg-neutral-800 hover:text-white md:hidden"
            aria-label="Toggle mobile menu"
          >
            <Menu className="size-4" />
          </button>
        </div>

        <DefaultSearchDialog open={open} onOpenChange={setOpen} />

        {mobileMenuOpen && (
          <div className="absolute top-14 right-0 left-0 border-b border-neutral-700 bg-neutral-900 backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-1 p-4 text-sm text-neutral-400">
              <a
                href="/docs"
                className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
              >
                Docs
              </a>
              <a
                href="/docs/installation"
                className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
              >
                Installation
              </a>
              <a
                href="/docs/components"
                className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
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
