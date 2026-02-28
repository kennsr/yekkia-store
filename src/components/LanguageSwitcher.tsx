"use client";
import { Link, usePathname } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <div className="language-switcher">
      <Link
        href={pathname}
        locale="id"
        className="lang-btn"
        aria-label="Indonesian"
      >
        🇮🇩
      </Link>
      <Link
        href={pathname}
        locale="en"
        className="lang-btn"
        aria-label="English"
      >
        🇬🇧
      </Link>
    </div>
  );
}
