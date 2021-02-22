# civil-movement

Civil movement in Thailand 2020

## Deployment

We build as a static

- Staging: https://electinth.github.io/civil-movement/
- Production: Not deployed yet

## Tech stack

- [Svelte](https://svelte.dev) on [Sapper](https://sapper.svelte.dev) with TypeScript
- [Tailwind CSS](https://tailwindcss.com)

## Getting started

1. Clone the project
2. Install dependency with `yarn` or `npm install`
3. Run development server with `yarn dev` or `npm run dev`

## Build

Run `export` with config environment

```bash
BASE_PATH=<site_base_path> SITE_URL=<site_absolute_url> GTAG=G-<google_analytics_id> yarn export
```

## Development Guideline

### File Structure

Based on Sapper starter template, the important one are:

- `src/components` - Svelte components. Shared component can be place on the root, but the component that only used in each page should keep inside subfolder with the ppage name.
- `src/routes` - Each Svelte component here representing each route/webpage that can be access from URL.
- `static` - Static assets such as images

### Styling

Encouraging to used pre-defined typography component and Tailwind css utility class that reflect designer's styleguide

- Typography: Use a `<Typography />` component. As represent typography name based on figma and `bold` props can be given.

```html
<script>
  import Typography from '../components/typography.svelte';
</script>

<div>
  <Typography as="h1" bold>Heading 1</Typography>
  <Typography as="h5">Heading 5</Typography>
  <Typography as="subtitle1" bold>Subtitle 1</Typography>
  <Typography as="subtitle5">Subtitle 5</Typography>
  <Typography as="body1" bold>Body 1</Typography>
  <Typography as="body2">Body 2</Typography>
</div>
```

- Color: Already added color system in `tailwind.config.json`. Should be ready to use in tailwind's classes. If not, more color can be added.

**Encouraging to use Tailwind classed instead of plain CSS styling** unless you really need it. It keep the code base consistance. (Might be struggle at first but when you are good at it, there is no turning back.

For VScode user, `bradlc.vscode-tailwindcss`, a tailwind class hint extension is recommend. [One more step is needed to support Svelte](https://willwillems.com/posts/tailwind-with-svelte-webpack.html#enabling-intellisense)

Example of using can be found on `nav.svelte`, `footer.svelte` and [Tailwind doc](https://tailwindcss.com/docs)

### Contributing

We decided to use Trunk-based development. Which mean no branch, all code pushed to master for continuous integration.

1. Pick as issue and assign yourself.
2. Pull rebase (`git pull --rebase`) often, before you start working and before you push your code.
3. Also push often (and commit small), Trunk-based need remote brance to be as up to dated as possible.
4. We have staging pipeline to deploy master branch to staging. So don't push if you code gonna break the build. (We can test build locally with `yarn export` or `npm run export`)
5. When committing code, `svelte-check` and `prettier` will be run. If there is an issue, it need to be fixed in order to commit succesfully.

**Thank you for every constribution!** Any question and feedback are welcome :)
