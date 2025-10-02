# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## This project was created with the [Solid CLI](https://github.com/solidjs-community/solid-cli)

## Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

update `app.config.ts`

```ts
import { defineConfig } from "@solidjs/start/config"
import tailwindcss from "@tailwindcss/vite"
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
})
```

add `app.css`

```css
@import "tailwindcss";

:root {
  --background-rgb: 214, 219, 220;
  --foreground-rgb: 0, 0, 0;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-rgb: 0, 0, 0;
    --foreground-rgb: 255, 255, 255;
  }
}

body {
  background: rgb(var(--background-rgb));
  color: rgb(var(--foreground-rgb));
}
```
