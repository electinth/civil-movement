<script lang="ts">
  import Nav from '../components/nav.svelte';
  import Footer from '../components/footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Nav />

  <main class="flex-1">
    <slot />
  </main>

  <Footer />
</div>
