import FadeIn from "./FadeIn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  return (
    <FadeIn className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-cream leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-cream/60 max-w-2xl leading-relaxed font-light" style={align === "center" ? { margin: "1rem auto 0" } : {}}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent ${align === "center" ? "mx-auto" : ""}`} />
    </FadeIn>
  );
}
