<script lang="ts">
  import * as d3 from 'd3';
  import { dateDomain } from '../../utils/flower-d3';
  import Timeline from '../timeline.svelte';
  import Typography from '../typography.svelte';

  const data = [
    {
      start: new Date(2019, 11, 15),
      end: new Date(2020, 2, 15),
      label: 'ช่วงกรณียุบพรรคอนาคตใหม่',
      by: 'party',
    },
    {
      start: new Date(2020, 6, 15),
      end: new Date(2021, 2, 10),
      label: 'ช่วงการเกิดม็อบ “ปลดแอก”',
      by: 'youth',
    },
    {
      start: new Date(2020, 7, 10),
      end: new Date(2021, 2, 10),
      label: 'ช่วงการเกิดม็อบธรรมศาสตร์',
      by: 'youth',
    },
    {
      start: new Date(2020, 9, 10),
      end: new Date(2021, 2, 10),
      label: 'ช่วงการเกิดกลุ่ม “คณะราษฎร 2563”',
      by: 'people',
    },
  ];

  let width = 1000,
    height = 384,
    margin = { top: 0, right: 10, bottom: 0, left: 10 };
  $: X = d3
    .scaleTime()
    .domain(dateDomain)
    .range([margin.left, width - margin.right]);
  $: Y = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([height * 0.2, height - 75]);

  $: events = data.map(({ start, end, ...other }, index) => {
    const xStart = X(start) || X(dateDomain[0]);
    const xEnd = X(end) || X(dateDomain[1]);

    return {
      order: index + 1,
      offsetY: Y(index),
      offsetX: +xStart.toFixed(2),
      width: +(xEnd - xStart).toFixed(2),
      ...other,
    };
  });

  function textColor(by) {
    switch (by) {
      case 'party':
        return 'text-party';
      case 'youth':
        return 'text-youth';
      case 'people':
        return 'text-people';
    }
  }
</script>

<div class="w-full h-full relative">
  <Timeline {X} slide={false} />
  <div
    class="absolute top-0 -right-8 w-8 h-10 md:h-14"
    style="background: linear-gradient(to left, transparent, white);"
  />
  <div
    class="absolute top-0 -left-8 w-8 h-10 md:h-14"
    style="background: linear-gradient(to right, transparent, white);"
  />
  <div
    class="absolute w-full top-full h-96"
    bind:clientHeight={height}
    bind:clientWidth={width}
  >
    <svg class="w-full h-full">
      {#each events.reverse() as { order, offsetY, offsetX, width, by, label }}
        <g transform="translate({offsetX}, 0)">
          <line
            y2={offsetY}
            class="text-white stroke-current"
            stroke-dasharray="3, 3"
          />
          <line
            class="text-white stroke-current"
            transform="translate({width}, 0)"
            y2={offsetY}
            stroke-dasharray="3, 3"
          />
          <g transform="translate(0, {offsetY})">
            <line
              class="text-black stroke-current"
              x2={width}
              stroke-width={2}
            />
            <circle class="{textColor(by)} fill-current" r={14} />
            <circle class="text-black fill-current" cx={width} r={3} />
            <text
              class="font-heading"
              dominant-baseline="central"
              text-anchor="middle">{order}</text
            >
            <foreignObject x={-14} y={20} {width} height={100}>
              <Typography as="h4" class="w-full break-words">{label}</Typography
              >
            </foreignObject>
          </g>
        </g>
      {/each}
    </svg>
  </div>
</div>
