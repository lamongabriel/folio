"use client";

import { MainLogo } from "@/components/icons/main-logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "@/components/shared/language-selector";
import { useLanguage } from "@/lib/i18n/language-context";

export function Heading() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <MainLogo className="z-0" size={100} />

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-1.5 items-center">
          <Button className="z-0" variant="ghost" asChild>
            <a href="#experience">{t.nav.experience}</a>
          </Button>
          <Button className="z-0" variant="ghost" asChild>
            <a href="#skills">{t.nav.skills}</a>
          </Button>
          <Button className="z-0" variant="ghost" asChild>
            <a href="#about">{t.nav.about}</a>
          </Button>
          <Button className="z-0" asChild>
            <a href="#contact">{t.nav.contact}</a>
          </Button>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-background border-b border-border/40">
            <Button className="w-full justify-start" variant="ghost" asChild onClick={toggleMenu}>
              <a href="#experience">{t.nav.experience}</a>
            </Button>
            <Button className="w-full justify-start" variant="ghost" asChild onClick={toggleMenu}>
              <a href="#skills">{t.nav.skills}</a>
            </Button>
            <Button className="w-full justify-start" variant="ghost" asChild onClick={toggleMenu}>
              <a href="#about">{t.nav.about}</a>
            </Button>
            <Button className="w-full justify-start" variant="default" asChild onClick={toggleMenu}>
              <a href="#contact">{t.nav.contact}</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
