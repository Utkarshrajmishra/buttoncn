"use client"

import Wrapper from "./wrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <section className="flex px-4  sm:px-6 justify-center">
      <Wrapper className="py-20">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-neutral-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-medium bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto">
            Everything you need to know before adding components to your project.
          </p>
        </div>

        {/* Accordion */}
        <div className="md:w-3xl mx-auto ">
          <Accordion type="single" collapsible className="space-y-4">

            <AccordionItem
              value="item-1"
              className="border border-neutral-800 rounded-xl bg-neutral-900/60 backdrop-blur-sm overflow-hidden"
            >
              <AccordionTrigger className="w-full px-6 py-4 text-neutral-100 text-left justify-start hover:no-underline">
                Is this an npm package?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-neutral-500 leading-relaxed text-left">
                No. This is a shadcn registry. Components are copied directly
                into your project — no runtime dependency, no lock-in.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-neutral-800 rounded-xl bg-neutral-900/60 backdrop-blur-sm overflow-hidden"
            >
              <AccordionTrigger className="w-full px-6 py-4 text-neutral-100 text-left justify-start hover:no-underline">
                Does it work with the shadcn CLI?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-neutral-500 leading-relaxed text-left">
                Yes. Components follow shadcn conventions and can be installed
                via registry or added manually.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-neutral-800 rounded-xl bg-neutral-900/60 backdrop-blur-sm overflow-hidden"
            >
              <AccordionTrigger className="w-full px-6 py-4 text-neutral-100 text-left justify-start hover:no-underline">
                Are there any extra dependencies?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-neutral-500 leading-relaxed text-left">
                No additional runtime dependencies. Components are built using
                React, Tailwind CSS, and shadcn patterns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-neutral-800 rounded-xl bg-neutral-900/60 backdrop-blur-sm overflow-hidden"
            >
              <AccordionTrigger className="w-full px-6 py-4 text-neutral-100 text-left justify-start hover:no-underline">
                Can I customize the styles?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-neutral-500 leading-relaxed text-left">
                Absolutely. All components respect your Tailwind config,
                theme tokens, radius scale, and design system.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

      </Wrapper>
    </section>
  )
}

export default FAQ
