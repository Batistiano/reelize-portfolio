import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto" : "text-left",
        "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p className="text-accent-primary text-sm font-mono uppercase tracking-widest mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg md:text-xl">{subtitle}</p>
      )}
    </div>
  );
}
