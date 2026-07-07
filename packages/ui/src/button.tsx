import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export function Button({ children, className }: ButtonProps): ReactNode {
  return <button className={className}>{children}</button>;
}
