import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

/**
 * 랜딩 히어로 섹션 — 제목, 설명, 주요 CTA 버튼
 */
export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          빠르게 시작하는 <span className="text-primary">웹 스타터킷</span>
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Next.js App Router, Tailwind CSS, shadcn/ui로 구성된 프로젝트 기반입니다.
          레이아웃과 다크 모드는 준비되어 있으니 바로 기능 개발을 시작하세요.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" render={<Link href="/contact" />}>
            문의하기
            <ArrowRightIcon />
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/about" />}>
            소개 보기
          </Button>
        </div>
      </Container>
    </section>
  );
}
