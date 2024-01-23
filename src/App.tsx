import React from "react";
import TableRender from "./TableStatsRender";
import {
  calculateGammaStats,
  calculateStatistics,
  FlavanoidsStatsTableProps,
  KeyStatistics,
} from "./utils";

const FlavanoidsStatsTable: React.FC<FlavanoidsStatsTableProps> = ({
  wineData,
}) => {
  wineData = wineData.splice(0, 4);
  console.log("wineData", wineData);
  const result: KeyStatistics[] = [];
  const keys = Object.keys(wineData[0]);

  keys.forEach((key) => {
    const statistics = calculateStatistics(wineData, key);
    if (key !== "Gamma") {
      result.push({
        key,
        statistics,
      });
    }
  });

  const tableKeys = result.map((item) => item.key);
  const means = result.map((item) => item.statistics.mean);
  const medians = result.map((item) => item.statistics.median);
  const modes = result.map((item) => item.statistics.mode);
  const gammaResult = calculateGammaStats(wineData);

  return (
    <>
      <h3>a.</h3>{" "}
      <TableRender
        tableKeys={tableKeys}
        gammaResult={gammaResult}
        means={means}
        medians={medians}
        modes={modes || []}
        toShowGamma={false}
      />
      <h3>b.</h3>{" "}
      <TableRender
        tableKeys={tableKeys}
        gammaResult={gammaResult}
        means={means}
        medians={medians}
        modes={modes || []}
        toShowGamma={true}
      />
      {/* <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#eee" }}>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Measure
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Gamma
            </th>
            {tableKeys.map((key) => (
              <th
                key={key}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Gamma Mean
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              {gammaResult.mean.toFixed(3)}
            </td>
            {means.map((mean, index) => (
              <td
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {mean?.toFixed(3)}
              </td>
            ))}
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Gamma Median
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              {gammaResult.median.toFixed(3)}
            </td>
            {medians.map((median, index) => (
              <td
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {median?.toFixed(3)}
              </td>
            ))}
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Gamma Mode
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
              }}
            >
              {gammaResult.mode.toFixed(3)}
            </td>
            {modes.map((mode, index) => (
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
      </table> */}
    </>
  );
};

export default FlavanoidsStatsTable;

// type WineDataProperty = number;
// interface KeyStatistics {
//   key: string;
//   statistics: Statistics;
// }

// interface WineData {
//   Alcohol?: WineDataProperty;
//   MalicAcid?: WineDataProperty;
//   Ash?: WineDataProperty;
//   "Alcalinity of ash": WineDataProperty;
//   Magnesium: WineDataProperty;
//   "Total phenols": WineDataProperty;
//   Flavanoids: WineDataProperty;
//   "Nonflavanoid phenols": WineDataProperty;
//   Proanthocyanins: WineDataProperty;
//   "Color intensity": WineDataProperty;
//   Hue: WineDataProperty;
//   "OD280/OD315 of diluted wines": WineDataProperty;
//   Unknown: WineDataProperty;
// }

// interface FlavanoidsStatsTableProps {
//   wineData: WineData[];
// }
// interface Statistics {
//   mean: number;
//   median: number;
//   mode: number | null;
// }
