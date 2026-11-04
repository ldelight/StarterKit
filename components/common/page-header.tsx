import Link from "next/link";
import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

/** 빵부스러기 항목 타입 (마지막 항목은 href 없이 현재 페이지로 표시) */
export interface BreadcrumbEntry {
  title: string;
  href?: string;
}

/** PageHeader 속성 타입 */
interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbEntry[];
}

/**
 * 페이지 상단 제목 영역 — 빵부스러기(Breadcrumb), 제목, 설명을 표시합니다.
 * @param title 페이지 제목
 * @param description 제목 아래 설명
 * @param breadcrumbs 경로 표시 항목 목록
 */
export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <Fragment key={`${crumb.title}-${index}`}>
                  <BreadcrumbItem>
                    {isLast || !crumb.href ? (
                      <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink render={<Link href={crumb.href} />}>{crumb.title}</BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      )}
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}
