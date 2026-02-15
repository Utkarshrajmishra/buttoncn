"use client";

import { useState } from "react";

import DefaultSearchDialog from "./search";

const SearchBlock = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="rounded-xl border border-neutral-800 bg-neutral-200"
      >
        Search
      </div>
    </>
  );
};

export default SearchBlock;
