"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

/** 에러 페이지 프롭 타입 */
interface ErrorPageProps {
  error: Error & { digest?: string };
  retry: () => void;
}

/**
 * 런타임 에러 발생 시 표시되는 경계 화면
 * 에러는 콘솔에 남기고, 재시도 버튼으로 해당 세그먼트를 다시 렌더링합니다.
 * @param error 발생한 에러
 * @param retry 세그먼트 재렌더링 함수
 */
export default function ErrorPage({ error, retry }: ErrorPageProps) {
  useEffect(() => {
    // 운영 환경에서는 에러 리포팅 서비스(예: Sentry)로 전송하도록 교체하세요.
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight">문제가 발생했습니다</h1>
      <p className="text-muted-foreground">잠시 후 다시 시도해 주세요.</p>
      <Button onClick={() => retry()}>다시 시도</Button>
    </Container>
  );
}
