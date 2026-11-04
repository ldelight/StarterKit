import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "문의하기",
  description: "궁금한 점이나 제안 사항을 남겨 주세요.",
};

/**
 * 문의 페이지 — 검증이 포함된 문의 폼을 보여줍니다.
 */
export default function ContactPage() {
  return (
    <Container className="flex flex-col gap-8 py-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">문의하기</h1>
        <p className="mt-2 text-muted-foreground">궁금한 점이나 제안 사항을 남겨 주세요.</p>
      </div>
      <ContactForm />
    </Container>
  );
}
