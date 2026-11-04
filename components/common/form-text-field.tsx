"use client";

import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";

import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/** FormTextField 속성 타입 */
interface FormTextFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder?: string;
  description?: string;
  type?: string;
  multiline?: boolean;
}

/**
 * React Hook Form과 shadcn Field를 묶은 텍스트 입력 필드
 * 라벨, 설명, 에러 메시지를 한 곳에서 처리합니다.
 * @param control useForm에서 받은 control 객체
 * @param name 폼 값의 필드 이름
 * @param multiline true면 Textarea, 아니면 Input을 사용
 */
export function FormTextField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  type = "text",
  multiline = false,
}: FormTextFieldProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
          {multiline ? (
            <Textarea
              {...field}
              id={field.name}
              value={field.value ?? ""}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
            />
          ) : (
            <Input
              {...field}
              id={field.name}
              type={type}
              value={field.value ?? ""}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
            />
          )}
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
