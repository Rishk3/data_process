import React from "react";
import TableRender from "./TableStatsRender";
import { FlavanoidsStatsTableProps, calculateClassData } from "./utils";

const FlavanoidsStatsTable: React.FC<FlavanoidsStatsTableProps> = ({
  wineData,
}) => {
  const flavanoidsData = calculateClassData(wineData, "flavanoid");
  const gammaData = calculateClassData(wineData, "gamma");
  return (
    <div className="App">
      <div>
        <h2>Flavanoids Table-a</h2>
        <TableRender calculatedData={flavanoidsData} type="Flavanoids" />

        <h2>Gamma Table-b</h2>
        <TableRender calculatedData={gammaData} type="Gamma" />
      </div>
    </div>
  );
};

export default FlavanoidsStatsTable;
