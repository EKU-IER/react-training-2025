import { useMemo } from "react";

import { createColumnDefs } from "./helpers/createColumnDefs";
import { getUniqueValues } from "./helpers/getUniqueValues";
import { usePromise } from "./usePromise";
import GridExample from "./GridExample";
import { url } from "./constants/url";
import Wrapper from "./Remote";

function App() {
  const rowData = usePromise(promise);

  const uniqueValues = useMemo(() => getUniqueValues(rowData), [rowData]);

  console.log("Unique values", uniqueValues);

  const columnDefs = createColumnDefs(rowData);

  // get every unique value of each column in rows

  // console.log("Columns", columnDefs);

  return (
    <Wrapper heading="Factbook summer data">
      <GridExample columnDefs={columnDefs} rowData={rowData}></GridExample>
    </Wrapper>
  );
}

const numericColumns = [
  "FTE_Basic",
  "FTE_CPE",
  "FTE_IPEDS",
  "FTE_Moodys",
  "total",
];

const promise = fetch(url).then((response) => response.json());

export default App;
