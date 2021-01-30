<script lang="ts">
  import * as d3 from 'd3';

  import Linechart from '../components/linechart.svelte';
  import Typography from '../components/typography.svelte';

  import movements from '../assets/data/event_all.csv';
  import formatMovementData from '../utils/formatMovementToLinedata';

  const linedata = formatMovementData(movements);
  let width = 1000,
    lcHeight = 300,
    margin = { top: 30, right: 30, bottom: 30, left: 30 };
  $: Y = d3
    .scaleLinear()
    .domain([0, d3.max(linedata, (d) => d.y)])
    .range([lcHeight - margin.bottom, margin.top]);
  $: X = d3
    .scaleTime()
    .domain(d3.extent(linedata, (d) => d.x))
    .range([margin.left, width - margin.right]);
</script>

<div
  class="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-dark to-mint-light via-mint py-24"
>
  <Typography as="h1" class="text-center text-white">
    สรุปภาพรวม<br />
    Civil Movement 2020
  </Typography>
  <div
    class="w-full max-w-2xl h-60"
    bind:clientWidth={width}
    bind:clientHeight={lcHeight}
  >
    <Linechart
      data={linedata}
      {width}
      height={lcHeight}
      {margin}
      {X}
      {Y}
      axis
    />
  </div>
</div>
