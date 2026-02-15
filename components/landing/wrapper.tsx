import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <section className={cn("3xl:max-w-7xl h-fit w-full max-w-6xl", className)}>
      {children}
    </section>
  );
};

export default Wrapper;
