export function getUniqueValues(rowData) {
  const lists = {};

  const rows = Array.isArray(rowData) ? rowData : [];

  rows.forEach((row) => {
    const columns = Object.keys(row);

    columns.forEach((column) => {
      if (!(column in lists)) lists[column] = new Set();

      const value = row[column];

      lists[column].add(value);
    });
  });

  const uniqueValues = Object.fromEntries(
    Object.entries(lists).map(([column, set]) => [
      column,
      { array: [...set].sort(), set },
    ])
  );

  return uniqueValues;
}
