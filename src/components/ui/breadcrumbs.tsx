import { ReactNode } from "react";
import { ChevronsRight } from "lucide-react";
export const BreadCrumbs = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode[];
}) => {
  return (
    <div className="p-2">
      <div className={`flex gap-2 items-center ${className}`}>
        {children.map((child, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 text-ellipsis whitespace-nowrap ${
              i === children.length - 1
                ? "text-accent-foreground"
                : "text-muted-foreground"
            }`}
          >
            {child}
            {i !== children.length - 1 && <ChevronsRight className="w-4 h-4" />}
          </div>
        ))}
      </div>
    </div>
  );
};
