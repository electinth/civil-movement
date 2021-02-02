import * as d3 from 'd3';
import * as d3ForceSampled from 'd3-force-sampled';

export const reshapeData = (data) => {
  const node_sizes = {};
  const nodes = [];
  const links = [];
  const stems = [];

  data
    .sort((a, b) => a.date.getMilliseconds() - b.date.getMilliseconds())
    .forEach(
      ({
        date,
        event_no,
        player,
        time_show,
        x_desktop,
        x_mobile,
        y_desktop,
        y_mobile,
        pre_event,
        reaction_type,
        key_topic,
      }) => {
        const id = event_no;

        let node = {
          id,
          date,
          type: player,
          key_topic,
          time_show,
          x_desktop,
          x_mobile,
          y_desktop,
          y_mobile,
        };

        nodes.push(node);
        node_sizes[id] = 1;

        if (pre_event != '') {
          let pres = pre_event.split(',');
          for (let pre of pres) {
            pre = pre.trim();
            links.push({ source: pre, target: id, type: reaction_type });
            node_sizes[pre]++;
          }
        }

        stems.push({
          date,
          type: player,
          shown: time_show === 1 || time_show === 2, // 1 for long line, 2 for short line
        });
      }
    );

  return {
    node_sizes,
    nodes,
    links,
    stems,
  };
};

