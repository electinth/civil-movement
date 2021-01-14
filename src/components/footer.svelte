<script lang="ts">
  const internalLinks = [
    { text: 'VISUALIZATION', link: 'https://elect.in.th/visualization/' },
    { text: 'TOOLS', link: 'https://elect.in.th/tool/' },
    { text: 'ARTICLE', link: 'https://elect.in.th/article/' },
    { text: 'INFOGRAPHIC', link: 'https://elect.in.th/infographic/' },
    { text: 'DOWNLOAD DATA', link: 'https://elect.in.th/download-data/' },
  ];
  const companyLinks = [
    {
      image: 'images/logo-punchup.svg',
      imageMd: 'images/logo-punchup-full.svg',
      alt: 'PunchUp',
      url: 'https://punchup.world/',
    },
    {
      image: 'images/logo-boonmee.svg',
      imageMd: 'images/logo-boonme-full.svg',
      alt: 'BoonmeLab',
      url: 'https://www.boonmeelab.com/',
    },
    {
      image: 'images/logo-ilaw.png',
      imageMd: 'images/logo-ilaw.png',
      alt: 'iLaw',
      url: 'https://ilaw.or.th',
    },
  ];
  const followLinks = [
    {
      image: 'images/follow-facebook.svg',
      alt: 'Facebook',
      url: 'https://www.facebook.com/electinth/',
    },
    {
      image: 'images/follow-twitter.svg',
      alt: 'Twitter',
      url: 'https://twitter.com/electinth/',
    },
  ];
</script>

<div
  class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 px-8 py-16 bg-black text-white"
>
  <div class="col-span-2 lg:col-span-1 flex flex-row md:flex-col mb-8 md:mb-0">
    <div class="flex-1 flex">
      <a href="https://elect.in.th" class="mb-auto">
        <img
          src="images/logo-elect-footer.png"
          alt="ELECT"
          class="w-24 md:w-32 lg:w-40 h-auto"
        />
      </a>
    </div>
    <div class="flex-1 md:flex-grow-0 flex flex-row space-x-4">
      {#each companyLinks as { image, imageMd, alt, url }}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} {alt} class="md:hidden h-5 md:h-6" />
          <img src={imageMd} {alt} class="hidden md:block h-4 lg:h-6" />
        </a>
      {/each}
    </div>
  </div>

  <div class="flex-1 flex flex-col justify-between md:text-center">
    {#each internalLinks as { text, link }}
      <div class="flex justify-start lg:justify-center">
        <a
          href={link}
          class="block hover:bg-white p-1 hover:text-black font-heading text-12 md:text-14 lg:text-16">
          {text}
        </a>
      </div>
    {/each}
  </div>

  <div class="flex flex-col space-y-6 md:ml-auto">
    <div class="flex flex-col space-y-1">
      <p class="font-heading text-10 md:text-12 lg:text-14 font-black">
        ABOUT US
      </p>
      <a
        href="https://elect.in.th/about/"
        class="hover:underline text-10 md:text-11 lg:text-12">
        เราคือใคร.. ทำไมต้อง Elect?
      </a>
    </div>
    <div class="flex flex-col space-y-1">
      <p class="font-heading text-10 md:text-12 lg:text-14 font-black">
        CONTACT US
      </p>
      <a
        href="mailto:contact@elect.in.th"
        class="hover:underline text-10 md:text-11 lg:text-12">
        E-mail : contact@elect.in.th
      </a>
    </div>
    <div class="flex flex-col space-y-1">
      <p class="font-heading text-10 md:text-12 lg:text-14 font-black">
        FOLLOW US
      </p>
      <div class="flex flex-row">
        {#each followLinks as { image, alt, url }}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} {alt} class="h-4 m-2" />
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
