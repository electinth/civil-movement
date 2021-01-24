<script lang="ts">
  import { line, max, scaleLinear, scalePoint } from 'd3';

  import rawdata from '../assets/data/event_all.csv';

  function toMonth(datestring) {
    const [, month, year] = datestring.split('-');
    return month + '-' + year;
  }

  type TData = { x: string; y: number };
  export let data: TData[] = formatMovementData(rawdata);
  function formatMovementData(movements: typeof rawdata): TData[] {
    const monthyears = movements.map((movement) => toMonth(movement.date));

    const count: { [key: string]: number } = monthyears.reduce(
      (data, monthyear) => {
        if (typeof data[monthyear] === 'undefined') {
          data[monthyear] = 1;
        } else {
          data[monthyear] += 1;
        }

        return data;
      },
      {}
    );

    const data = Object.entries(count).map(([x, y]) => ({ x, y }));
    data.sort((a, b) => {
      const [amonth, ayear] = a.x.split('-');
      const [bmonth, byear] = b.x.split('-');

      return ayear !== byear ? +ayear - +byear : +amonth - +bmonth;
    });
    console.log(data);

    return data;
  }

  let width = 1000,
    height = 500,
    margin = { top: 50, right: 50, bottom: 50, left: 50 };

  $: Y = scaleLinear()
    .domain([0, max(data, (d) => d.y)])
    .range([height - margin.bottom, margin.top]);
  $: X = scalePoint()
    .domain(data.map((d) => d.x))
    .range([margin.left, width - margin.right]);

  $: pathDef = line<TData>()
    .x((d) => X(d.x))
    .y((d) => Y(d.y));
</script>

<div class="w-full h-full" bind:clientWidth={width} bind:clientHeight={height}>
  <svg class="h-full w-full">
    <path
      d={pathDef(data)}
      fill="transparent"
      class="stroke-current text-white"
    />
    <g transform={`translate(${margin.left}, ${margin.top})`} />
  </svg>
</div>
