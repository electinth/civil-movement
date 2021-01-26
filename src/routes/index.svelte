<script lang="ts">
  import FilterDropdown from '../components/landing/filter-dropdown.svelte';
  import FlowerTimeline from '../components/landing/flower-timeline.svelte';
  import FlowerVisualization from '../components/landing/flower-visualization.svelte';
  import Typography from '../components/typography.svelte';
  import { ORGANIZERS, KEY_TOPICS } from '../constants/filter';
  import type movements from '../assets/data/event_all.csv';
  import MovementDialog from '../components/landing/movement-dialog.svelte';

  const filter = {
    organizers: ORGANIZERS.map(({ key }) => key),
    keyTopics: KEY_TOPICS.map(({ key }) => key),
  };

  let selectedMovement: typeof movements[number] = null;
</script>

<svelte:head>
  <title>Civil Movement</title>
</svelte:head>

<div class="h-screen -mt-10 md:-mt-24 pt-10 md:pt-24 flex flex-col">
  <div class="flex h-full flex-col bg-gradient-to-b from-mint-light to-mint">
    <div class="mx-auto text-center mt-8 z-10">
      <Typography as="h1" bold>651 เหตุการณ์</Typography>
      <div class="flex space-x-2 md:space-x-4">
        <Typography as="subtitle5" bold class="my-auto">โดย</Typography>
        <FilterDropdown
          filter={ORGANIZERS}
          bind:activeFilter={filter.organizers}
          selectedAllLabel="ทุกผู้ดำเนินการ"
          selectedNoneLabel="เลือกอย่างน้อยหนึ่งข้อ"
        />
        <Typography as="subtitle5" bold class="my-auto">เกี่ยวกับ</Typography>
        <FilterDropdown
          filter={KEY_TOPICS}
          bind:activeFilter={filter.keyTopics}
          selectedAllLabel="ทุกข้อเรียกร้อง"
          selectedNoneLabel="เลือกอย่างน้อยหนึ่งข้อ"
        />
      </div>
    </div>

    <FlowerVisualization
      {filter}
      on:movement-click={({ detail }) => {
        selectedMovement = detail;
      }}
    />

    {#if selectedMovement}
      <MovementDialog
        movement={selectedMovement}
        on:close={() => (selectedMovement = null)}
      />
    {/if}
  </div>

  <FlowerTimeline />
</div>
