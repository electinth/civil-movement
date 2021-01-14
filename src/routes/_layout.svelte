<script lang="ts">
  import Nav from '../components/nav.svelte';
  import Footer from '../components/footer.svelte';

  export let segment: string;
</script>

<div class="flex flex-col min-h-screen">
  <Nav {segment} />

  <main class="flex-1">
    <slot />
  </main>

  <Footer />
</div>
