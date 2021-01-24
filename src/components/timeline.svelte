<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  // slider state
  let handleActivated = false,
    activeHandleIndex = 0;

  const dispatch = createEventDispatcher();
  export const minmax: [number, number] = [0, 14];
  const [min, max] = minmax;

  $: ranges = [...Array(max - min).keys()];

  let slider, width: number, height: number;

  let values = [4, 12];
  $: [start, end] = values;

  $: stepSize = width / ranges.length;
  $: step = ranges.length;

  function sliderInteractStart(e: MouseEvent) {
    console.log('--- slider interact start ---');
    console.log(e);
    e.preventDefault();

    handleActivated = true;
    const handle = e.target as HTMLDivElement;
    activeHandleIndex = +handle.id.slice(-1);

    const currentValue = ranges[activeHandleIndex];
    let previousValue = alignValueToStep(currentValue);
    handleInteract(e);
    eventStart();
  }

  function sliderInteractEnd(e: MouseEvent) {
    console.log('--- slider interact end ---');
    console.log(e);

    handleActivated = false;

    handleInteract(e);
    eventStop();
  }

  function sliderBlurHandle(e: FocusEvent) {
    console.log('--- slider blur handle ---');
    console.log(e);

    eventChange();
  }

  function moveHandle(index, value) {
    console.log('movehande::value:', value);
    value = alignValueToStep(value);
    console.log('movehande::alignvalue:', value);

    if (values[index] !== value) {
      values[index] = value;
      values = [...values];
    }
  }

  function bodyMouseUp(e: MouseEvent) {
    handleActivated = false;
  }

  function handleInteract(clientPos: { x: number; y: number }) {
    moveHandle(activeHandleIndex, values[activeHandleIndex]);
  }

  function bodyInteraect(e: MouseEvent) {
    if (handleActivated) {
      console.log('--- body interact ---');
      handleInteract(e);
    }
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
  {#each ranges as month}
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
  {#each values as value, index}
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

<svelte:window on:mousemove={bodyInteraect} on:mouseup={bodyMouseUp} />
