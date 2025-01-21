import { AgGridReact } from "ag-grid-react"; // React Data Grid Component

export default function GridExample({ columnDefs, rowData }) {
  return (
    <div
      // define a height because the Data Grid will fill the size of the parent container
      style={{ height: 500 }}
    >
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
}
