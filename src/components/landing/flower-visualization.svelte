<script lang="ts">
  import { onMount } from 'svelte';
  import { plot } from '../../utils/flower-d3';
  import Typography from '../typography.svelte';

  import movements from '../../assets/data/event_all.csv';

  interface Filter {
    organizers: string[];
    keyTopics: string[];
  }

  interface Node {
    name: string;
    date: Date;
    x: number;
    y: number;
    offsetLeft: number;
    offsetTop: number;
    tooltipRight: boolean;
  }

  export let filter: Filter;

  let stage: SVGSVGElement;
  let focusingNode: Node;

  const onMouseOverNode = (pointData: Node) => {
    const offsetLeft = Math.round(pointData.x + stage.clientWidth / 2);
    const offsetTop = Math.round(pointData.y + stage.clientHeight / 2);
    focusingNode = {
      ...pointData,
      offsetLeft,
      offsetTop,
      tooltipRight: offsetLeft < stage.clientWidth / 2,
    };
  };

  const onMouseOutOfNode = () => {
    focusingNode = null;
  };

  const onClickNode = (pointData: Node) => {
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
    plot(
      movements,
      filter,
      stage,
      onMouseOverNode,
      onMouseOutOfNode,
      onClickNode
    )
  );
</script>

<div class="relative flex-1">
  <svg bind:this={stage} class="w-full h-full" />

  {#if focusingNode}
    <div
      class="absolute"
      style="top: {focusingNode.offsetTop}px; left: {focusingNode.offsetLeft}px;"
    >
      <div
        class="absolute bottom-2 {focusingNode.tooltipRight
          ? 'left-1'
          : 'right-1'} w-48 break-words bg-black bg-opacity-50 text-white p-2 rounded"
      >
        <Typography as="subtitle5" bold>{focusingNode.name}</Typography>
        <Typography as="subtitle5">{formatDate(focusingNode.date)}</Typography>
      </div>
    </div>
  {/if}
</div>
