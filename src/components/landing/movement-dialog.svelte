<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { scale } from 'svelte/transition';
  import { clickOutside } from 'svelte-use-click-outside';

  import type movements from '../../assets/data/event_all.csv';
  import CloseButton from '../close-button.svelte';
  import Typography from '../typography.svelte';

  export let movement: typeof movements[number];

  const dispatch = createEventDispatcher();

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const close = () => dispatch('close');
</script>

<div transition:scale={{ duration: 200 }} class="absolute inset-0 my-32 z-20">
  <div
    use:clickOutside={close}
    class="relative flex flex-col m-auto w-full max-w-2xl h-full bg-white rounded-xl p-8 shadow-lg"
  >
    <CloseButton on:click={close} />

    <div class="space-y-2 pb-6 mb-6 border-b border-gray">
      <Typography as="h2" bold>{movement.event_name}</Typography>
      <div class="flex flex-row space-x-6">
        <div class="flex flex-row space-x-2">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path d="M5 0.625H0V5.625H5V0.625Z" fill="#88FFCC" />
              <path
                d="M11.8933 0.625H6.89331V5.625H11.8933V0.625Z"
                fill="#88FFCC"
              />
              <path
                d="M18.7869 0.625H13.7869V5.625H18.7869V0.625Z"
                fill="#88FFCC"
              />
              <path d="M5 7.51831H0V12.5183H5V7.51831Z" fill="#88FFCC" />
              <path
                d="M11.8933 7.51831H6.89331V12.5183H11.8933V7.51831Z"
                fill="#88FFCC"
              />
              <path
                d="M18.7869 7.51831H13.7869V12.5183H18.7869V7.51831Z"
                fill="#88FFCC"
              />
              <path d="M5 14.4119H0V19.4119H5V14.4119Z" fill="#88FFCC" />
              <path
                d="M11.8933 14.4119H6.89331V19.4119H11.8933V14.4119Z"
                fill="#88FFCC"
              />
              <path
                d="M18.7869 14.4119H13.7869V19.4119H18.7869V14.4119Z"
                fill="#88FFCC"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="18.8889" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Typography as="subtitle3">{formatDate(movement.date)}</Typography>
        </div>
        <div class="flex flex-row space-x-2">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.13892 14.5C12.143 14.5 15.3889 11.2541 15.3889 7.25C15.3889 3.24594 12.143 0 8.13892 0C4.13485 0 0.888916 3.24594 0.888916 7.25C0.888916 11.2541 4.13485 14.5 8.13892 14.5Z"
              fill="#88FFCC"
            />
            <path
              d="M8.13892 9.375C9.31252 9.375 10.2639 8.42361 10.2639 7.25C10.2639 6.0764 9.31252 5.125 8.13892 5.125C6.96531 5.125 6.01392 6.0764 6.01392 7.25C6.01392 8.42361 6.96531 9.375 8.13892 9.375Z"
              fill="white"
            />
            <path
              d="M14.3889 11L9.26392 19.375C8.76392 20.25 7.51392 20.25 7.01392 19.375L1.88892 11H14.3889Z"
              fill="#88FFCC"
            />
          </svg>
          <Typography as="subtitle3">{movement.location}</Typography>
        </div>
      </div>
    </div>

    <div class="space-y-6 overflow-y-auto">
      <div class="space-y-2">
        <Typography as="h3" bold>ข้อเรียกร้อง</Typography>
        <Typography as="pre">{movement.proposal}</Typography>
      </div>
      <div class="space-y-2">
        <Typography as="h3" bold>วัตถุประสงค์การชุมนุม</Typography>
        <Typography as="pre">{movement.cause}</Typography>
      </div>
    </div>
  </div>
</div>
