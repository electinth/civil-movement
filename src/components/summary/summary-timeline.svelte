<script lang="ts">
  import * as d3 from 'd3';

  import Timeline from '../timeline.svelte';
  import movements from '../../assets/data/event_all.csv';
  import formatMovementData from '../../utils/formatMovementToLinedata';
  import { line } from 'd3';

  let width = 1000,
    height = 384,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };
  const linedata = formatMovementData(movements);
  let X = d3
    .scaleTime()
    .domain([new Date(2019, 11, 1), d3.max(linedata, (d) => d.x)]);
  $: X = X.range([margin.left, width - margin.right]);
  $: Y = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([100, height - 75]);

  $: console.log();

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
</script>

<div class="w-full h-full relative">
  <Timeline {X} slide={false} />
  <div
    class="absolute w-full top-full h-96"
    bind:clientHeight={height}
    bind:clientWidth={width}
  >
    <svg class="w-full h-full">
      {#each data as d, i}
        <g transform={`translate(${X(d.start)}, 0)`}>
          <!-- svelte-ignore component-name-lowercase -->
          <line
            y2={Y(i)}
            class="text-white stroke-current"
            stroke-dasharray="3, 3"
          />
          <!-- svelte-ignore component-name-lowercase -->
          <line
            class="text-white stroke-current"
            transform={`translate(${X(d.end) - X(d.start)}, 0)`}
            y2={Y(i)}
            stroke-dasharray="3, 3"
          />
          <g transform={`translate(0, ${Y(i)})`}>
            <!-- svelte-ignore component-name-lowercase -->
            <line
              class="text-black stroke-current"
              x2={X(d.end) - X(d.start)}
              stroke-width={2}
            />
            <circle class="text-{d.by} fill-current" r={14} />
            <circle
              class="text-black fill-current"
              cx={X(d.end) - X(d.start)}
              r={3}
            />
            <text
              class="font-heading"
              dominant-baseline="central"
              text-anchor="middle">{i + 1}</text
            >
            <foreignObject
              x={-14}
              y={20}
              width={X(d.end) - X(d.start)}
              height={50}
            >
              <div class="font-heading" style="width: 200px; height: 50px;">
                {d.label}
              </div>
            </foreignObject>
            <!-- <text 
              {d.label}
            </text> -->
          </g>
        </g>
      {/each}
    </svg>
    <div style="height: 1000px; background: rgba(0, 0, 0,  0.2);" />
  </div>
</div>
