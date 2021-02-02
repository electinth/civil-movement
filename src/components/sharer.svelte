<script lang="ts">
  import { onMount } from 'svelte';
  import Typography from './typography.svelte';

  interface SocialLink {
    service: string;
    icon: string;
    href: string;
  }

  export let light: boolean = false;
  export let vertical: boolean = false;

  let socialLinks: SocialLink[] = [];

  onMount(() => {
    const encodedUrl = encodeURI(window.location.href);

    socialLinks = [
      {
        service: 'Facebook',
        icon: 'images/social-facebook.svg',
        href: `http://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      },
      {
        service: 'Twitter',
        icon: 'images/social-twitter.svg',
        href: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
      },
      {
        service: 'Line',
        icon: 'images/social-line.svg',
        href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
      },
    ];
  });
</script>

<div class="flex flex-row p-1 justify-center space-x-4">
  {#if !vertical}
    <Typography
      as="body2"
      class="my-auto {light ? 'text-white' : 'text-black'}"
    >
      Share
    </Typography>
  {/if}
  <div class="flex {vertical ? 'flex-col space-y-3' : 'flex-row space-x-3'}">
    {#each socialLinks as { service, icon, href }}
      <a {href} target="_blank" rel="noopener noreferrer">
        <img
          src={icon}
          alt={service}
          class="h-8 {light ? 'opacity-80 hover:opacity-100' : ''}"
          style={light ? '' : 'filter: brightness(0); '}
        />
      </a>
    {/each}
  </div>
</div>
