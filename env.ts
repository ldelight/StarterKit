import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * 환경변수 타입 안전 검증 (@t3-oss/env-nextjs)
 * 새 환경변수는 여기에 스키마를 추가하세요. 값이 잘못되면 빌드/시작 시점에 바로 에러가 납니다.
 * 클라이언트에서 쓸 변수는 NEXT_PUBLIC_ 접두사를 붙이고 client에, 서버 전용은 server에 선언합니다.
 */
export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  emptyStringAsUndefined: true,
});