export function plot(
  data,
  stageElement,
  onMouseOverNode,
  onMouseOutOfNode,
  onClickNode,
  onNodeTransitionCompleted
) {
  const width = stageElement.clientWidth;
  const height = stageElement.clientHeight;
  const mode = width > height ? 'desktop' : 'mobile';

  let simulation;
  let dragging = false;
  let filterSatisfiedNodes = [];

  const drag = () => {
    function dragstarted(event, d) {
      dragging = true;
      if (!event.active) simulation.alphaTarget(0.1).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      dragging = false;
    }
    return d3
      .drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);
  };

  const node_radius = 5;
  const link_length = 10;

  const color_player = d3
    .scaleOrdinal(d3.range(1, 5), [`#FFFFFF`, `#C1B1F0`, `#FF7A00`, `#1A171B`])
    .unknown(`#00ff00`);
  const color_player_muted = d3
    .scaleOrdinal(d3.range(1, 5), [`#C8FFF3`, `#B5E8EF`, `#C8D7A7`, `#83B9AF`])
    .unknown(`#00ff00`);
  const reaction_types = d3.range(1, 3);
  const color_reaction = d3
    .scaleOrdinal(reaction_types, [`#0CC6C6`, `#FF655D`])
    .unknown(`#00ff00`);
  const color_reaction_muted = d3
    .scaleOrdinal(reaction_types, [`#7EEEE1`, `#C6D1C2`])
    .unknown(`#00ff00`);

  const time_x = d3.scaleTime(
    [new Date(2019, 6, 1), new Date(2021, 5, 30)],
    [-width / 2, width / 2]
  );

  const bound_x = (x, centered = true) =>
    Math.max(
      node_radius,
      Math.min(width - node_radius, x + (centered ? width / 2 : 0))
    );
  const bound_y = (y, centered = true) =>
    Math.max(
      node_radius,
      Math.min(height - node_radius, y + (centered ? height / 2 : 0))
    );

  const svg = d3.select(stageElement);

  // Arrowheads
  const arrow_size = 5;
  const append_marker = (id_suffix, color) => {
    svg
      .append('defs')
      .selectAll('marker')
      .data(reaction_types)
      .join('marker')
      .attr('id', (d) => `arrow-${d}` + id_suffix)
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 16)
      .attr('markerWidth', arrow_size)
      .attr('markerHeight', arrow_size)
      .attr('orient', 'auto')
      .append('path')
      .attr('fill', color)
      .attr('d', 'M0,-5L10,0L0,5');
  };
  append_marker('', (d) => color_reaction(d));
  append_marker('-muted', (d) => color_reaction_muted(d));

  const radius_from_id = (id) => Math.sqrt(node_sizes[id]);

  const { node_sizes, nodes: rawNodes, links, stems: rawStems } = data;

  const nodes = rawNodes.map(
    ({
      date,
      time_show,
      x_desktop,
      x_mobile,
      y_desktop,
      y_mobile,
      ...node
    }) => {
      const positions = { x_desktop, x_mobile, y_desktop, y_mobile };

      return {
        ...node,
        x: positions['x_' + mode]
          ? ((positions['x_' + mode] - 50) * width) / 100
          : time_x(date) + Math.random(),
        y: positions['y_' + mode]
          ? ((50 - positions['y_' + mode]) * height) / 100
          : time_show === 2
          ? height / 3
          : Math.random(),
      };
    }
  );

  const stems = rawStems.map(({ date, ...stem }, index) => ({
    ...stem,
    target: nodes[index],
    source: { x: time_x(date), y: height / 2 },
  }));

  const force_distance = (d) =>
    (radius_from_id(d.source.id) + radius_from_id(d.target.id)) * node_radius +
    link_length;
  const force_radius = (d) => (radius_from_id(d.id) + 1) * node_radius;
  simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(link_length)
        .distance(force_distance)
        .strength(0.5)
    )
    .force('charge', d3ForceSampled.forceManyBodySampled().strength(-0.2))
    .force('collide', d3.forceCollide().radius(force_radius).strength(0.2))
    .tick(20);

  const link_stroke = (d) => color_reaction(d.type);
  const link_marker = (d) =>
    `url(${new URL(`#arrow-${d.type}`, location.toString())})`;
  const link = svg
    .append('g')
    .selectAll('path')
    .data(links)
    .join('path')
    .attr('fill', 'none')
    .attr('stroke-width', node_radius / 4)
    .attr('stroke', link_stroke)
    .attr('marker-end', link_marker);

  const node_color = (d) => color_player(d.type);
  const stem_display = (d) => (d.shown ? 'unset' : 'none');
  const stem = svg
    .append('g')
    .selectAll('path')
    .data(stems)
    .join('path')
    .attr('fill', 'none')
    .attr('stroke-width', node_radius / 4)
    .attr('stroke', node_color)
    .attr('display', stem_display);

  const link_stroke_muted = (d) => color_reaction_muted(d.type);
  const link_marker_muted = (d) =>
    `url(${new URL(`#arrow-${d.type}-muted`, location.toString())})`;
  const node_color_muted = (d) => color_player_muted(d.type);

  const applyNodeCurserPointer = (d) => filterSatisfiedNodes.includes(d.id);
  const applyNodeFill = (d) =>
    (filterSatisfiedNodes.includes(d.id) ? node_color : node_color_muted)(d);
  const applyStemStroke = (d) =>
    (filterSatisfiedNodes.includes(d.target.id)
      ? node_color
      : node_color_muted)(d);
  const applyLinkStroke = (d) =>
    (filterSatisfiedNodes.includes(d.target.id)
      ? link_stroke
      : link_stroke_muted)(d);
  const applyLinkMarker = (d) =>
    (filterSatisfiedNodes.includes(d.target.id)
      ? link_marker
      : link_marker_muted)(d);
  const updateObjectStateToMatchFilter = () => {
    node
      .attr('fill', applyNodeFill)
      .classed('cursor-pointer', applyNodeCurserPointer);
    stem.attr('stroke', applyStemStroke);
    link.attr('stroke', applyLinkStroke).attr('marker-end', applyLinkMarker);
  };

  const mouseover = (event, d) => {
    if (mode === 'mobile' || !filterSatisfiedNodes.includes(d.id)) {
      return;
    }

    link
      .attr('stroke', link_stroke_muted)
      .attr('marker-end', link_marker_muted);
    stem
      .attr('stroke', node_color_muted)
      .filter((dd) => dd.target.id === d.id)
      .raise()
      .attr('stroke', node_color)
      .attr('display', 'unset');
    node.attr('fill', node_color_muted);
    d3.select(event.currentTarget).attr('fill', node_color);

    onMouseOverNode(d);
  };
  const mouseout = (_, d) => {
    if (dragging || !filterSatisfiedNodes.includes(d.id)) {
      return;
    }

    updateObjectStateToMatchFilter();
    stem.attr('display', stem_display);

    onMouseOutOfNode(d);
  };
  const mouseclick = (_, d) => {
    if (mode === 'desktop' && filterSatisfiedNodes.includes(d.id)) {
      onClickNode(d);
    }
  };
  const cx = (d) => bound_x(d.x);
  const cy = (d) => bound_y(d.y);
  const node = svg
    .append('g')
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .classed('node', true)
    .attr('fill', node_color)
    .attr('cx', cx)
    .attr('cy', cy)
    .call(drag())
    .on('mouseover', mouseover)
    .on('mouseout', mouseout)
    .on('click', mouseclick);

  const delay = (_, i) => i * 15;
  link
    .attr('opacity', 0)
    .transition()
    .delay(delay)
    .duration(1500)
    .attr('opacity', 1);
  stem
    .attr('opacity', 0)
    .transition()
    .delay(delay)
    .duration(1500)
    .attr('opacity', 1);

  let pendingNodeAnimation = node.size();

  const onNodeAnimationEnd = () =>
    pendingNodeAnimation > 1
      ? pendingNodeAnimation--
      : onNodeTransitionCompleted();

  node
    .transition()
    .delay(delay)
    .duration(1500)
    .attr('r', node_radius)
    .on('end', onNodeAnimationEnd);

  const d_arrow = (d) =>
    `M${bound_x(d.source.x)},${bound_y(d.source.y)} L${bound_x(
      d.target.x
    )},${bound_y(d.target.y)}`;
  const d_stem = d3
    .linkVertical()
    .source((d) => d.source)
    .target((d) => d.target)
    .x((d) => bound_x(d.x))
    .y((d) => bound_y(d.y));

  simulation.on('tick', () => {
    link.attr('d', d_arrow);
    stem.attr('d', d_stem);
    node.attr('cx', cx).attr('cy', cy);
  });

  const onFilterChange = ({ organizers, keyTopics }) => {
    filterSatisfiedNodes = rawNodes
      .filter(
        ({ type, key_topic }) =>
          organizers.includes(type) &&
          keyTopics.some((topic) => key_topic.includes(topic))
      )
      .map(({ id }) => id);

    updateObjectStateToMatchFilter();
  };

  return onFilterChange;
}
