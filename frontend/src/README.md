# How this project is organised

```
src/
  main.jsx          starts the app (imports the global styles, wraps App in the router)
  App.jsx           routes only: which URL shows which page
  styles/           tokens.css (colours, radii, breakpoints), global.css (reset + base)
  assets/           icons/ and images/
  components/       small shared pieces used on many screens: Button, Logo, Icon, TextField
  layouts/          page frames: AuthLayout (form + brand panel), CenteredLayout
  features/         the real screens' parts, grouped by area: auth/, landing/ (dashboard/ is next)
  pages/            thin: a page only puts a layout and some features together
```

## Rules to keep it tidy

1. **One folder per component**, with its CSS next to it: `Button/Button.jsx` + `Button/Button.module.css`.
2. **Colours come from `tokens.css`.** Write `var(--purple)`, never `#5B3FA8`.
3. **Mobile first.** Write the phone styles normally, then add `@media (min-width: 768px)` and `(min-width: 1024px)` on top. No other breakpoints.
4. **No fixed widths on containers.** Use `width: 100%` with a `max-width`.
5. **Spacing belongs to the parent** (`gap`, or a margin on the parent's wrapper), not baked into the child.
6. **`className` passed to a shared component may only set layout** (width, margin, flex). For a different look, add a `variant`.
7. **Repeated blocks come from an array and `.map()`** (see `ProgrammeSection.jsx`).

## Install once

    npm install react-router-dom

## Where the placeholders are

Search the project for `TODO`. Sign up, log in and verify-email currently just move to the next page. Connect them to your backend there.
