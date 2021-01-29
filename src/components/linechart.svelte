<script lang="ts">
  import { curveCatmullRom, line, scaleLinear, scaleTime } from 'd3';
  import type { ScaleLinear, ScaleTime } from 'd3';
  import type { TData } from '../utils/formatMovementToLinedata';

  export let data: TData[] = [];
  export let Y: ScaleLinear<number, number, never> = scaleLinear();
  export let X: ScaleTime<number, number, never> = scaleTime();

  export let width = 1000,
    height = 500,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };

  $: pathDef = line<TData>()
    .x((d) => X(d.x))
    .y((d) => Y(d.y))
    .curve(curveCatmullRom);
</script>

<div class="w-full h-full">
  <svg class="h-full w-full">
    <defs>
      <linearGradient id="whiteGradient" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="white" stop-opacity="1" />
        <stop offset="100%" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path
      d={pathDef(data)}
      fill="url(#whiteGradient)"
      class="stroke-current text-white"
    />
    <g transform={`translate(${margin.left}, ${margin.top})`} />
  </svg>
</div>
