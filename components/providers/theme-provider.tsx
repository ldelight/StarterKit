"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

/**
 * next-themes 기반 테마 프로바이더
 * attribute="class"로 <html>에 .dark 클래스를 토글하여 globals.css의 다크 모드 변수와 맞춥니다.
 * @param props next-themes ThemeProvider 속성
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
