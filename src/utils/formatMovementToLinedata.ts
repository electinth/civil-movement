import * as d3 from 'd3';

import type MovementRawDataArray from '../assets/data/event_all.csv';

export type TData = { x: Date; y: number };

export default function formatMovementData(
  movements: typeof MovementRawDataArray
): TData[] {
  const date = movements.map(({ date }) => date);
  const dateExtent = d3.extent(date) as [Date, Date];
  const dateSet = new Set(date);
  const missing = Array.from(
    new Set(d3.timeDay.range(...dateExtent).filter((d) => !dateSet.has(d)))
  ).map((d) => ({ x: d, y: 0 }));

  const count: { [key: string]: TData } = date.reduce((counter, date) => {
    const strdate = date.toString();
    if (typeof counter[strdate] === 'undefined') {
      counter[strdate] = { x: date, y: 1 };
    } else {
      counter[strdate].y += 1;
    }

    return counter;
  }, {});
  const data = [...Object.values(count), ...missing];
  data.sort((a, b) => a.x.getTime() - b.x.getTime());

  return data;
}
