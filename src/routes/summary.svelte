<script lang="ts">
  import * as d3 from 'd3';

  import Linechart from '../components/linechart.svelte';
  import Typography from '../components/typography.svelte';

  import movements from '../assets/data/event_all.csv';
  import formatMovementData from '../utils/formatMovementToLinedata';

  const linedata = formatMovementData(movements);
  let width = 1000,
    lcHeight = 300,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };
  const Y = d3.scaleLinear().domain([0, d3.max(linedata, (d) => d.y)]);
  $: Y.range([lcHeight - margin.bottom, margin.top]);
  const X = d3.scaleTime().domain(d3.extent(linedata, (d) => d.x));
  $: X.range([margin.left, width - margin.right]);
</script>

<div
  class="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-dark to-mint-light via-mint py-24"
>
  <Typography as="h1" class="text-center">
    สรุปภาพรวม<br />
    Civil Movement 2020
  </Typography>
  <div class="w-full max-w-2xl" bind:clientWidth={width}>
    <Linechart data={linedata} {X} {Y} />
  </div>
</div>
