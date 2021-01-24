<script lang="ts">
  import {
    curveCatmullRom,
    extent,
    line,
    max,
    scaleLinear,
    scaleTime,
  } from 'd3';
  import type { TData } from '../utils/formatMovementToLinedata';

  export let data: TData[] = [];

  let width = 1000,
    height = 500,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };

  $: Y = scaleLinear()
    .domain([0, max(data, (d) => d.y)])
    .range([height - margin.bottom, margin.top]);
  $: X = scaleTime()
    .domain(extent(data, (d) => d.x))
    .range([margin.left, width - margin.right]);

  $: pathDef = line<TData>()
    .x((d) => X(d.x))
    .y((d) => Y(d.y))
    .curve(curveCatmullRom);
</script>

<div class="w-full h-full" bind:clientWidth={width} bind:clientHeight={height}>
  <svg class="h-full w-full">
    <defs>
      <linearGradient id="whiteGradient" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="white" stop-opacity="1" />
        <stop offset="100%" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path
      d={pathDef(data)}
      fill="url(#whiteGradient)"
      class="stroke-current text-white"
    />
    <g transform={`translate(${margin.left}, ${margin.top})`} />
  </svg>
</div>
