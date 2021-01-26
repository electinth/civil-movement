<script lang="ts">
  import { onMount } from 'svelte';
  import { reshapeData, plot } from '../../utils/flower-d3';

  import movements from '../../assets/data/event_all.csv';
  import MovementTooltip from './movement-tooltip.svelte';
  import type { MovementNodeWithData } from './movement-tooltip.svelte';

  interface Filter {
    organizers: string[];
    keyTopics: string[];
  }

  interface EventNode {
    id: string;
    x: number;
    y: number;
  }

  export let filter: Filter;

  let stage: SVGSVGElement;
  let focusingNode: MovementNodeWithData;

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
    <MovementTooltip node={focusingNode} />
  {/if}
</div>
