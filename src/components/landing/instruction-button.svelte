<script>
  import Typography from '../typography.svelte';
</script>

<button
  class="bg-mint rounded md:py-2 px-2 md:px-4 hover:bg-opacity-50 {$$props.class ||
    ''}"
  on:click
>
  <Typography as="subtitle5">อธิบายสัญลักษณ์</Typography>
</button>
