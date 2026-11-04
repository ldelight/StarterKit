import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * 콘텐츠 최대 너비와 좌우 여백(16px 기준 반응형)을 지정하는 래퍼
 * @param props div 속성
 */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)} {...props} />;
}
