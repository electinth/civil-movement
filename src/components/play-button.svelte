<script lang="ts">
  import * as d3 from 'd3';

  export let values = [0, 0];
  export let max: number = 150;
  export let delay: number = 10;
  const interval = d3.interval(IntervalFunction, delay);
  let isPlaying = true;
  $: {
    isPlaying ? interval.restart(IntervalFunction, delay) : interval.stop();
  }

  function IntervalFunction() {
    const currentValues = values[1];
    values = [0, currentValues + 1];
    if (values[1] > max) isPlaying = false;
  }
</script>

<div
  class="w-full h-full bg-mint cursor-pointer flex items-center justify-center"
  on:click={() => {
    console.log('play-button:clicked');
    isPlaying = !isPlaying;
  }}
>
  {isPlaying ? '||' : '>'}
</div>
