import dsv from '@rollup/plugin-dsv';

export const parseCsv = () =>
  dsv({
    processRow: (row) => {
      Object.keys(row).forEach((key) => {
        const value = row[key];
        row[key] = isNaN(+value) ? value.trim() : +value;
      });
    },
  });
