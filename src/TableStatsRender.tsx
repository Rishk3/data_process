import React from "react";
import { WineData } from "./utils";
import "./App.css";

interface TableRenderProps {
  tableKeys: string[];
  gammaResult: Record<string, number>;
  means: number[];
  medians: number[];
  modes: any;
  toShowGamma: boolean;
}
const TableRender: React.FC<TableRenderProps> = ({
  tableKeys,
  gammaResult,
  means,
  medians,
  modes,
  toShowGamma,
}) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr style={{ backgroundColor: "#eee" }}>
          <th className="tb_row">Measure</th>
          {toShowGamma && <th className="tb_row">Gamma</th>}
          {tableKeys.map((key) => (
            <th key={key} className="tb_row">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {toShowGamma ? (
            <>
              <td className="tb_row">Gamma Mean</td>
              <td className="tb_row">{gammaResult.mean.toFixed(3)}</td>
            </>
          ) : (
            <>
              <td className="tb_row">Flavanoids Mean</td>
            </>
          )}

          {means.map((mean, index) => (
            <td key={index} className="tb_row">
              {mean?.toFixed(3)}
            </td>
          ))}
        </tr>
        <tr>
          {toShowGamma ? (
            <>
              <td className="tb_row">Gamma Median</td>
              <td className="tb_row">{gammaResult.median.toFixed(3)}</td>
            </>
          ) : (
            <>
              <td className="tb_row">Flavanoids Median</td>
            </>
          )}

          {medians.map((median, index) => (
            <td key={index} className="tb_row">
              {median?.toFixed(3)}
            </td>
          ))}
        </tr>
        <tr>
          {toShowGamma ? (
            <>
              <td className="tb_row">Gamma Mode</td>
              <td className="tb_row">{gammaResult.mode.toFixed(3)}</td>
            </>
          ) : (
            <>
              <td className="tb_row">Flavanoids mode</td>
            </>
          )}

          {modes &&
            modes.map((mode: number, index: number) => (
              <td
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {mode?.toFixed(3)}
              </td>
            ))}
        </tr>
      </tbody>
    </table>
  );
};
export default TableRender;
