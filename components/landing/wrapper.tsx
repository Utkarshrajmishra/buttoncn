import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <section className={cn("h-fit  w-full max-w-6xl  3xl:max-w-7xl", className)}>
      {children}
    </section>
  );
};

export default Wrapper;
