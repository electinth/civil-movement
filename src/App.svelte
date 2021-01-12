<script lang="ts">
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';
</script>

<style global>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
</style>

<Router {routes} />
