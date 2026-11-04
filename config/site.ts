import { env } from "@/env";

/** 네비게이션 링크 항목 */
export interface NavItem {
  title: string;
  href: string;
}

/** 사이트 전역 설정 타입 */
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  mainNav: NavItem[];
}

/**
 * 사이트 전역 설정
 * 프로젝트에 맞게 이름, 설명, 네비게이션 링크를 수정하세요.
 */
export const siteConfig: SiteConfig = {
  name: "Starter Kit",
  description: "Next.js 16 · Tailwind CSS · shadcn/ui 기반 웹 스타터킷",
  url: env.NEXT_PUBLIC_SITE_URL,
  mainNav: [
    { title: "홈", href: "/" },
    { title: "소개", href: "/about" },
    { title: "문의", href: "/contact" },
  ],
};
