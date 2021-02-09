<script lang="ts">
  import Nav from '../components/nav.svelte';
  import Footer from '../components/footer.svelte';

  const siteName = 'Civil Movement 2020';
  const siteTitle = '2020 ปีแห่งพลังของประชาชน';
  const description =
    'ปี 2020 (พ.ศ. 2563) ได้เกิดเหตุการณ์ที่ประชาชนไทยทั่วประเทศ ออกมาใช้สิทธิเสรีภาพตามรัฐธรรมนูญในการชุมนุมและแสดงความคิดเห็นทางการเมืองมากกว่า 650 ครั้ง';
  const siteUrl = process.env.SITE_URL;

  export let segment: string | undefined;

  $: activePath = segment || '';
  $: fullTitle = segment
    ? `${segment.charAt(0).toUpperCase() + segment.slice(1)} - ${siteName}`
    : siteName;
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta property="description" value={description} />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:title" content={siteTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="{siteUrl}/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Nav {activePath} />

  <main class="flex-1">
    <slot />
  </main>

  <Footer />
</div>
