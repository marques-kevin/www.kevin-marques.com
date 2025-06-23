import { cn } from "@/lib/utils";

export const Logo: React.FC<{
  hideText?: boolean;
  className?: string;
  logoClassName?: string;
}> = ({ hideText, className, logoClassName }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 self-center font-medium",
        className
      )}
    >
      <div className={cn("size-8", logoClassName)}>
        <img src="/logo.png" alt="Sitemapy" className="h-full w-full" />
      </div>
      {!hideText && <span>Sitemapy</span>}
    </div>
  );
};
