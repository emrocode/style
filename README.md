# Style

🎨 Personal design system, layout blocks, and theme primitives for shadcn/ui.

### Add registry

```json
{
  "registries": {
    "@emrocode": "https://style.emroco.de/r/{name}.json"
  }
}
```

### Usage

List all items in registry

```bash
pnpm dlx shadcn@latest list @emrocode
```

View a component

```bash
pnpm dlx shadcn@latest view @emrocode/app-header
```

Add a component

```bash
pnpm dlx shadcn@latest add @emrocode/app-header
```
