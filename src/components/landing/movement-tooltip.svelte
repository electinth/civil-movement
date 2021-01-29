<script lang="ts" context="module">
  import { fade } from 'svelte/transition';
  export interface MovementNodeWithData {
    data: typeof movements[number];
    offsetLeft: number;
    offsetTop: number;
    tooltipRight: boolean;
  }
</script>

<script lang="ts">
  import type movements from '../../assets/data/event_all.csv';
  import Typography from '../typography.svelte';

  export let node: MovementNodeWithData;

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString('th-TH', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
</script>

<div
  transition:fade={{ duration: 50 }}
  class="absolute z-20"
  style="top: {node.offsetTop}px; left: {node.offsetLeft}px;"
>
  <div
    class="absolute bottom-2 {node.tooltipRight
      ? 'left-1'
      : 'right-1'} w-48 break-words bg-black bg-opacity-50 text-white p-2 rounded"
  >
    <Typography as="subtitle5" bold>{node.data.event_name}</Typography>
    <Typography as="subtitle5">{formatDate(node.data.date)}</Typography>
  </div>
</div>
