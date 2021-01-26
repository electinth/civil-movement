import type MovementRawDataArray from '../assets/data/event_all.csv';

export type TData = { x: Date; y: number };

export default function formatMovementData(
  movements: typeof MovementRawDataArray
): TData[] {
  const date = movements.map(({ date }) => date);

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
  data.sort((a, b) => a.x.getTime() - b.x.getTime());

  return data;
}
