import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

/**
 * 페이지 하단 행동 유도(CTA) 섹션
 */
export function CallToAction() {
  return (
    <section className="border-t py-16">
      <Container className="flex flex-col items-center gap-4 rounded-xl bg-muted px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">지금 바로 프로젝트를 시작하세요</h2>
        <p className="max-w-xl text-muted-foreground">
          이 화면의 섹션을 교체하거나 새 페이지를 추가해 나만의 서비스를 만들어 보세요.
        </p>
        {/* 링크는 buttonVariants를 적용해 네이티브 <a>로 렌더 */}
        <Link href="/about" className={buttonVariants()}>
          자세히 알아보기
        </Link>
      </Container>
    </section>
  );
}
