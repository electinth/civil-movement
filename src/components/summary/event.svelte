<script lang="ts">
  import Typography from '../typography.svelte';

  export let graphics: string,
    title: string,
    sub = false;

  let src = `images/summary/${graphics}.svg`,
    alt = `${graphics}-diagram`;
</script>

<div
  class="flex my-10 max-w-4xl w-full
{sub ? '' : 'mt-80'}
{sub
    ? 'items-start'
    : 'items-center'}"
>
  <div class="w-6/12 mr-auto {sub ? 'pl-28' : ''}">
    {#if !sub}
      <Typography as="h2" bold class="mb-16">
        {title}
      </Typography>
    {/if}
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
