<script lang="ts">
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';

  const basePath = process.env.BASE_PATH;

  const config = {
    urlTransform: {
      apply: (url: string) => `${basePath}${url}`, // external URL
      remove: (url: string) => url.replace(basePath, ''), // internal URL
    },
  };
</script>

<style global>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
</style>

<Router {routes} {config} />
