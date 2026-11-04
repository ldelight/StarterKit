import { CallToAction } from "@/components/sections/call-to-action";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";

/**
 * 랜딩 페이지 — 섹션 블록을 조합합니다.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <CallToAction />
    </>
  );
}
