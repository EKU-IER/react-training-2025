export function searchByEachProperty(rows, search) {
  const array = Array.isArray(rows) ? rows : [];

  return array.filter((row) => {
    const keys = Object.keys(row);

    for (const key of keys) {
      const value = row[key];

      if (String(value).toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    }

    return false;
  });
}
