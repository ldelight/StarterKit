import { z } from "zod";

/**
 * 문의 폼 검증 스키마
 * 클라이언트 검증용이며, 서버 액션/API에서도 같은 스키마로 다시 검증하세요.
 */
export const contactSchema = z.object({
  name: z.string().min(2, { message: "이름은 2자 이상 입력해 주세요." }),
  email: z.email({ message: "올바른 이메일 주소를 입력해 주세요." }),
  message: z
    .string()
    .min(10, { message: "문의 내용은 10자 이상 입력해 주세요." })
    .max(1000, { message: "문의 내용은 1000자 이하로 입력해 주세요." }),
  agree: z.boolean().refine((value) => value, {
    message: "개인정보 수집에 동의해 주세요.",
  }),
});

/** 문의 폼 값 타입 (스키마에서 추론) */
export type ContactFormValues = z.infer<typeof contactSchema>;
