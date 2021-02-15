<script lang="ts">
  import { bisect, line, scaleLinear, scaleTime } from 'd3';
  import type { ScaleLinear, ScaleTime } from 'd3';
  import type { TData } from '../utils/formatMovementToLinedata';
  import thmonth from '../utils/thmonth';

  export let data: TData[] = [];
  export let Y: ScaleLinear<number, number, never> = scaleLinear();
  export let X: ScaleTime<number, number, never> = scaleTime();

  export let width = 1000,
    height = 500,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };

  let tooltipdata = { x: new Date(2020, 6, 1), y: 0 };

  export let axis = false;

  $: pathDef = line<TData>()
    .x((d) => X(d.x))
    .y((d) => Y(d.y));

  function snap(e) {
    const xPos = e.offsetX;
    const domain = data.map((d) => d.x);
    const step = (X.range()[1] - X.range()[0]) / domain.length;
    const snapDate = domain[bisect(domain, X.invert(xPos - step / 2))];
    if (snapDate) tooltipdata = data.find((d) => d.x === snapDate);
  }
</script>

<div class="w-full h-full" on:mousemove={snap}>
  <svg class="h-full w-full">
    {#if axis}
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
              x2={width - margin.left - margin.right}
              stroke-width={1}
              stroke-dasharray={tick ? '3, 3' : null}
            />
            {#if tick}
              <text y={10} dominant-baseline={'hanging'}>{tick}</text>
            {/if}
          </g>
        {/each}
      </g>
    {/if}

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

    {#if axis}
      <!-- tooltip -->
      <g
        transform={`translate(${X(tooltipdata.x)}, ${0})`}
        class="text-mint stroke-current fill-current"
        font-size={12}
      >
        <text text-anchor="middle" y={15}>{tooltipdata.y} ครั้ง</text>
        <!-- svelte-ignore component-name-lowercase -->
        <g transform={`translate(0, 30)`}>
          <line
            y2={height - margin.top / 2 - margin.bottom / 2}
            stroke-width={2}
          />
          <circle r={5} />
        </g>

        <text
          y={height - margin.bottom / 2 + 10}
          text-anchor="middle"
          dominant-baseline="hanging"
        >
          {tooltipdata.x.getDate()}{' '}
          {thmonth[tooltipdata.x.getMonth()]}{' '}
          {tooltipdata.x.getFullYear() + 543}
        </text>
      </g>
    {/if}
  </svg>
</div>
