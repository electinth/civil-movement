<script lang="ts">
  import Timeline from '../timeline.svelte';

  import movements from '../../assets/data/event_all.csv';
  import Linechart from '../linechart.svelte';
  import formatMovementData from '../../utils/formatMovementToLinedata';

  const data = formatMovementData(movements);
  console.log('flower-timeline::', data);
</script>

<div class="">
  <Linechart {data} />
</div>
<div class="">
  <Timeline />
</div>
