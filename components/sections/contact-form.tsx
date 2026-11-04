"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormTextField } from "@/components/common/form-text-field";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";

/**
 * 문의 폼 — React Hook Form + Zod 검증, 제출 시 sonner 토스트로 결과를 알립니다.
 * 실제 전송 로직은 onSubmit에서 API 호출로 교체하세요.
 */
export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      agree: false,
    },
  });

  /**
   * 제출 처리 — 검증을 통과한 값만 들어옵니다.
   * @param values 검증된 문의 폼 값
   */
  async function onSubmit(values: ContactFormValues) {
    // TODO: 실제 API 호출로 교체 (예: await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) }))
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success("문의가 접수되었습니다.", {
      description: `${values.name}님, 확인 후 ${values.email}로 답변드리겠습니다.`,
    });
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-xl flex-col gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormTextField control={form.control} name="name" label="이름" placeholder="홍길동" />
        <FormTextField
          control={form.control}
          name="email"
          label="이메일"
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <FormTextField
        control={form.control}
        name="message"
        label="문의 내용"
        placeholder="문의하실 내용을 입력해 주세요."
        description="최대 1000자까지 입력할 수 있습니다."
        multiline
      />

      <Controller
        control={form.control}
        name="agree"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="flex items-center gap-2">
              <Checkbox
                id={field.name}
                name={field.name}
                ref={field.ref}
                onBlur={field.onBlur}
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-invalid={fieldState.invalid}
              />
              <FieldLabel htmlFor={field.name} className="font-normal">
                개인정보 수집 및 이용에 동의합니다.
              </FieldLabel>
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button type="submit" disabled={form.formState.isSubmitting} className="self-start">
        {form.formState.isSubmitting ? "전송 중..." : "문의 보내기"}
      </Button>
    </form>
  );
}
