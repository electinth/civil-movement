<script lang="ts">
  import Timeline from '../timeline.svelte';

  import movements from '../../assets/data/event_all.csv';
  import Linechart from '../linechart.svelte';
  import formatMovementData from '../../utils/formatMovementToLinedata';

  const data = formatMovementData(movements);
  console.log('flower-timeline::', data);
</script>

<div class="relative">
  <div
    class="absolute w-full pointer-events-none"
    style="transform: translate(0, -100%);"
  >
    <Linechart {data} />
  </div>
  <div class="">
    <Timeline />
  </div>
</div>
