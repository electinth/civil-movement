<script context="module">
  export const routes = [
    { label: 'Explore', path: '' },
    { label: 'Summary', path: 'summary' },
    { label: 'About', path: 'about' },
  ];
</script>

<script lang="ts">
  import Typography from './typography.svelte';

  export let activePath: string | undefined;
</script>

<div class="flex flex-row px-3 bg-white h-10 md:h-12 z-10">
  <div class="md:flex-1 flex">
    <a href="./" class="h-4 md:h-5 my-auto">
      <img src="images/logo-elect-header.svg" alt="ELECT" class="h-4 md:h-5" />
    </a>
  </div>
  <div class="hidden md:flex">
    <a href="./" class="my-auto flex">
      <Typography as="h3">CIVIL MOVEMENT 2020</Typography>
    </a>
  </div>
  <div class="flex-1 flex justify-end space-x-1 md:space-x-4">
    {#each routes as { path, label }}
      <a
        href="./{path}"
        alt={label}
        class="my-auto px-2 py-1 rounded-full {path === activePath
          ? ''
          : 'hover:bg-gray hover:text-white'}"
      >
        <Typography as="subtitle5" bold={path === activePath}
          >{label}</Typography
        >
      </a>
    {/each}
  </div>
</div>
