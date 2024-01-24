import React from "react";
import "./App.css";

interface Props {
  data: {
    class: string;
    mean: number;
    median: number;
    mode: number;
  }[];
  tableType: string;
}
const TableRender = ({ data, tableType }: Props) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr style={{ backgroundColor: "#eee" }}>
          <th>Measure</th>
          {data.map(({ class: alcoholClass }) => (
            <th key={alcoholClass}>{`Class ${alcoholClass}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`${tableType} Mean`}</td>
          {data.map(({ mean }) => (
            <td key={mean}>{mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>{`${tableType} Median`}</td>
          {data.map(({ median }) => (
            <td key={median}>{median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>{`${tableType} Mode`}</td>
          {data.map(({ mode }) => (
            <td key={mode}>{mode.toFixed(3)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
export default TableRender;
