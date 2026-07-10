import { AppHeader } from "@/registry/blocks/app-header/app-header";
import { GitHubCorner } from "@/registry/blocks/github-corner/github-corner";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl tracking-tight">Style</h1>
        <p className="max-w-lg text-pretty text-muted-foreground">
          Personal design system, layout blocks, and theme primitives for
          shadcn/ui.
        </p>
      </header>
      <main className="flex flex-1 flex-col gap-8">
        <div className="relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              A simple GitHub corner component
            </h2>
          </div>
          <div className="relative min-h-48">
            <GitHubCorner href="https://github.com/emrocode/style" />
          </div>
        </div>

        <div className="relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              A header component
            </h2>
          </div>
          <div className="relative min-h-48">
            <AppHeader />
          </div>
        </div>
      </main>
    </div>
  );
}
