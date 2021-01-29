<script lang="ts">
  import type { Filter } from '../../constants/filter';
  import Typography from '../typography.svelte';

  export let option: Filter;
  export let isActive: boolean;

  $: mainColor = option.mainColor || 'white';
  $: accentColor = option.accentColor || '#1A171B';
</script>

<button
  class="flex flex-row text-left p-1 space-x-2 focus:outline-none"
  on:click>
  <div
    class="border-2 border-black rounded-full my-auto w-4 h-4 text-center flex flex-col justify-center"
    style={`background-color: ${
      isActive ? mainColor : 'none'
    }; border-color: ${mainColor};`}
  >
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      stroke={isActive ? accentColor : mainColor}
      xmlns="http://www.w3.org/2000/svg"
      class="m-auto">
      <line y1="4" x2="8" y2="4" stroke-width="2" />
      {#if !isActive}
        <line x1="4" y1="4.37114e-08" x2="4" y2="8" stroke-width="2" />
      {/if}
    </svg>
  </div>
  <Typography as="subtitle4">{option.label}</Typography>
</button>
