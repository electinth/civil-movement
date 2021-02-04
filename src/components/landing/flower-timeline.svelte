<script lang="ts">
  import Timeline from '../timeline.svelte';

  import movements from '../../assets/data/event_all.csv';
  import Linechart from '../linechart.svelte';
  import formatMovementData from '../../utils/formatMovementToLinedata';
  import { max, scaleLinear, scaleTime } from 'd3';
  import * as d3 from 'd3';

  export let dateRange: [Date, Date];

  const linedata = formatMovementData(movements);
  let width = 1000,
    lcHeight = 300,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };
  let Y = scaleLinear().domain([0, max(linedata, (d) => d.y)]);
  $: Y = Y.range([lcHeight - margin.bottom, margin.top]);
  let X = scaleTime().domain([
    new Date(2019, 11, 1),
    d3.max(linedata, (d) => d.x),
  ]);
  $: X = X.range([margin.left, width - margin.right]);
</script>

<div class="flex-1 relative" bind:clientWidth={width}>
  <div
    class="absolute w-full pointer-events-none"
    style="transform: translate(0, -100%);"
    bind:clientHeight={lcHeight}
  >
    <Linechart data={linedata} {Y} {X} />
  </div>
  <Timeline {X} bind:dateRange />
</div>
