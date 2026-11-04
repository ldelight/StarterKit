import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/common/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "소개",
  description: "이 스타터킷의 구성과 사용 방법을 소개합니다.",
};

/** 자주 묻는 질문 예시 데이터 */
const faqItems = [
  {
    question: "컴포넌트는 어디에 추가하나요?",
    answer: "shadcn/ui 컴포넌트는 components/ui, 공용 컴포넌트는 components/common, 레이아웃은 components/layout에 둡니다.",
  },
  {
    question: "새 페이지는 어떻게 만드나요?",
    answer: "app 아래에 폴더를 만들고 page.tsx를 추가하세요. 제목은 metadata에 지정하면 사이트명과 자동으로 합쳐집니다.",
  },
  {
    question: "환경변수는 어디서 관리하나요?",
    answer: "env.ts에 스키마를 선언하면 잘못된 값이 있을 때 바로 에러로 알려 줍니다.",
  },
];

/**
 * 소개 페이지 — 빵부스러기, 프로젝트 요약 카드, FAQ 아코디언을 보여줍니다.
 */
export default function AboutPage() {
  return (
    <Container className="flex flex-col gap-10 py-12">
      <PageHeader
        title="소개"
        description="이 스타터킷의 구성과 사용 방법입니다."
        breadcrumbs={[{ title: "홈", href: "/" }, { title: "소개" }]}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>기술 스택</CardTitle>
            <CardDescription>Next.js 16 · React 19 · TypeScript · Tailwind CSS · shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            zustand, react-hook-form, zod, next-themes, sonner 등 검증된 라이브러리를 기본 포함합니다.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>폴더 구조</CardTitle>
            <CardDescription>계층을 나누어 의존 방향을 한쪽으로 유지합니다.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            ui → common → layout → sections → app 순으로 가져와 사용합니다.
          </CardContent>
        </Card>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">자주 묻는 질문</h2>
        <Accordion>
          {faqItems.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Container>
  );
}
