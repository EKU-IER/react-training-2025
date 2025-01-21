export function createColumnDefs(rows) {
  const firstRow = Array.isArray(rows) ? rows[0] : {};

  const fields = Object.keys(firstRow);

  return fields.map((field) => ({ field }));
}
