import { useState } from "react";

import { createColumnDefs } from "./helpers/createColumnDefs";
import { SearchBox } from "./components/SearchBox";
import { usePromise } from "./usePromise";
import GridExample from "./GridExample";
import Wrapper from "./Remote";

const reportsUrl =
  "https://raw.githubusercontent.com/chancellor-w-whitaker/json-example/refs/heads/main/reports.json";

const reportsPromise = fetch(reportsUrl).then((response) => response.json());

// create dropdown filters with a different dataset

// implement search with data page dataset

export default function App() {
  const [search, setSearch] = useState("");

  const reports = usePromise(reportsPromise);

  const columnDefs = createColumnDefs(reports);

  // change rowData passed to grid using search value
  function searchByEachProperty() {
    const array = Array.isArray(reports) ? reports : [];

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

  const filteredReports = searchByEachProperty();

  // filter reports by search
  // search should be based on report descriptions
  // handle empty search differently

  return (
    <Wrapper heading="Search example">
      <SearchBox
        onChange={setSearch}
        label="Quick search"
        value={search}
      ></SearchBox>
      <GridExample
        rowData={filteredReports}
        columnDefs={columnDefs}
      ></GridExample>
    </Wrapper>
  );
}
