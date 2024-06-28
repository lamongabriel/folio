import { MainLogo } from "@/components/icons/main-logo";
import { Button } from "@/components/ui/button";

export function Heading() {
  return (
    <div className="flex container py-4 items-center justify-between">
      <MainLogo className="z-0" size={120} />

      <div className="flex gap-1.5 items-center">
        <Button className="z-0" variant="ghost">
          Experience
        </Button>
        <Button className="z-0" variant="ghost">
          Technologies
        </Button>
        <Button className="z-0" variant="ghost">
          Get in Touch
        </Button>
        <Button className="z-0">
          Contact
        </Button>
      </div>
    </div>
  );
}
