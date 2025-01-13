import GridExample from "./GridExample";
import Wrapper from "./Remote";
import { usePromise } from "./usePromise";

const reportsUrl =
  "https://raw.githubusercontent.com/chancellor-w-whitaker/json-example/refs/heads/main/reports.json";

const reportsPromise = fetch(reportsUrl).then((response) => response.json());

export default function App() {
  const reports = usePromise(reportsPromise);

  const firstReport = Array.isArray(reports) ? reports[0] : {};

  const fields = Object.keys(firstReport);

  // fields
  // ["field1", "field2", ..., "fieldX"]

  const columnDefs = fields.map((field) => ({ field }));

  // make table
  // components: functions that return markup (html), parameters could be anything
  // find table library: search google (ag grid)

  return (
    <Wrapper>
      <GridExample rowData={reports} columnDefs={columnDefs}></GridExample>
    </Wrapper>
  );
}
