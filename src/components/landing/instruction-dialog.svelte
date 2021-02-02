<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  import CloseButton from '../close-button.svelte';
  import Typography from '../typography.svelte';

  const organizerSymbols = [
    { label: 'เยาวชน (15-24 ปี)', image: 'images/player-01.png' },
    { label: 'ประชาชน', image: 'images/player-02.png' },
    { label: 'พรรคการเมือง', image: 'images/player-03.png' },
    { label: 'รัฐบาล', image: 'images/player-04.png' },
  ];

  const dispatch = createEventDispatcher();
</script>

<div transition:fade class="absolute inset-0 z-10">
  <div class="w-full h-full bg-gradient-to-b from-white to-mint opacity-95" />
  <div class="absolute inset-0 flex overflow-y-auto">
    <div class="absolute top-2 right-2">
      <CloseButton on:click={() => dispatch('close')} />
    </div>
    <div
      class="flex flex-col text-center py-8 px-4 md:px-8 space-y-8 md:space-y-12 w-full max-w-4xl m-auto"
    >
      <div>
        <Typography as="h1" bold>CIVIL MOVEMENT 2020</Typography>
        <Typography as="h2">ปีแห่งพลังของประชาชน</Typography>
      </div>
      <Typography as="body1">
        ตั้งแต่ช่วงต้นปี 2020 (พ.ศ. 2563) เป็นต้นมา
        ประเทศไทยได้มีเหตุการณ์และความเคลื่อนไหวสำคัญทางการเมืองเกิดขึ้นมากมาย
        มีผู้เล่นหลายฝ่ายที่เกี่ยวข้องกับเรื่องนี้
        และเหตุการณ์หนึ่งส่งผลให้เกิดอีกเหตุการณ์อย่างปฏิเสธไม่ได้
      </Typography>
      <Typography as="body1">
        ELECT
        ได้ทำการรวบรวมข้อมูลและนำมาวิเคราะห์ถึงความสัมพันธ์ของแต่ละเหตุการณ์
        เพื่อสะท้อนให้เห็นถึงความเชื่อมโยงอย่างเป็นระบบของเหตุการณ์เหล่านั้น
      </Typography>

      <div
        class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4"
      >
        <div class="flex-1 grid grid-cols-2">
          <div class="col-span-2">
            <Typography as="body2" bold>วงกลม 1 วง = 1 เหตุการณ์</Typography>
            <Typography as="body2" bold>สี = ผู้ดำเนินการ</Typography>
          </div>
          {#each organizerSymbols as { image, label }}
            <div>
              <img src={image} alt={label} class="mx-auto my-2" />
              <Typography as="subtitle5" class="m-2">{label}</Typography>
            </div>
          {/each}
          <div />
        </div>

        <div class="flex-1 space-y-4">
          <Typography as="body2" bold>
            เส้น = ความสัมพันธ์กับเหตุการณ์ก่อนหน้า
          </Typography>
          <img
            src="images/instruction-relationship.png"
            alt="ความสัมพันธ์"
            class="mx-auto"
          />
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-auto"
      >
        <Typography as="body2" bold class="my-auto">
          สามารถเลือกดูเหตุการณ์ได้ตามผู้ดำเนินการ ข้อเรียกร้อง และช่วงเวลา
        </Typography>
        <img src="images/instruction-timeline.png" alt="Timeline" />
      </div>
    </div>
  </div>
</div>
