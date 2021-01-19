<script lang="ts">
  import { onMount } from 'svelte';
  import { plot } from '../../utils/flower-d3';

  let stage: SVGSVGElement;
  let tooltip: HTMLElement;

  onMount(() => plot(stage, tooltip));
</script>

<div class="relative w-screen flex-1">
  <svg bind:this={stage} class="w-full h-full" />
  <div bind:this={tooltip} class="absolute top-2 right-2 w-48 break-words" />
</div>
