import React from "react";
import "./App.css";

interface Props {
  calculatedData: {
    class: string;
    mean: number;
    median: number;
    mode: number;
  }[];
  type: string;
}
const TableRender = ({ calculatedData, type }: Props) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr style={{ backgroundColor: "#eee" }}>
          <th>Measure</th>
          {calculatedData.map(({ class: alcoholClass }) => (
            <th key={alcoholClass}>{`Class ${alcoholClass}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`${type} Mean`}</td>
          {calculatedData.map(({ mean }) => (
            <td key={mean}>{mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>{`${type} Median`}</td>
          {calculatedData.map(({ median }) => (
            <td key={median}>{median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>{`${type} Mode`}</td>
          {calculatedData.map(({ mode }) => (
            <td key={mode}>{mode.toFixed(3)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
export default TableRender;
