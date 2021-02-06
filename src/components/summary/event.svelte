<script lang="ts">
  import Typography from '../typography.svelte';

  export let graphics: string, title: string;

  let src = `images/summary/${graphics}.svg`,
    alt = `${graphics}-diagram`;
</script>

<div class="flex my-10 max-w-4xl w-full mb-80 items-center">
  <div class="w-5/12 mr-auto">
    <Typography as="h2" bold class="mb-16">
      {title}
    </Typography>
    <Typography as="body1" class="whitespace-pre-wrap">
      <slot />
    </Typography>
  </div>
  <div class="w-5/12">
    {#if graphics}
      <img {src} {alt} />
    {/if}
  </div>
</div>
