import Link from "next/link";

import { ThemeToggle } from "@/components/common/theme-toggle";
import { NavLink } from "@/components/common/nav-link";
import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "@/config/site";

/**
 * 상단 고정 헤더 — 로고, 데스크톱 네비게이션(md 이상), 테마 토글, 모바일 메뉴
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="font-semibold tracking-tight">
            {siteConfig.name}
          </Link>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.mainNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.title}
            </NavLink>
          ))}
        </nav>

        <ThemeToggle />
      </Container>
    </header>
  );
}
