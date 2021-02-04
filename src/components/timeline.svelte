<script lang="ts">
  import * as d3 from 'd3';
  import type { ScaleTime } from 'd3';
  import thmonth from '../utils/thmonth';
  import Typography from './typography.svelte';

  // slider state
  let handleActivated = false,
    activeHandleIndex = 0;
  let slider, width: number, height: number;

  export let slide = true;
  export let X: ScaleTime<number, number, never>;
  export let dateRange: [Date, Date];
  $: rangesItem = X.ticks(d3.timeDay.every(1));
  $: ranges = [...Array(rangesItem.length).keys()];
  $: [min, max] = d3.extent(ranges);
  $: divider = (function () {
    const ranges = rangesItem as Date[];

    const monthyears = ranges.map(
      (date) => `${date.getMonth()}-${date.getFullYear()}`
    );

    const monthyear = [...new Set(monthyears)].reduce(
      (divider, monthyear, curIdx, monthyears) => {
        const [month, year] = monthyear.split('-');
        const date = new Date(+year, +month, 1);
        let label = `${thmonth[+month]}`;
        if (curIdx <= 1) label = `${+year} ${label}`;

        const nextMonthyear = monthyears[curIdx + 1];

        const position = X(date);

        let divWidth = width - position;
        if (nextMonthyear) {
          const [nextmonth, nextyear] = nextMonthyear.split('-'),
            nextDate = new Date(+nextyear, +nextmonth);
          const nextPosition = nextMonthyear ? X(nextDate) : X.range()[1];

          divWidth = nextPosition - position;
        }

        const div = {
          date,
          label,
          divWidth,
          position,
        };

        return [...divider, div];
      },
      []
    );

    return monthyear;
  })();

  let values: [number, number];
  $: values = [min, max];
  $: [start, end] = values;

  $: dateRange = [rangesItem[start], rangesItem[end]];

  $: dividerSize = width / divider.length;
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

  function sliderBlurHandle(e: FocusEvent) {
    console.log('--- slider blur handle ---');
    console.log(e);
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
      console.log('--- body interact ---');
      handleInteract(e);
    }
  }

  $: alignValueToStep = function (val: number): number {
    if (val <= min) {
      console.log('alignValueToStep::val<min');
      return min;
    } else if (val >= max) {
      console.log('alignValueToStep::val>max');
      return max;
    }
    let remainder = (val - min) % step;
    let aligned = val - remainder;
    // console.log(
    //   `alignValueToStep:: val=${val}, min=${min}, max=${max}, step=${step}, remainder=${remainder}, aligned=${aligned}`
    // );
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
</script>

<div
  id="rangeSlider"
  class="w-full h-14 flex bg-white relative"
  bind:clientWidth={width}
  bind:clientHeight={height}
  bind:this={slider}
>
  {#each divider as { label, divWidth, position }}
    <div
      class="section text-center border-l-2 my-5 bg-white border-gray absolute whitespace-nowrap font-subtitle text-12"
      style="left: {position}px; width: {divWidth}px;"
    >
      {label}
    </div>
  {/each}
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
        on:blur={sliderBlurHandle}
      >
        {#if handleActivated}
          <div
            class="absolute top-0 text-center bg-white p-1"
            style="transform: translate(-50%, -100%);"
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
