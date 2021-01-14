<script lang="ts">
  import * as d3 from 'd3';
  import { onMount } from 'svelte';

  let stage: HTMLElement;

  onMount(() => {
    var margin = { top: 10, right: 40, bottom: 30, left: 30 },
      width = 450 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    var svG = d3
      .select(stage)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Create data
    var data = [
      { x: 10, y: 20 },
      { x: 40, y: 90 },
      { x: 80, y: 50 },
    ];

    // X scale and Axis
    var x = d3
      .scaleLinear()
      .domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
      .range([0, width]); // This is the corresponding value I want in Pixel
    svG
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    // X scale and Axis
    var y = d3
      .scaleLinear()
      .domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
      .range([height, 0]); // This is the corresponding value I want in Pixel
    svG.append('g').call(d3.axisLeft(y));

    // Add 3 dots for 0, 50 and 100%
    svG
      .selectAll('whatever')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return x(d.x);
      })
      .attr('cy', function (d) {
        return y(d.y);
      })
      .attr('r', 7);
  });
</script>

<div bind:this={stage} class="w-screen h-full" />
