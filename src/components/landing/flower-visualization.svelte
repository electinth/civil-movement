<script lang="ts">
  import { onMount } from 'svelte';
  import { plot } from '../../utils/flower-d3';
  import Typography from '../typography.svelte';

  import movements from '../../assets/data/event_all.csv';

  interface NodeData {
    name: string;
    date: Date;
  }

  let stage: SVGSVGElement;
  let focusingNode: NodeData;

  const onMouseOverNode = (pointData: NodeData) => {
    focusingNode = pointData;
  };

  const onMouseOutOfNode = () => {
    focusingNode = null;
  };

  const onClickNode = (pointData: NodeData) => {
    console.log(pointData);
  };

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString('th-TH', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  onMount(() =>
    plot(movements, stage, onMouseOverNode, onMouseOutOfNode, onClickNode)
  );
</script>

<div class="relative flex-1">
  <svg bind:this={stage} class="w-full h-full" />
  {#if focusingNode}
    <div
      class="absolute top-2 right-2 w-48 break-words bg-black bg-opacity-50 text-white p-2 rounded"
    >
      <Typography as="subtitle5" bold>{focusingNode.name}</Typography>
      <Typography as="subtitle5">{formatDate(focusingNode.date)}</Typography>
    </div>
  {/if}
</div>
