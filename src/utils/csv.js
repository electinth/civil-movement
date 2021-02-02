import dsv from '@rollup/plugin-dsv';

const parseThaiDate = (str) => {
  const dmy = str.split('-');
  return new Date(+dmy[2] - 543, +dmy[1] - 1, +dmy[0]);
};

const parseArrayOfNumber = (str) => str.split(',').map((topic) => +topic);

export const parseCsv = () =>
  dsv({
    processRow: (row) => {
      Object.keys(row).forEach((key) => {
        const value = row[key];
        row[key] =
          key === 'date'
            ? parseThaiDate(value)
            : key === 'key_topic'
            ? parseArrayOfNumber(value)
            : isNaN(+value)
            ? value.trim()
            : +value;
      });
    },
  });
