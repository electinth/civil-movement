<script lang="ts">
  import Typography from './typography.svelte';

  const routes = [
    { label: 'Explore', href: '/' },
    { label: 'Summary', href: '/summary' },
    { label: 'About', href: '/about' },
  ];
</script>

<div class="flex flex-row py-2 px-3 bg-white">
  <div class="md:flex-1 flex">
    <a href="/" class="h-4 md:h-5 my-auto">
      <img src="images/logo-elect-header.svg" alt="ELECT" class="h-4 md:h-5" />
    </a>
  </div>
  <div class="hidden md:flex">
    <a href="/">
      <Typography as="h3">CIVIL MOVEMENT 2020</Typography>
    </a>
  </div>
  <div class="flex-1 flex justify-end space-x-1">
    {#each routes as { href, label }}
      <a
        {href}
        alt={label}
        class="my-auto px-2 py-1 rounded-full hover:bg-gray hover:text-white">
        <Typography as="subtitle5" bold>{label}</Typography>
      </a>
    {/each}
  </div>
</div>
