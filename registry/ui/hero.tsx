import * as React from "react";

import { cn } from "@/lib/utils";

function Hero({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="hero"
      className={cn("border-b border-border", className)}
      {...props}
    />
  );
}

function HeroContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="hero-content"
      className={cn(
        "container flex flex-col items-center py-20 text-center md:py-32",
        className,
      )}
      {...props}
    />
  );
}

type HeroAlertProps =
  | ({ href: string } & React.ComponentProps<"a">)
  | ({ href?: undefined } & React.ComponentProps<"span">);

const heroAlertClassName =
  "mb-8 max-w-2xl w-fit border-y border-y-background/10 inline-flex shadow-xs shadow-inner items-center rounded-full ring ring-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground";

function HeroAlert(props: HeroAlertProps) {
  if ("href" in props && props.href) {
    const { href, className, ...anchorProps } = props;

    return (
      <a
        data-slot="hero-alert"
        href={href}
        className={cn(
          heroAlertClassName,
          "transition-colors hover:bg-muted/80",
          className,
        )}
        {...anchorProps}
      />
    );
  }

  const { className, ...spanProps } = props;

  return (
    <span
      data-slot="hero-alert"
      className={cn(heroAlertClassName, className)}
      {...spanProps}
    />
  );
}

function HeroTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="hero-title"
      className={cn(
        "mx-auto max-w-3xl pb-6 text-4xl font-bold tracking-tight md:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

function HeroDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="hero-description"
      className={cn(
        "text-muted-foreground mx-auto mt-2 max-w-2xl text-base leading-relaxed md:text-lg",
        className,
      )}
      {...props}
    />
  );
}

function HeroActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="hero-actions"
      className={cn(
        "mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start",
        className,
      )}
      {...props}
    />
  );
}

function Highlight({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="highlight"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Hero,
  HeroContent,
  HeroAlert,
  HeroTitle,
  HeroDescription,
  HeroActions,
  Highlight,
};
