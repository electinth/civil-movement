<script lang="ts">
  import Timeline from '../timeline.svelte';

  import movements from '../../assets/data/event_all.csv';
  import Linechart from '../linechart.svelte';
  import formatMovementData from '../../utils/formatMovementToLinedata';
  import { extent, max, scaleLinear, scaleTime, timeDay } from 'd3';
  import * as d3 from 'd3';

  const linedata = formatMovementData(movements);
  let width = 1000,
    lcHeight = 300,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };
  const Y = scaleLinear().domain([0, max(linedata, (d) => d.y)]);
  $: Y.range([lcHeight - margin.bottom, margin.top]);
  const X = scaleTime().domain(extent(linedata, (d) => d.x));
  $: X.range([margin.left, width - margin.right]);

  let values = [0, 0];

  const ranges = X.ticks(d3.timeDay.every(1));
  const months = ranges.filter((d) => d.getDate() === 1);

  let i = 0;
  const t = d3.interval(() => {
    const curMonth = months[i++];
    const newIdx = ranges.findIndex((d) => d === curMonth);

    if (i > months.length) t.stop();
    values = newIdx !== -1 ? [0, newIdx] : [0, ranges.length];
  }, 1000);
</script>

<div class="flex">
  <div class="flex-1">
    <div class="relative" bind:clientWidth={width}>
      <div
        class="absolute w-full pointer-events-none"
        style="transform: translate(0, -100%);"
      >
        <Linechart data={linedata} {Y} {X} />
      </div>
      <Timeline bind:values {X} />
    </div>
  </div>
  <div class="w-10 bg-mint flex items-center justify-center">&gt;</div>
</div>
