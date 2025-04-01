"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Language } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languageNames: Record<Language, string> = {
  "en": "English",
  "pt-BR": "Português",
  "it": "Italiano"
};

const languageFlags: Record<Language, string> = {
  "en": "🇺🇸",
  "pt-BR": "🇧🇷",
  "it": "🇮🇹"
};

interface LanguageSelectorProps {
  variant?: "header" | "floating";
}

export function LanguageSelector({ variant = "header" }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "floating") {
    return (
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="default" 
              size="icon" 
              className="rounded-full h-12 w-12 shadow-lg" 
              aria-label="Select language"
            >
              <Globe className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {Object.entries(languageNames).map(([code, name]) => (
              <DropdownMenuItem 
                key={code}
                className={language === code ? "bg-accent" : ""}
                onClick={() => setLanguage(code as Language)}
              >
                <span className="mr-2">{languageFlags[code as Language]}</span>
                {name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Select language">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem 
            key={code}
            className={language === code ? "bg-accent" : ""}
            onClick={() => setLanguage(code as Language)}
          >
            <span className="mr-2">{languageFlags[code as Language]}</span>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
