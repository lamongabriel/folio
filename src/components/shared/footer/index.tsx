"use client";

import { MainLogo } from "@/components/icons/main-logo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-border/40 mt-20">
      <div className="container py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <MainLogo size={100} />
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Gabriel Lamon. {t.footer.rights}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="https://github.com/lamongabriel" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">{t.footer.github}</Button>
          </Link>
          <Link href="https://linkedin.com/in/lamongabriel" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">{t.footer.linkedin}</Button>
          </Link>
          <Link href="mailto:lamongabriel@icloud.com">
            <Button variant="ghost" size="sm">{t.footer.email}</Button>
          </Link>
          <Link href="tel:+5524999127331">
            <Button variant="ghost" size="sm">{t.footer.phone}</Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
