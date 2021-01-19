<script>
  import FilterDropdown from '../components/landing/filter-dropdown.svelte';
  import FlowerVisualization from '../components/landing/flower-visualization.svelte';
  import Typography from '../components/typography.svelte';
  import { ORGANIZERS, KEY_TOPICS } from '../constants/filter.ts';

  let selectedOrganizers = ORGANIZERS.map(({ key }) => key);
  let selectedKeyTopics = KEY_TOPICS.map(({ key }) => key);
</script>

<svelte:head>
  <title>Civil Movement</title>
</svelte:head>

<div class="flex flex-col bg-mint">
  <div>
    {selectedOrganizers}
    <FilterDropdown filter={ORGANIZERS} bind:activeFilter={selectedOrganizers}>
      ทุกผู้ดำเนินการ
    </FilterDropdown>
    {selectedKeyTopics}
    <FilterDropdown filter={KEY_TOPICS} bind:activeFilter={selectedKeyTopics}>
      ทุกข้อเรียกร้อง
    </FilterDropdown>
  </div>

  <FlowerVisualization />
  <div>
    <Typography as="h1" bold>Heading 1</Typography>
    <Typography as="h2" bold>Heading 2</Typography>
    <Typography as="h3" bold>Heading 3</Typography>
    <Typography as="h4" bold>Heading 4</Typography>
    <Typography as="h5" bold>Heading 5</Typography>
    <Typography as="h1">Heading 1</Typography>
    <Typography as="h2">Heading 2</Typography>
    <Typography as="h3">Heading 3</Typography>
    <Typography as="h4">Heading 4</Typography>
    <Typography as="h5">Heading 5</Typography>
    <Typography as="subtitle1" bold>Subtitle 1</Typography>
    <Typography as="subtitle2" bold>Subtitle 2</Typography>
    <Typography as="subtitle3" bold>Subtitle 3</Typography>
    <Typography as="subtitle4" bold>Subtitle 4</Typography>
    <Typography as="subtitle5" bold>Subtitle 5</Typography>
    <Typography as="subtitle1">Subtitle 1</Typography>
    <Typography as="subtitle2">Subtitle 2</Typography>
    <Typography as="subtitle3">Subtitle 3</Typography>
    <Typography as="subtitle4">Subtitle 4</Typography>
    <Typography as="subtitle5">Subtitle 5</Typography>
    <Typography as="body1" bold>Body 1</Typography>
    <Typography as="body2" bold>Body 2</Typography>
    <Typography as="body1">Body 1</Typography>
    <Typography as="body2">Body 2</Typography>
  </div>
</div>
