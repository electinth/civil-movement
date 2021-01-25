<script lang="ts">
  import Timeline from '../timeline.svelte';

  import movements from '../../assets/data/event_all.csv';
  import Linechart from '../linechart.svelte';
  import formatMovementData from '../../utils/formatMovementToLinedata';
  import { extent, max, scaleLinear, scaleTime } from 'd3';

  const linedata = formatMovementData(movements);
  $: Y = scaleLinear().domain([0, max(linedata, (d) => d.y)]);
  $: X = scaleTime().domain(extent(linedata, (d) => d.x));

  let values = [0, 5];
  const timelineRanges = linedata.map((d) => d.x);
</script>

<div class="relative">
  <div
    class="absolute w-full pointer-events-none"
    style="transform: translate(0, -100%);"
  >
    <Linechart data={linedata} {Y} {X} />
  </div>
  <div class="">
    <Timeline bind:values rangesItem={timelineRanges} />
  </div>
</div>
