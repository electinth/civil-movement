<script lang="ts">
  import { line, max, scaleLinear, scalePoint } from 'd3';
  type TData = { x: number; y: number };
  export let data: TData[] = [];

  let width = 1000,
    height = 500,
    margin = { top: 50, right: 50, bottom: 50, left: 50 };

  $: Y = scaleLinear()
    .domain([0, max(data, (d) => d.y)])
    .range([height - margin.bottom, margin.top]);
  $: X = scalePoint()
    .domain(data.map((d) => d.x.toString()))
    .range([margin.left, width - margin.right]);

  $: pathDef = line<TData>()
    .x((d) => X(d.x.toString()))
    .y((d) => Y(d.y));
</script>

<div class="w-full h-full" bind:clientWidth={width} bind:clientHeight={height}>
  <svg class="h-full w-full">
    <path d={pathDef(data)} />
    <g transform={`translate(${margin.left}, ${margin.top})`} />
  </svg>
</div>
