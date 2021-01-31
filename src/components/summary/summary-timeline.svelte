<script lang="ts">
  import * as d3 from 'd3';

  import Timeline from '../timeline.svelte';
  import movements from '../../assets/data/event_all.csv';
  import formatMovementData from '../../utils/formatMovementToLinedata';

  let width = 1000,
    height = 300,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };
  const linedata = formatMovementData(movements);
  let X = d3
    .scaleTime()
    .domain([new Date(2019, 11, 1), d3.max(linedata, (d) => d.x)]);
  $: X = X.range([margin.left, width - margin.right]);
</script>

<div class="w-full h-full" bind:clientHeight={height} bind:clientWidth={width}>
  <Timeline {X} />
</div>
