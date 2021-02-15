<script>
  import Typography from '../typography.svelte';
</script>

<ol class="list-inside list-decimal flex flex-col justify-center items-center">
  <Typography as="body1">
    <slot />
  </Typography>
</ol>
