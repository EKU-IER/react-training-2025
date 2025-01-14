import { useState, useId } from "react";

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

  // filter reports by search
  // search should be based on report descriptions
  // handle empty search differently

  return (
    <Wrapper heading={"Search example"}>
      <SearchBox
        onChange={setSearch}
        label="Description"
        value={search}
      ></SearchBox>
      <GridExample columnDefs={columnDefs} rowData={reports}></GridExample>
    </Wrapper>
  );
}

function SearchBox({
  placeholder = "Placeholder",
  label = "Label",
  type = "text",
  value = "",
  onChange,
}) {
  const id = useId();

  const handleChange = (e) => onChange(e.target.value);

  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="form-control"
        onChange={handleChange}
        value={value}
        type={type}
        id={id}
      />
    </div>
  );
}

function createColumnDefs(rows) {
  const firstRow = Array.isArray(rows) ? rows[0] : {};

  const fields = Object.keys(firstRow);

  return fields.map((field) => ({ field }));
}
