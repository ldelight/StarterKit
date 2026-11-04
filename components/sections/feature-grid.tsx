import { Blocks, Moon, Rocket, ShieldCheck, Smartphone, Wrench, type LucideIcon } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";

/** 기능 카드 항목 타입 */
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** 랜딩에 노출할 기능 목록 */
const features: FeatureItem[] = [
  {
    icon: Rocket,
    title: "App Router",
    description: "Next.js 16 App Router 구조와 레이아웃, 메타데이터 설정이 준비되어 있습니다.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui 컴포넌트",
    description: "버튼, 카드, 시트, 드롭다운 등 자주 쓰는 UI를 바로 가져다 쓸 수 있습니다.",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description: "시스템 설정을 따르며, 헤더에서 라이트/다크를 직접 고를 수 있습니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 레이아웃",
    description: "모바일에서는 시트 메뉴, 데스크톱에서는 상단 네비게이션을 보여줍니다.",
  },
  {
    icon: ShieldCheck,
    title: "타입 안전성",
    description: "TypeScript 기본 설정과 엄격 모드가 적용되어 있습니다.",
  },
  {
    icon: Wrench,
    title: "확장 가능한 구조",
    description: "ui, common, layout, sections 계층으로 나뉘어 있어 기능 추가가 간단합니다.",
  },
];

/**
 * 기술 스택과 주요 기능을 카드 그리드로 보여주는 섹션
 */
export function FeatureGrid() {
  return (
    <section className="border-t py-16">
      <Container className="flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">포함된 기능</h2>
          <p className="mt-2 text-muted-foreground">필요한 기반을 미리 갖춘 상태로 시작합니다.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="mb-2 size-6 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
