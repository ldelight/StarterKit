import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * robots.txt 생성 — 모든 크롤러를 허용하고 sitemap 위치를 알립니다.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
