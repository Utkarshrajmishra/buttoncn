import Features from "@/components/landing/features";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
    </div>
  );
}
