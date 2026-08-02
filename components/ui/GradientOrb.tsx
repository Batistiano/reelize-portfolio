import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  color?: "primary" | "warm" | "soft";
  speed?: "slow" | "slower";
}

export function GradientOrb({
  className,
  color = "primary",
  speed = "slow",
}: GradientOrbProps) {
  const colorMap = {
    primary: "bg-accent-primary",
    warm: "bg-accent-warm",
    soft: "bg-accent-soft",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full blur-3xl opacity-40 pointer-events-none",
        colorMap[color],
        speed === "slow" ? "animate-float-slow" : "animate-float-slower",
        className
      )}
    />
  );
}
