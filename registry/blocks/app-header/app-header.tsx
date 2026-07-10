import {
  Hero,
  HeroAlert,
  HeroContent,
  HeroDescription,
  HeroTitle,
  Highlight,
} from "@/registry/ui/hero";

export function AppHeader() {
  return (
    <Hero>
      <HeroContent>
        <HeroAlert>v0.1.0 is out &mdash; explore the release notes</HeroAlert>
        <HeroTitle>
          <Highlight>Hello</Highlight> World
        </HeroTitle>
        <HeroDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque est
          sequi? Ea, ex veritatis?
        </HeroDescription>
      </HeroContent>
    </Hero>
  );
}
