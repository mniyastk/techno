import { Zap } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export function Logo({ size = "md", showIcon = true }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 36
  };

  return (
    <div className="flex items-center space-x-2">
      {showIcon && (
        <div className="p-2 bg-primary rounded-lg">
          <Zap 
            size={iconSizes[size]} 
            className="text-primary-foreground" 
          />
        </div>
      )}
      <div className="flex flex-col">
        <h1 className={`${sizeClasses[size]} font-bold text-primary leading-none`}>
          TechnoBazics
        </h1>
        {size !== "sm" && (
          <span className="text-xs text-muted-foreground tracking-wide">
            AI & IoT Solutions
          </span>
        )}
      </div>
    </div>
  );
}