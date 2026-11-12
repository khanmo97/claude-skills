# Wada theme demo

A one-page landing page for a fictional coffee shop, used to show off the
[sanzo-wada-palettes](../skills/sanzo-wada-palettes/SKILL.md) skill. Built with Next.js, Tailwind, and shadcn/ui.

```bash
npm i && npm run dev
```

Open http://localhost:3000/?themes=1 and use the floating switcher (or the `[` / `]` keys) to cycle through eight Wada palettes.

- `lib/wada-themes.ts`: the eight themes as shadcn CSS variables (all pass WCAG 4.5:1 for body text)
- `components/wada-theme-switcher.tsx`: the floating theme switcher
