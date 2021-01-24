<script lang="ts">
  import Timeline from '../timeline.svelte';

  import movements from '../../assets/data/event_all.csv';
  import Linechart from '../linechart.svelte';
  import formatMovementData from '../../utils/formatMovementToLinedata';

  const linedata = formatMovementData(movements);

  let values = [0, 5];
  const timelineRanges = linedata.map((d) => d.x);
</script>

<div class="relative">
  <div
    class="absolute w-full pointer-events-none"
    style="transform: translate(0, -100%);"
  >
    <Linechart data={linedata} />
  </div>
  <div class="">
    <Timeline bind:values rangesItem={timelineRanges} />
  </div>
</div>
