"use client";

import { useState } from "react";
import DefaultSearchDialog from "./search";

const SearchBlock = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
     
      <div onClick={()=>setIsOpen(true)} className="bg-neutral-200 border border-neutral-800 rounded-xl">
        Search
      </div>
    </>
  );
};

export default SearchBlock;
