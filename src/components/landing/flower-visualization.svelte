<script lang="ts">
  import { onMount } from 'svelte';
  import { reshapeData, plot } from '../../utils/flower-d3';
  import Typography from '../typography.svelte';

  import movements from '../../assets/data/event_all.csv';

  interface Filter {
    organizers: string[];
    keyTopics: string[];
  }

  interface EventNode {
    id: string;
    x: number;
    y: number;
  }

  interface EventNodeWithData {
    data: typeof movements[number];
    offsetLeft: number;
    offsetTop: number;
    tooltipRight: boolean;
  }

  export let filter: Filter;

  let stage: SVGSVGElement;
  let focusingNode: EventNodeWithData;

  const onMouseOverNode = (pointData: EventNode) => {
    const offsetLeft = Math.round(pointData.x + stage.clientWidth / 2);
    const offsetTop = Math.round(pointData.y + stage.clientHeight / 2);

    const data = movements.find(({ event_no }) => event_no === pointData.id);

    focusingNode = {
      data,
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

  const reshapedMovements = reshapeData(movements);

  onMount(() => {
    plot(
      reshapedMovements,
      filter,
      stage,
      onMouseOverNode,
      onMouseOutOfNode,
      onClickNode
    );
  });
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
        <Typography as="subtitle5" bold
          >{focusingNode.data.event_name}</Typography
        >
        <Typography as="subtitle5"
          >{formatDate(focusingNode.data.date)}</Typography
        >
      </div>
    </div>
  {/if}
</div>
