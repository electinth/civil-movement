<script lang="ts">
  export let values = [0, 0];
  export let onPlay: () => void;
  let isPlaying = false;
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
