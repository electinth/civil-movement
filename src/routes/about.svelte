<script>
  import Typography from '../components/typography.svelte';
  import sources from '../assets/data/sources.json';
  import Sharer from '../components/sharer.svelte';
  import LinkExternal from '../components/link-external.svelte';
</script>

<div class="w-full bg-gradient-to-b from-white to-mint">
  <div
    class="flex flex-col space-y-8 md:space-y-12 px-4 py-12 md:py-24 w-full max-w-4xl mx-auto"
  >
    <Typography as="h1" bold class="mx-auto">เกี่ยวกับโครงการ</Typography>

    <div class="space-y-4">
      <Typography as="body1" indented>
        ตั้งแต่ช่วงต้นปี 2020 (พ.ศ. 2563) เป็นต้นมา
        ประเทศไทยได้มีเหตุการณ์และความเคลื่อนไหวสำคัญทางการเมืองต่าง ๆ
        เกิดขึ้นมากมาย และมีผู้เล่นหลายฝ่ายที่เกี่ยวข้องกับเรื่องนี้
        ไม่ว่าจะเป็นรัฐบาล พรรคการเมือง
        รวมไปถึงบรรดาประชาชนที่ออกมาเคลื่อนไหวจำนวนมาก
        เพื่อแสดงพลังทางการเมืองของตนเอง
        อันเป็นการใช้สิทธิและเสรีภาพตามรัฐธรรมนูญ
      </Typography>
      <Typography as="body1" indented>
        เหตุการณ์ทางการเมืองล้วนเชื่อมโยงอย่างเป็นเหตุเป็นผล
        ความเคลื่อนไหวเพื่อแสดงเจตจำนงของประชาชนแต่ละครั้ง
        ล้วนมีความสัมพันธ์สืบเนื่องกันอย่างเป็นระบบ
        เหตุการณ์หนึ่งย่อมส่งผลให้เกิดอีกเหตุการณ์หนึ่งอย่างปฏิเสธไม่ได้
        และย่อมมีทั้งเหตุการณ์ที่สนับสนุนและต่อต้านความเคลื่อนไหวต่าง ๆ
        ของประชาชนเกิดขึ้นได้เสมอ
      </Typography>
      <Typography as="body1" indented>
        ELECT ได้ทำการรวบรวมตัวอย่างข้อมูลความเคลื่อนไหวทางการเมืองของประชาชน
        และเหตุการณ์สำคัญทางการเมืองต่าง ๆ ที่เกิดขึ้นในปี 2020
        และนำมาวิเคราะห์ถึงความสัมพันธ์ของเหตุการณ์แต่ละเหตุการณ์
        เพื่อสะท้อนให้เห็นถึงความเชื่อมโยงอย่างเป็นระบบซึ่งกันและกันของข้อมูลเหล่านั้น
        ผ่านกระบวนการ Data Visualization
      </Typography>
      <Typography as="body1" indented>
        ELECT
        หวังว่าการรวบรวมและวิเคราะห์ข้อมูลความเคลื่อนไหวทางการเมืองของประชาชนในงาน
        “Civil Movement 2020”
        จะเป็นประโยชน์ต่อผู้ที่สนใจในเรื่องความเคลื่อนไหวทางการเมืองในรอบปี 2020
        รวมถึงสามารถเป็นประโยชน์ให้กับผู้ที่ต้องการนำเอาข้อมูลตรงนี้ไปต่อยอดต่อไป
      </Typography>
    </div>

    <div class="space-y-4 md:space-y-6">
      <Typography as="h2" bold>ที่มาของข้อมูล</Typography>
      <div class="space-y-4">
        <div>
          <Typography as="body1" bold>1. เว็บไซต์</Typography>
          <ul class="grid md:grid-cols-2 list-inside list-disc">
            {#each sources.website as href}
              <li>
                <LinkExternal {href}>{href}</LinkExternal>
              </li>
            {/each}
          </ul>
        </div>
        <div>
          <Typography as="body1" bold>2. เพจ Facebook</Typography>
          <ul class="grid md:grid-cols-2 list-inside list-disc">
            {#each sources.facebookPage as href}
              <li
                class="w-full overflow-hidden overflow-ellipsis whitespace-nowrap"
              >
                <LinkExternal {href}>{href}</LinkExternal>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    <div class="space-y-4 md:space-y-6">
      <Typography as="h2" bold>ข้อจำกัดของข้อมูล</Typography>
      <Typography as="body1">
        <ol class="space-y-1 list-decimal list-inside">
          <li>
            ตัวอย่างข้อมูลที่รวบรวมมาทั้งหมดนี้ อาจไม่ครบถ้วนครอบคลุมทุก ๆ
            เหตุการณ์ที่เกิดขึ้นในปี 2020
          </li>
          <li>
            การวิเคราะห์ถึงความสัมพันธ์ของข้อมูลแต่ละชุด ถือเป็นมุมมองของ ELECT
            ซึ่งผู้อื่นอาจมีความคิดเห็นที่แตกต่างกันได้
          </li>
          <li>
            ทุกคนสามารถมีส่วนร่วมในการ Update ข้อมูล หรือ Check
            ความถูกต้องของข้อมูลในงานนี้ได้
            โดยสามารถแจ้ง/ส่งข้อมูลเพิ่มเติมมาได้ที่ contact@elect.in.th หรือ
            inbox มาที่ fb.com/electinth
          </li>
        </ol>
      </Typography>
    </div>

    <div class="space-y-4 md:space-y-6">
      <Typography as="h2" bold>อาสาสมัครร่วมพัฒนา</Typography>
      <div class="space-y-2">
        <Typography as="body1" bold>เขียนโปรแกรม 👩‍💻</Typography>
        <Typography as="body1">
          <LinkExternal href="https://github.com/Th1nkK1D"
            >Th1nkK1D</LinkExternal
          >,
          <LinkExternal href="https://github.com/thasarito"
            >thasarito</LinkExternal
          >,
          <LinkExternal href="https://github.com/puripant"
            >puripant</LinkExternal
          >, <LinkExternal href="https://github.com/rapee">rapee</LinkExternal>
        </Typography>
      </div>
      <div class="space-y-2">
        <Typography as="body1" bold>ออกแบบ 👩‍🎨</Typography>
        <Typography as="body1">
          <LinkExternal href="https://www.instagram.com/namsaisupavong/"
            >น้ำใส ศุภวงศ์</LinkExternal
          >
        </Typography>
      </div>
      <div class="space-y-2">
        <Typography as="body1" bold>สืบค้นและรวบรวมข้อมูล 🕵️‍♀️</Typography>
        <Typography as="body1">
          ศุภิสรา อิศรานุกูล, สิทธิกานต์ ธีระวัฒนชัย
        </Typography>
      </div>
      <div class="space-y-2">
        <Typography as="body1" bold>บรรณาธิการ 👩‍🍳</Typography>
        <Typography as="body1">ธนิสรา เรืองเดช</Typography>
      </div>
      <div class="space-y-2">
        <Typography as="body1" bold>ประสานงานและจัดการอื่น ๆ 🧙‍♀️</Typography>
        <Typography as="body1">
          <LinkExternal href="https://punchup.world/">Punch Up</LinkExternal>,
          <LinkExternal href="https://www.boonmeelab.com/"
            >Boonmee Lab</LinkExternal
          >, <LinkExternal href="https://ilaw.or.th/">iLaw</LinkExternal>
        </Typography>
      </div>
    </div>

    <div class="space-y-4 md:space-y-6">
      <Typography as="h2" bold>ร่วมพัฒนาโครงการ</Typography>
      <Typography as="body1" indented>
        ตรวจสอบ ติดตาม และร่วมพัฒนาโปรเจ็กท์ได้ทาง Github
        โค้ดบนเว็บไซต์ทั้งหมดถูกเปิดเผยแบบสาธารณะเพื่อความโปร่งใสในการดำเนินการและพัฒนา
        และร่วมเป็นส่วนหนึ่งในการพัฒนา Civil Tech ในประเทศไทย
        หากคุณต้องการแบ่งปันทักษะด้านพัฒนาระบบ ออกแบบ รวบรวมข้อมูล
        หรือแบ่งปันข้อมูล รวมทั้งความช่วยเหลือด้านอื่น ๆ สามารถติดต่อได้ที่
        contact [at] elect.in.th
      </Typography>
    </div>

    <Sharer />
  </div>
</div>
