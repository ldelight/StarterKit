import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * sitemap.xml 생성 — 네비게이션에 등록된 공개 경로를 나열합니다.
 * 동적 라우트가 생기면 여기에 데이터 기반 항목을 추가하세요.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.mainNav.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
  }));
}
