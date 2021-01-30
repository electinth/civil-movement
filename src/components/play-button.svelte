<script lang="ts">
  import * as d3 from 'd3';
  import Pause from './icons/pause.svelte';
  import Play from './icons/play.svelte';
  import Restart from './icons/restart.svelte';

  export let values = [0, 0];
  export let max: number = 150;
  export let delay: number = 10;
  const interval = d3.interval(IntervalFunction, delay);
  let isPlaying = true;
  $: {
    if (isPlaying) {
      interval.restart(IntervalFunction, delay);
    } else {
      interval.stop();
    }
  }

  function IntervalFunction() {
    const currentValues = values[1];
    values = [0, currentValues + 1];
    if (values[1] >= max - 1) isPlaying = false;
  }
</script>

<div
  class="w-full h-full bg-mint cursor-pointer flex items-center justify-center"
  on:click={() => {
    isPlaying = !isPlaying;
    if (values[1] === max - 1) values = [0, 0];
  }}
>
  {#if isPlaying}
    <Pause />
  {:else if values[1] === max - 1}
    <Restart />
  {:else}
    <Play />
  {/if}
</div>
