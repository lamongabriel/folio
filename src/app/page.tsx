import { MainLogo } from "@/components/icons/main-logo";
import { HomeHero } from "@/components/page/home/hero";
import { HomeSubHero } from "@/components/page/home/sub-hero";
import DotPattern from "@/components/shared/magic/dot-pattern";
import TypingAnimation from "@/components/shared/magic/typing-animation";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeSubHero />
    </main>
  );
}
