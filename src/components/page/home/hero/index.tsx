import { cn } from "@/lib/utils";

import DotPattern from "@/components/shared/magic/dot-pattern";
import TypingAnimation from "@/components/shared/magic/typing-animation";

export function HomeHero() {
  return (
    <div className="flex min-h-screen flex-col py-20">
      <DotPattern
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] -z-10",
        )}
      />

      <div className="container">
        <TypingAnimation
          className="text-left max-w-[380px] font-title text-[84px] font-semibold leading-[1.05] tracking-tight md:text-[56px] sm:text-[32px]"
          text="Hey there, I'm Gabriel Lamon"
        />

        <p className="mt-5 max-w-md text-[18px] leading-snug tracking-tight text-gray-200 lg:mt-4 md:mt-3.5 md:text-[16px] sm:mt-3 sm:text-[15px]">
          Fullstack engineer with 5+ years of experience creating seamless,
          efficient applications that solve real-world problems.
        </p>
      </div>
    </div>
  );
}
