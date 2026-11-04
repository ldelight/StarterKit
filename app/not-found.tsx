import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

/**
 * 404 페이지 — 존재하지 않는 경로에서 표시됩니다.
 */
export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="text-3xl font-bold tracking-tight">페이지를 찾을 수 없습니다</h1>
      <p className="text-muted-foreground">주소가 잘못되었거나 페이지가 이동되었을 수 있습니다.</p>
      {/* 링크는 buttonVariants를 적용해 네이티브 <a>로 렌더 */}
      <Link href="/" className={buttonVariants()}>
        홈으로 돌아가기
      </Link>
    </Container>
  );
}
