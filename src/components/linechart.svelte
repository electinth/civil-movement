<script lang="ts">
  import { curveCatmullRom, line, scaleLinear, scaleTime, ticks } from 'd3';
  import type { ScaleLinear, ScaleTime } from 'd3';
  import type { TData } from '../utils/formatMovementToLinedata';
  import thmonth from '../utils/thmonth';

  export let data: TData[] = [];
  export let Y: ScaleLinear<number, number, never> = scaleLinear();
  export let X: ScaleTime<number, number, never> = scaleTime();

  export let width = 1000,
    height = 500,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };

  export let axis = false;

  $: pathDef = line<TData>()
    .x((d) => X(d.x))
    .y((d) => Y(d.y))
    .curve(curveCatmullRom);
</script>

<div class="w-full h-full">
  <svg class="h-full w-full">
    <!-- x - axis -->
    <g
      transform={`translate(0, ${height - margin.bottom})`}
      class="fill-current text-blue-light"
      font-size={12}
    >
      {#each X.domain() as tick}
        <g transform={`translate(${X(tick)}, 14)`}>
          <text>
            {thmonth[tick.getMonth()]}
          </text>
          <text y={16}>
            {tick.getFullYear() + 543}
          </text>
        </g>
      {/each}
    </g>

    <!-- y - axis -->
    <g
      transform={`translate(${margin.left}, 0)`}
      class="fill-current text-blue-light stroke-current"
      font-size={14}
    >
      {#each Y.ticks(5) as tick}
        <g transform={`translate(0, ${Y(tick)})`}>
          <!-- svelte-ignore component-name-lowercase -->
          <line
            x2={width}
            stroke-width={1}
            stroke-dasharray={tick ? '3, 3' : null}
          />
          {#if tick}
            <text y={10} dominant-baseline={'hanging'}>{tick}</text>
          {/if}
        </g>
      {/each}
    </g>

    <defs>
      <linearGradient id="whiteGradient" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="white" stop-opacity="1" />
        <stop offset="100%" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
    <!-- line -->
    <path
      d={pathDef(data)}
      fill="url(#whiteGradient)"
      class="stroke-current text-white"
    />
  </svg>
</div>
