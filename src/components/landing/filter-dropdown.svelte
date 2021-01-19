<script lang="ts">
  import type { Filter } from '../../constants/filter';
  import Typography from '../typography.svelte';
  import FilterOption from './filter-option.svelte';
  import { clickOutside } from 'svelte-use-click-outside';

  export let filter: Filter[];
  export let activeFilter: string[];
  export let selectedAllLabel: string;

  let isOpen = false;

  function toggleOption(optionKey: string): void {
    activeFilter = activeFilter.includes(optionKey)
      ? activeFilter.length !== 1
        ? activeFilter.filter((key) => key !== optionKey)
        : activeFilter
      : filter
          .filter(({ key }) => activeFilter.includes(key) || key === optionKey)
          .map(({ key }) => key);
  }
</script>

<div use:clickOutside={() => (isOpen = false)}>
  <button
    on:click={() => (isOpen = !isOpen)}
    class={`flex flex-row px-2 py-1 space-x-2 rounded focus:outline-none ${
      isOpen ? 'bg-white' : 'hover:bg-white hover:bg-opacity-50'
    }`}>
    <Typography as="subtitle4">
      {#if activeFilter.length === filter.length}
        {selectedAllLabel}
      {:else}
        {filter.find(({ key }) => key === activeFilter[0]).label}
        {#if activeFilter.length > 1}
          + {activeFilter.length - 1}
        {/if}
      {/if}
    </Typography>
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current my-auto transform transition-transform duration-100 ease-in-out"
      class:rotate-180={isOpen}>
      <path d="M1 1L5 5L9 1" />
    </svg>
  </button>
  {#if isOpen}
    <div class="relative">
      <div
        class="absolute top-1 flex flex-col p-1 rounded bg-black bg-opacity-50 text-white"
      >
        {#each filter as option}
          <FilterOption
            {option}
            isActive={activeFilter.includes(option.key)}
            on:click={() => toggleOption(option.key)}
          />
        {/each}
      </div>
    </div>
  {/if}
</div>