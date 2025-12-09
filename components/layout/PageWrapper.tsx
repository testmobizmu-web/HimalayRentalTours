// components/layout/PageWrapper.tsx
import type { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div
      className={`page-wrapper flex flex-col min-h-full ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
