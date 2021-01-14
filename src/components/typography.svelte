<script lang="ts">
  type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

  type Subtitle =
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'subtitle4'
    | 'subtitle5';

  type Body = 'body1' | 'body2';

  export let as: Heading | Subtitle | Body;
  export let bold = false;

  const getSubtitleOrBodyClasses = (as: Subtitle | Body) => {
    switch (as) {
      case 'subtitle1':
        return 'font-subtitle text-18 md:text-24';
      case 'subtitle2':
        return 'font-subtitle text-16 md:text-18';
      case 'subtitle3':
        return 'font-subtitle text-12 md:text-14';
      case 'subtitle4':
        return 'font-subtitle text-10 md:text-12';
      case 'subtitle5':
        return 'font-subtitle text-10';
      case 'body1':
        return 'font-body text-15 md:text-17';
      case 'body2':
        return 'font-body text-12 md:text-14';
    }
  };
</script>

{#if as === 'h1'}
  <h1 class="font-heading text-21 md:text-36" class:font-black={bold}>
    <slot />
  </h1>
{:else if as === 'h2'}
  <h2 class="font-heading text-18 md:text-24" class:font-black={bold}>
    <slot />
  </h2>
{:else if as === 'h3'}
  <h3 class="font-heading text-16 md:text-21" class:font-black={bold}>
    <slot />
  </h3>
{:else if as === 'h4'}
  <h4 class="font-heading text-14 md:text-18" class:font-black={bold}>
    <slot />
  </h4>
{:else if as === 'h5'}
  <h5 class="font-heading text-12 md:text-16" class:font-black={bold}>
    <slot />
  </h5>
{:else}
  <p
    class="font-subtitle {getSubtitleOrBodyClasses(as)}"
    class:font-semibold={as.includes('subtitle') && bold}
    class:font-bold={as.includes('body') && bold}
  >
    <slot />
  </p>
{/if}
