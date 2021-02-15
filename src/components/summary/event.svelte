<script lang="ts">
  import Typography from '../typography.svelte';

  export let graphics: string = '',
    title: string = '',
    sub = false,
    first = false;

  let src = `images/summary/${graphics}.svg`,
    alt = `${graphics}-diagram`;
</script>

<div
  class="flex flex-col md:flex-row my-6 md:my-10 max-w-5xl w-full space-y-6 md:space-y-0 md:space-x-8 px-4
{first
    ? 'mt-14 md:mt-48'
    : sub
    ? ''
    : 'mt-16 md:mt-64'}"
>
  <div class="md:w-6/12 {sub ? 'md:pl-28' : ''}">
    {#if !sub}
      <Typography as="h2" bold class="mb-4 md:mb-12">
        {title}
      </Typography>
    {/if}
    <Typography as="body1" class="whitespace-pre-wrap">
      <slot />
    </Typography>
  </div>
  <div class="flex-1">
    {#if graphics}
      <img class="mx-auto" {src} {alt} />
    {/if}
  </div>
</div>
