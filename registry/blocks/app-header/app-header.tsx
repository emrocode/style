import {
  Hero,
  HeroContent,
  HeroTitle,
  HeroDescription,
  Highlight,
  HeroAlert,
  HeroActions,
} from "@/registry/ui/hero";

export function AppHeader() {
  return (
    <Hero>
      <HeroContent>
        <HeroAlert>v0.1.0 is out &mdash; explore the release notes</HeroAlert>
        <HeroTitle>
          <Highlight>St</Highlight>yle
        </HeroTitle>
        <HeroDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque est
          sequi? Ea, ex veritatis?
        </HeroDescription>
      </HeroContent>
    </Hero>
  );
}
