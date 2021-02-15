<script lang="ts">
  import Typography from '../typography.svelte';

  export let label: string;
</script>

<div class="flex-1 flex flex-row md:flex-col md:text-center md:justify-center">
  <div class="flex flex-row md:mx-auto h-12 w-20">
    <div class="m-auto">
      <slot />
    </div>
  </div>
  <Typography as="body1" class="my-auto md:my-0 md:mb-auto">{label}</Typography>
</div>
