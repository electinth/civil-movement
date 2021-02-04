<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';

  import { reshapeData, plot } from '../../utils/flower-d3';
  import type movements from '../../assets/data/event_all.csv';
  import MovementTooltip from './movement-tooltip.svelte';
  import type { MovementNodeWithData } from './movement-tooltip.svelte';

  interface Filter {
    organizers: number[];
    keyTopics: number[];
    dateRange: [Date, Date];
  }

  interface EventNode {
    id: string;
    x: number;
    y: number;
  }

  export let movementData: typeof movements;
  export let filter: Filter;

  let stage: SVGSVGElement;
  let focusingNode: MovementNodeWithData;
  let onFilterChange: (filter: Filter) => void;

  const dispatch = createEventDispatcher();

  const getMovementFromId = (id: string) =>
    movementData.find(({ event_no }) => event_no === id);

  const onMouseOverNode = ({ x, y, id }: EventNode): void => {
    const offsetLeft = Math.round(x + stage.clientWidth / 2);
    const offsetTop = Math.round(y + stage.clientHeight / 2);

    focusingNode = {
      data: getMovementFromId(id),
      offsetLeft,
      offsetTop,
      tooltipRight: offsetLeft < stage.clientWidth / 2,
    };
  };

  const onMouseOutOfNode = (): void => {
    focusingNode = null;
  };

  const onClickNode = ({ id }: EventNode): void => {
    dispatch('movement-click', getMovementFromId(id));
  };

  const onTransitionCompleted = () => dispatch('transition-complete');

  const reshapedMovements = reshapeData(movementData);

  onMount(() => {
    onFilterChange = plot(
      reshapedMovements,
      stage,
      onMouseOverNode,
      onMouseOutOfNode,
      onClickNode,
      onTransitionCompleted
    );
  });

  $: {
    onFilterChange && onFilterChange(filter);
  }
</script>

<div class="relative flex-1">
  <svg bind:this={stage} class="w-full h-full" />

  {#if focusingNode}
    <MovementTooltip node={focusingNode} />
  {/if}
</div>
