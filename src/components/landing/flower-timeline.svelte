<script lang="ts">
  import Timeline from '../timeline.svelte';

  import movements from '../../assets/data/event_all.csv';
  import Linechart from '../linechart.svelte';
  import formatMovementData from '../../utils/formatMovementToLinedata';
  import { extent, max, scaleLinear, scaleTime, timeDay } from 'd3';
  import * as d3 from 'd3';
  import PlayButton from '../play-button.svelte';

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

  let values = [0, 0];

  const ranges = X.ticks(d3.timeDay.every(1));

  // let i = 0;
  // const t = d3.interval(() => {
  //   if (i > ranges.length) t.stop();
  //   values = [0, i++];
  // }, 10);
</script>

<div class="flex">
  <div class="flex-1">
    <div class="relative" bind:clientWidth={width}>
      <div
        class="absolute w-full pointer-events-none"
        style="transform: translate(0, -100%);"
        bind:clientHeight={lcHeight}
      >
        <Linechart data={linedata} {Y} {X} />
      </div>
      <Timeline bind:values {X} />
    </div>
  </div>
  <div class="w-10">
    <PlayButton bind:values max={ranges.length} />
  </div>
</div>
