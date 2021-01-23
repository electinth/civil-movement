<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export const minmax: [number, number] = [0, 14];
  const [min, max] = minmax;

  $: values = [...Array(max - min).keys()];

  let slider, width: number, height: number;

  const startend = [4, 12];
  const [start, end] = startend;

  $: stepSize = width / values.length;
  $: step = values.length;

  function sliderInteractStart(e: MouseEvent) {
    console.log('--- slider interact start ---');
    console.log(e);
    e.preventDefault();
    const handle = e.target as HTMLDivElement,
      activeHandleIndex = +handle.id.slice(-1);

    const currentValue = values[activeHandleIndex];
    let previousValue = alignValueToStep(currentValue);
    eventStart();
  }

  function sliderInteractEnd(e: MouseEvent) {
    console.log('--- slider interact end ---');
    console.log(e);

    eventStop();
  }

  function sliderBlurHandle(e: FocusEvent) {
    console.log('--- slider blur handle ---');
    console.log(e);

    eventChange();
  }

  $: alignValueToStep = function (val: number): number {
    if (val <= min) {
      return min;
    } else if (val >= max) {
      return max;
    }
    let remainder = (val - min) % step;
    let aligned = val - remainder;
    if (Math.abs(remainder) * 2 >= step) {
      aligned += remainder > 0 ? step : -step;
    }
    return aligned;
  };

  function eventStart() {
    dispatch('start', {});
  }

  function eventStop() {
    dispatch('stop', {});
  }

  function eventChange() {
    dispatch('change', {});
  }
</script>

<div
  id="rangeSlider"
  class="w-full h-full flex bg-white relative"
  bind:clientWidth={width}
  bind:clientHeight={height}
  bind:this={slider}
>
  {#each values as month}
    <div
      class="section text-center border-r-2 my-3 border-gray"
      style="flex: 0 0 {stepSize}px;"
    >
      {month}
    </div>
  {/each}
  <div
    id="overlay"
    class="absolute bg-mint h-full opacity-25 pointer-events-none"
    style="left: {stepSize * start}px; width: {stepSize *
      (end - start)}px; mix-blend-mode: multiply;"
  />
  {#each startend as value, index}
    <div
      id="handle-{index}"
      class="absolute h-full bg-black opacity-25 cursor-pointer"
      style="left: {stepSize * (value - 0.25)}px; width: {stepSize / 2}px;"
      on:mousedown={sliderInteractStart}
      on:mouseup={sliderInteractEnd}
      on:blur={sliderBlurHandle}
    />
  {/each}
</div>
