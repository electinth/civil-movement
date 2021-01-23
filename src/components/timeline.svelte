<script lang="ts">
import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()
  export const minmax: [number, number] = [0, 14]
  const [min, max] = minmax

  $: range = [...Array(max - min).keys()]

  let slider, width: number, height: number;

  const values = [4, 12]

</script>

<div id="rangeSlider" class="w-full h-full flex bg-white" bind:clientWidth={width} bind:clientHeight={height} bind:this={slider}>
  {#each range as month}
    <div class="section text-center border-r-2 my-3 border-gray" style="flex: 0 0 {width / range.length}px;">
      {month}
    </div>
  {/each}
  {#each values as value, index}
    <span
      id="rangeHandle"
     />
  {/each}
</div>

<style>
  .section {

  }
</style>