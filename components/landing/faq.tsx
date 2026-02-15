"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Wrapper from "./wrapper";

const FAQ = () => {
  return (
    <section className="flex justify-center px-4 sm:px-6">
      <Wrapper className="py-20">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm tracking-wider text-neutral-500 uppercase">
            FAQ
          </p>
          <h2 className="mt-3 bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-600 bg-clip-text text-3xl font-medium text-transparent md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
            Everything you need to know before adding components to your
            project.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto md:w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm"
            >
              <AccordionTrigger className="w-full justify-start px-6 py-4 text-left text-neutral-100 hover:no-underline">
                Is this an npm package?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-left leading-relaxed text-neutral-500">
                No. This is a shadcn registry. Components are copied directly
                into your project — no runtime dependency, no lock-in.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm"
            >
              <AccordionTrigger className="w-full justify-start px-6 py-4 text-left text-neutral-100 hover:no-underline">
                Does it work with the shadcn CLI?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-left leading-relaxed text-neutral-500">
                Yes. Components follow shadcn conventions and can be installed
                via registry or added manually.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm"
            >
              <AccordionTrigger className="w-full justify-start px-6 py-4 text-left text-neutral-100 hover:no-underline">
                Are there any extra dependencies?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-left leading-relaxed text-neutral-500">
                No additional runtime dependencies. Components are built using
                React, Tailwind CSS, and shadcn patterns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm"
            >
              <AccordionTrigger className="w-full justify-start px-6 py-4 text-left text-neutral-100 hover:no-underline">
                Can I customize the styles?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-left leading-relaxed text-neutral-500">
                Absolutely. All components respect your Tailwind config, theme
                tokens, radius scale, and design system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Wrapper>
    </section>
  );
};

export default FAQ;
