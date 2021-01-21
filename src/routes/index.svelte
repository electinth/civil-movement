<script>
  import FilterDropdown from '../components/landing/filter-dropdown.svelte';
  import FlowerVisualization from '../components/landing/flower-visualization.svelte';
  import Typography from '../components/typography.svelte';
  import { ORGANIZERS, KEY_TOPICS } from '../constants/filter.ts';

  let selectedOrganizers = ORGANIZERS.map(({ key }) => key);
  let selectedKeyTopics = KEY_TOPICS.map(({ key }) => key);
</script>

<svelte:head>
  <title>Civil Movement</title>
</svelte:head>

<div
  class="flex flex-col h-screen"
  style="background: linear-gradient(180deg, #A3FFF9 0%, #69FFBF 100%);"
>
  <div class="mx-auto text-center mt-8 z-10">
    <Typography as="h1" bold>651 เหตุการณ์</Typography>
    <div class="flex space-x-2">
      <Typography as="subtitle5" bold class="my-auto">โดย</Typography>
      <FilterDropdown
        filter={ORGANIZERS}
        bind:activeFilter={selectedOrganizers}
        selectedAllLabel="ทุกผู้ดำเนินการ"
        selectedNoneLabel="เลือกอย่างน้อยหนึ่งข้อ"
      />
      <Typography as="subtitle5" bold class="my-auto">เกี่ยวกับ</Typography>
      <FilterDropdown
        filter={KEY_TOPICS}
        bind:activeFilter={selectedKeyTopics}
        selectedAllLabel="ทุกข้อเรียกร้อง"
        selectedNoneLabel="เลือกอย่างน้อยหนึ่งข้อ"
      />
    </div>
  </div>

  <FlowerVisualization />
</div>
