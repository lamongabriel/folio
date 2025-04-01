import { HomeHero } from "@/components/page/home/hero";
import { HomeSubHero } from "@/components/page/home/sub-hero";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <HomeHero />
      <HomeSubHero />
    </main>
  );
}
