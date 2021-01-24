<script lang="ts">
  import {
    extent,
    line,
    max,
    scaleLinear,
    scalePoint,
    scaleTime,
    timeParse,
  } from 'd3';

  import rawdata from '../assets/data/event_all.csv';

  function parser(datestring) {
    const [day, month, year] = datestring.split('-');

    return timeParse('%d %m %Y')(`${day} ${month} ${year - 543}`);
  }

  type TData = { x: Date; y: number };
  export let data: TData[] = formatMovementData(rawdata);
  function formatMovementData(movements: typeof rawdata): TData[] {
    const date = movements.map((movement) => parser(movement.date));

    const count: { [key: string]: TData } = date.reduce((counter, date) => {
      const strdate = date.toString();
      if (typeof counter[strdate] === 'undefined') {
        counter[strdate] = { x: date, y: 1 };
      } else {
        counter[strdate].y += 1;
      }

      return counter;
    }, {});
    const data = Object.values(count);
    console.log(data);
    data.sort((a, b) => a.x.getTime() - b.x.getTime());

    return data;
  }

  let width = 1000,
    height = 500,
    margin = { top: 0, right: 0, bottom: 0, left: 0 };

  $: Y = scaleLinear()
    .domain([0, max(data, (d) => d.y)])
    .range([height - margin.bottom, margin.top]);
  $: X = scaleTime()
    .domain(extent(data, (d) => d.x))
    .range([margin.left, width - margin.right]);

  $: pathDef = line<TData>()
    .x((d) => X(d.x))
    .y((d) => Y(d.y));
</script>

<div class="w-full h-full" bind:clientWidth={width} bind:clientHeight={height}>
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
