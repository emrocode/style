import * as React from "react";
import { GitHubCorner } from "@/registry/blocks/github-corner/github-corner";
import { AppHeader } from "@/registry/blocks/app-header/app-header";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Style</h1>
        <p className="max-w-lg text-pretty text-muted-foreground">
          Personal design system, layout blocks, and theme primitives for
          shadcn/ui.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-48 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple GitHub corner component
            </h2>
          </div>
          <div className="relative">
            <GitHubCorner href="https://github.com/emrocode/style" />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-48 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A header component
            </h2>
          </div>
          <div className="relative">
            <AppHeader />
          </div>
        </div>
      </main>
    </div>
  );
}
