<script lang="ts">
  import * as d3 from 'd3';

  import Linechart from '../components/linechart.svelte';
  import Typography from '../components/typography.svelte';

  import movements from '../assets/data/event_all.csv';
  import formatMovementData from '../utils/formatMovementToLinedata';
  import TopicOrderedList from '../components/summary/TopicOrderedList.svelte';
  import Topic from '../components/summary/topic.svelte';
  import TopicHead from '../components/summary/TopicHead.svelte';
  import TopicParagraph from '../components/summary/TopicParagraph.svelte';
  import SummaryTimeline from '../components/summary/summary-timeline.svelte';

  const linedata = formatMovementData(movements);
  let width = 1024,
    lcHeight = 320,
    margin = { top: 50, right: 30, bottom: 50, left: 30 };
  $: Y = d3
    .scaleLinear()
    .domain([0, d3.max(linedata, (d) => d.y)])
    .range([lcHeight - margin.bottom, margin.top]);
  $: X = d3
    .scaleTime()
    .domain([new Date(2019, 11, 1), d3.max(linedata, (d) => d.x)])
    .range([margin.left, width - margin.right]);
</script>

<div
  class="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-dark to-mint-light via-mint py-24"
>
  <Typography as="h1" class="text-center text-white">
    สรุปภาพรวม<br />
    Civil Movement 2020
  </Typography>
  <div
    class="w-full max-w-5xl h-80"
    bind:clientWidth={width}
    bind:clientHeight={lcHeight}
  >
    <Linechart
      data={linedata}
      {width}
      height={lcHeight}
      {margin}
      {X}
      {Y}
      axis
    />
  </div>
  <Topic>
    <TopicHead>แบ่งเป็น 2 ฝ่ายหลัก ๆ</TopicHead>
    <TopicOrderedList>
      <li>ฝ่ายเรียกร้องประชาธิปไตย</li>
      <li>ฝ่ายอนุรักษ์นิยมปกป้องสถาบันพระมหากษัตริย์</li>
    </TopicOrderedList>
  </Topic>
  <Topic>
    <TopicHead>ประเด็นที่เรียกร้อง</TopicHead>
    <TopicOrderedList>
      <li>เรียกร้องความยุติธรรม</li>
      <li>ขับไล่รัฐบาล</li>
      <li>แก้ไขรัฐธรรมนูญ</li>
      <li>ปฏิรูปสถาบันพระมหากษัตริย์</li>
      <li>
        ปกป้องสถาบันพระมหากษัตริย์<br />และประเด็นย่อยอื่น ๆ เช่น เพศ การศึกษา
        ศาสนา สิ่งแวดล้อม สวัสดิการ<br />รำลึกเหตุการณ์สำคัญ ฯลฯ
      </li>
    </TopicOrderedList>
  </Topic>
  <Topic>
    <TopicHead>ลักษณะของ Movement</TopicHead>
    <TopicParagraph>
      มีทั้งจัดเวทีใหญ่ + เวทีย่อย และแบบดาวกระจายจัดชุมนุมทั่วประเทศ
      ส่วนมากเป็นลักษณะการแสดงออกเชิงสัญลักษณ์ (การใช้ถ้อยคำ , การชู 3 นิ้ว ฯลฯ)
      การพูดปราศรัยประเด็นต่าง ๆ การอ่านแถลงการณ์ รวมถึงกิจกรรมลักษณะอื่น ๆ เช่น
      กิจกรรมวิ่ง การแสดง Parody (ล้อเลียน) การแสดงดนตรี การแสดงพิธีกรรม
      การตั้งวงรับประทานอาหารและเครื่องดื่ม การฝังหมุดคณะราษฎร ฯลฯ
    </TopicParagraph>
  </Topic>
  <Topic>
    <TopicHead>ระยะเวลาของ Movement</TopicHead>
    <TopicParagraph>
      ส่วนมากเป็นแบบ Flash mob จบใน 1 วัน หรือหากมีค้างคืน ก็ไม่เกิน 1 คืน
      และทำกิจกรรมต่อเนื่องในวันรุ่งขึ้น ยังไม่มีการชุมนุมระยะยาว
    </TopicParagraph>
  </Topic>
  <Topic>
    <TopicHead>แนวโน้มความถี่ของการเกิด Movement</TopicHead>
    <TopicParagraph>
      เหตุการณ์ตัวเร่งที่ทำให้ปริมาณม็อบของฝั่งประชาธิปไตยเพิ่มขึ้น =
      การใช้ความรุนแรงจากภาครัฐ (สลายการชุมนุม)
      และการใช้อำนาจทางกระบวนกฎหมายจากรัฐ (คดียุบพรรค ไล่จับแกนนำ
      ไล่ใช้โทษทางอาญา หมวดความมั่นคง ฯลฯ)
      เหตุการณ์ตัวเร่งที่ทำให้ปริมาณม็อบของฝั่งอนุรักษ์นิยมเพิ่มขึ้น =
      การแตะต้องสถาบันประเด็นเรื่องพระมหากษัตริย์ (ทั้งการปราศรัย
      และการแสดงออกเชิงสัญลักษณ์)
    </TopicParagraph>
  </Topic>
  <Topic>
    <TopicHead>สาเหตุหลักของความรุนแรง</TopicHead>
    <TopicParagraph>เกิดจาก 2 สาเหตุหลัก คือ</TopicParagraph>
    <TopicOrderedList>
      <li>การใช้อำนาจรัฐ - สลายการชุมนุม</li>
      <li>
        การปะทะกันของมวลชน (ฝั่งคณะราษฎร VS
        ฝั่งมวลชนเสื้อเหลือง)รวมถึงมีความพยายามในการสร้างสถานการณ์ความรุนแรงขึ้นจากบุคคลบางกลุ่ม
        (เช่น การใช้อาวุธปืน อาวุธระเบิด)
      </li>
    </TopicOrderedList>
  </Topic>
  <Topic>
    <TopicHead>ความเคลื่อนไหวแบ่งเป็น 4 ช่วงหลัก ๆ</TopicHead>
  </Topic>
  <div class="w-full max-w-5xl mb-96">
    <SummaryTimeline />
  </div>
  <!-- placeholder -->
  <div style="height: 7000px;" />
</div>
