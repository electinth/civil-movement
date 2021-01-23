<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export const minmax: [number, number] = [0, 14];
  const [min, max] = minmax;

  $: range = [...Array(max - min).keys()];

  let slider, width: number, height: number;

  const startend = [4, 12];
  const [start, end] = startend;

  $: unitWidth = width / range.length;
</script>

<div
  id="rangeSlider"
  class="w-full h-full flex bg-white relative"
  bind:clientWidth={width}
  bind:clientHeight={height}
  bind:this={slider}
>
  {#each range as month}
    <div
      class="section text-center border-r-2 my-3 border-gray"
      style="flex: 0 0 {unitWidth}px;"
    >
      {month}
    </div>
  {/each}
  <div
    id="overlay"
    class="absolute bg-mint h-full opacity-25"
    style="left: {unitWidth * start}px; width: {unitWidth *
      (end - start)}px; mix-blend-mode: multiply;"
  />
  {#each startend as value, index}
    <span id="rangeHandle" class="absolute" />
  {/each}
</div>
