<script lang="ts">
  import Timeline from '../timeline.svelte';

  import movements from '../../assets/data/event_all.csv';
  import Linechart from '../linechart.svelte';
  import formatMovementData from '../../utils/formatMovementToLinedata';
  import { max, scaleLinear, scaleTime } from 'd3';
  import { dateDomain } from '../../utils/flower-d3';

  export let dateRange: [Date, Date];

  const linedata = formatMovementData(movements);
  let width = 1000,
    lcHeight = 300,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };
  let Y = scaleLinear().domain([0, max(linedata, (d) => d.y)]);
  $: Y = Y.range([lcHeight - margin.bottom, margin.top]);
  let X = scaleTime().domain(dateDomain);
  $: X = X.range([margin.left, width - margin.right]);
</script>

<div class="hidden md:flex relative" bind:clientWidth={width}>
  <div
    class="absolute w-full pointer-events-none max-h-24"
    style="transform: translate(0, -100%); background: linear-gradient(180deg, rgba(26, 23, 27, 0) 0%, rgba(26, 23, 27, 0.1) 100%);"
    bind:clientHeight={lcHeight}
  >
    <Linechart data={linedata} {Y} {X} />
  </div>
  <Timeline {X} bind:dateRange />
</div>
