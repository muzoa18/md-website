import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import {
  buttonBase,
  buttonVariants,
  cx,
  type ButtonVariant,
} from "./button-styles";

/** Constrains content width and applies the standard horizontal gutter. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/** Small uppercase eyebrow above a section heading. */
export function Eyebrow({
  children,
  className,
  light,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cx(
        "font-display text-sm font-bold uppercase tracking-[0.22em]",
        light ? "text-gold" : "text-blue",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Large condensed section heading. */
export function Heading({
  children,
  className,
  as: As = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <As
      className={cx(
        "font-display font-black uppercase leading-[0.98] tracking-tight",
        "text-[clamp(2rem,4vw,3.2rem)]",
        className,
      )}
    >
      {children}
    </As>
  );
}

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  withArrow?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

/** Primary call-to-action. Renders an external <a> when `external`. */
export function Button({
  children,
  href,
  variant = "gold",
  external,
  withArrow,
  className,
  ...rest
}: ButtonProps) {
  const classes = cx(buttonBase, buttonVariants[variant], className);
  const inner = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...(rest as ComponentProps<"a">)}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}
