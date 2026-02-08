import Wrapper from "./wrapper";

const Features = () => {
  return (
    <section className="flex justify-center mt-14">
      <Wrapper className="py-16 px-4 sm:px-6">
        <div className="text-center mb-12 ">
          <p className="text-sm text-neutral-500 uppercase tracking-wider">
            Features
          </p>
          <h2 className="mt-3 bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-600 bg-clip-text text-transparent text-3xl md:text-4xl font-medium">
            Built for the shadcn ecosystem
          </h2>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto">
            Drop-in components designed to follow shadcn conventions — no extra
            dependencies, no runtime surprises.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition">
            <h3 className="text-lg font-medium text-neutral-100">
              Native shadcn Structure
            </h3>
            <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
              Built using the same patterns as shadcn. Copy the component, paste
              it into your project, and it just works.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition">
            <h3 className="text-lg font-medium text-neutral-100">
              Fully Customizable
            </h3>
            <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
             Every component respects your theme tokens and design system.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition">
            <h3 className="text-lg font-medium text-neutral-100">
              Registry Ready
            </h3>
            <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
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
