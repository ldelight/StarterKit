import { Spinner } from "@/components/ui/spinner";

/**
 * 라우트 전환 중 표시되는 로딩 화면
 */
export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <Spinner className="size-8 text-muted-foreground" />
    </div>
  );
}
