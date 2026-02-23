import Wrapper from "./wrapper";

const Features = () => {
  return (
    <section className="mt-14 flex justify-center">
      <Wrapper className="px-4 py-16 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm tracking-wider text-neutral-500 uppercase">
            Features
          </p>
          <h2 className="mt-3 bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-600 bg-clip-text text-3xl font-medium text-transparent md:text-4xl">
            Built for the shadcn ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
            Drop-in components designed to follow shadcn conventions — no extra
            dependencies, no runtime surprises.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-700">
            <h3 className="text-lg font-medium text-neutral-100">
              Native shadcn Structure
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Built using the same patterns as shadcn. Copy the component, paste
              it into your project, and it just works.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-700">
            <h3 className="text-lg font-medium text-neutral-100">
              Fully Customizable
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Every component respects your theme tokens and design system.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-700">
            <h3 className="text-lg font-medium text-neutral-100">
              Registry Ready
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Install via registry or copy manually. Works seamlessly with the
              shadcn CLI workflow.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
