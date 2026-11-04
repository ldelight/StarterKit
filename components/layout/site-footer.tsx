import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

/**
 * 현재 연도를 반환합니다.
 * cacheComponents 모드에서는 렌더 중 현재 시각을 직접 읽을 수 없으므로 "use cache"로 감쌉니다.
 */
async function getCopyrightYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

/**
 * 하단 푸터 — 사이트명과 저작권 표기
 */
export async function SiteFooter() {
  const currentYear = await getCopyrightYear();

  return (
    <footer className="mt-auto">
      <Separator />
      <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
        <p>{siteConfig.description}</p>
      </Container>
    </footer>
  );
}
