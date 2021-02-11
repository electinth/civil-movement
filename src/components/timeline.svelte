<script lang="ts">
  import * as d3 from 'd3';
  import type { ScaleTime } from 'd3';
  import thmonth from '../utils/thmonth';
  import Typography from './typography.svelte';

  let handleActivated = false,
    activeHandleIndex = 0;
  let width: number;

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

  function getTooltipTranslateY(value): string {
    const progressRatio = (value - min) / max;
    return progressRatio > 0.9
      ? '-translate-x-full'
      : progressRatio < 0.1
      ? ''
      : '-translate-x-1/2';
  }
</script>

<div class="relative w-full h-14 flex bg-white" bind:clientWidth={width}>
  <div class="w-full flex flex-row divide-x divide-gray py-4">
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
      class="absolute bg-mint h-full opacity-25 pointer-events-none overflow-x-hidden"
      style="left: {stepSize * start}px; width: {stepSize *
        (end - start)}px; mix-blend-mode: multiply;"
    />
    <div class="absolute inset-0">
      <div class="relative h-full w-full overflow-x-hidden">
        {#each values as value}
          <div
            class="absolute h-full w-0 flex flex-col"
            style="left: {stepSize * (value - 0.25)}px;"
          >
            <svg
              class="my-auto transform -translate-x-1/2"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 19.134C0.833333 19.5189 0.833334 20.4811 1.5 20.866L9 25.1962C9.66667 25.5811 10.5 25.0999 10.5 24.3301L10.5 15.6699C10.5 14.9001 9.66667 14.4189 9 14.8038L1.5 19.134Z"
                fill="black"
                stroke="white"
              />
              <path
                d="M38.5 20.866C39.1667 20.4811 39.1667 19.5189 38.5 19.134L31 14.8038C30.3333 14.4189 29.5 14.9001 29.5 15.6699L29.5 24.3301C29.5 25.0999 30.3333 25.5811 31 25.1962L38.5 20.866Z"
                fill="black"
                stroke="white"
              />
              <rect x="10" y="19" width="20" height="2" fill="black" />
              <rect x="10" y="18" width="20" height="1" fill="white" />
              <rect x="10" y="21" width="20" height="1" fill="white" />
              <rect
                x="20"
                width="40"
                height="0.999997"
                transform="rotate(90 20 0)"
                fill="black"
              />
            </svg>
          </div>
        {/each}
      </div>
    </div>
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
            class="absolute top-0 text-center bg-white p-1 transform -translate-y-full {getTooltipTranslateY(
              value
            )}"
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
