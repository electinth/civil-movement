<script lang="ts">
  import FilterDropdown from '../components/landing/filter-dropdown.svelte';
  import FlowerTimeline from '../components/landing/flower-timeline.svelte';
  import FlowerVisualization from '../components/landing/flower-visualization.svelte';
  import Typography from '../components/typography.svelte';
  import { ORGANIZERS, KEY_TOPICS } from '../constants/filter';
  import type movements from '../assets/data/event_all.csv';
  import MovementDialog from '../components/landing/movement-dialog.svelte';
  import InstructionDialog from '../components/landing/instruction-dialog.svelte';
  import InstructionButton from '../components/landing/instruction-button.svelte';

  const filter = {
    organizers: ORGANIZERS.map(({ key }) => key),
    keyTopics: KEY_TOPICS.map(({ key }) => key),
  };

  let selectedMovement: typeof movements[number] = null;
  let isInstructionOpen: boolean = false;
</script>

<svelte:head>
  <title>Civil Movement</title>
</svelte:head>

<section class="relative flex flex-col">
  <div class="flex h-full flex-col bg-gradient-to-b from-mint-light to-mint">
    <div class="mx-auto mt-4 md:mt-8 z-10 px-2 md:px-0">
      <div class="flex flex-row">
        <Typography as="h1" bold class="flex-1 md:text-center"
          >651 เหตุการณ์</Typography
        >
        <InstructionButton
          class="md:hidden"
          on:click={() => (isInstructionOpen = true)}
        />
      </div>
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
        <InstructionButton
          class="hidden md:block"
          on:click={() => (isInstructionOpen = true)}
        />
      </div>
    </div>

    <FlowerVisualization
      {filter}
      on:movement-click={({ detail }) => {
        selectedMovement = detail;
      }}
      on:transition-complete={() => (isInstructionOpen = true)}
    />

    {#if selectedMovement}
      <MovementDialog
        movement={selectedMovement}
        on:close={() => (selectedMovement = null)}
      />
    {/if}

    {#if isInstructionOpen}
      <InstructionDialog on:close={() => (isInstructionOpen = false)} />
    {/if}
  </div>

  <FlowerTimeline />
</section>

<style>
  section {
    height: calc(100vh - 2.5rem);

    @media (min-width: 768px) {
      height: calc(100vh - 3rem);
    }
  }
</style>
