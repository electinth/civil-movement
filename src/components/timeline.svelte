<script lang="ts">
  import * as d3 from 'd3';
  import type { ScaleTime } from 'd3';
  import thmonth from '../utils/thmonth';
  import Typography from './typography.svelte';

  // slider state
  let handleActivated = false,
    activeHandleIndex = 0;
  let slider, width: number;

  export let slide = true;
  export let X: ScaleTime<number, number, never>;
  export let dateRange: [Date, Date];
  $: rangesItem = X.ticks(d3.timeDay.every(1));
  $: ranges = [...Array(rangesItem.length).keys()];
  $: [min, max] = d3.extent(ranges);
  $: divider = (function () {
    const monthyears = rangesItem.map(
      (date) => `${date.getMonth()}-${date.getFullYear()}`
    );

    return [...new Set(monthyears)].map((monthyear) => {
      const [month, year] = monthyear.split('-');
      return {
        month: `${thmonth[+month]}`,
        year,
      };
    });
  })();

  let values: [number, number];
  $: values = [min, max];
  $: [start, end] = values;

  $: dateRange = [rangesItem[start], rangesItem[end]];

  $: stepSize = width / ranges.length;
  let step = 1;

  function sliderInteractStart(e: MouseEvent) {
    e.preventDefault();

    handleActivated = true;
    const handle = e.target as HTMLDivElement;
    activeHandleIndex = +handle.id.slice(-1);

    handleInteract(e);
  }

  function sliderInteractEnd(e: MouseEvent) {
    handleActivated = false;

    handleInteract(e);
  }

  function moveHandle(index, value) {
    value = alignValueToStep(value);

    if (values[index] !== value) {
      values[index] = value;
      values = [...values];
    }
  }

  function bodyMouseUp(e: MouseEvent) {
    handleActivated = false;
  }

  function handleInteract({ clientX }: { clientX: number }) {
    let position = clientX;
    let ratio = position / width;
    let newValue = min + (max - min) * ratio;
    moveHandle(activeHandleIndex, newValue);
  }

  function bodyInteract(e: MouseEvent) {
    if (handleActivated) {
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

  function tooltipFormatter(dt: Date): string {
    const date = dt.getDate(),
      month = dt.getMonth();
    return `${date} ${thmonth[month]}`;
  }

  function getTooltipTransformStyle(value): string {
    const progressRatio = (value - min) / max;
    return `transform: translate(${
      progressRatio > 0.9 ? -100 : progressRatio < 0.1 ? 0 : -50
    }%, -100%);`;
  }
</script>

<div
  id="rangeSlider"
  class="w-full h-14 flex bg-white"
  bind:clientWidth={width}
  bind:this={slider}
>
  <div class="w-full flex flex-row divide-x divide-gray py-2">
    {#each divider as label, index}
      <div
        class="flex-1 flex flex-col justify-center text-center whitespace-nowrap font-subtitle text-12 h-full"
      >
        <div>{label.month}</div>
        {#if index === 0 || divider[index - 1].year !== label.year}
          <div>{label.year}</div>
        {/if}
      </div>
    {/each}
  </div>

  {#if slide}
    <div
      id="overlay"
      class="absolute bg-mint h-full opacity-25 pointer-events-none"
      style="left: {stepSize * start}px; width: {stepSize *
        (end - start)}px; mix-blend-mode: multiply;"
    />
    {#each values as value, index}
      <div
        id="handle-{index}"
        class="absolute h-full cursor-handle"
        style="left: {stepSize * (value - 0.25)}px; width: {stepSize}px;"
        on:mousedown={sliderInteractStart}
        on:mouseup={sliderInteractEnd}
      >
        {#if handleActivated}
          <div
            class="absolute top-0 text-center bg-white p-1"
            style={getTooltipTransformStyle(value)}
          >
            <Typography as="subtitle5" class="whitespace-nowrap"
              >{tooltipFormatter(rangesItem[value])}</Typography
            >
          </div>
        {/if}
      </div>
    {/each}
  {/if}
</div>

<svelte:window on:mousemove={bodyInteract} on:mouseup={bodyMouseUp} />
