import React from "react";
import TableRender from "./TableStatsRender";
import { FlavanoidsStatsTableProps, calculateClassData } from "./utils";

const FlavanoidsStatsTable: React.FC<FlavanoidsStatsTableProps> = ({
  wineData,
}) => {
  const flavanoidsData = calculateClassData(wineData, "flavanoid");
  const gammaData = calculateClassData(wineData, "gamma");

  console.log("flavanoidsData=", flavanoidsData);
  console.log("gammaData=", gammaData);
  return (
    <div className="App">
      <div>
        <h2>Flavanoids Table</h2>
        <TableRender data={flavanoidsData} tableType="Flavanoids" />

        <h2>Gamma Table</h2>
        <TableRender data={gammaData} tableType="Gamma" />
      </div>
    </div>
  );
};

export default FlavanoidsStatsTable;
