// Define the types for WineDataProperty and KeyStatistics
export type WineDataProperty = number;
export interface KeyStatistics {
  key: string;
  statistics: Statistics;
}

// Function to calculate classwise statistics

export const calculateClassData = (dataset: WineData[], property: String) => {
  // Group data by class
  const groupedData: Record<string, number[]> = {};

  dataset.forEach((item) => {
    const alcoholClass = item.Alcohol.toString();

    // Initialize the array if it doesn't exist
    groupedData[alcoholClass] = groupedData[alcoholClass] || [];

    // Extract the property value using the provided property argument
    groupedData[alcoholClass].push(
      property === "gamma" ? calculateGamma(item) : +item["Flavanoids"]
    );
  });
  console.log("groupedData", groupedData);
  // Calculate statistics for each class (mean, median, mode)
  const statisticsByClass: {
    class: string;
    mean: number;
    median: number;
    mode: number;
  }[] = [];
  for (const alcoholClass in groupedData) {
    const values = groupedData[alcoholClass];
    statisticsByClass.push({
      class: alcoholClass,
      mean: calculateMean(values),
      median: calculateMedian(values),
      mode: calculateMode(values),
    });
  }
  return statisticsByClass;
};

const calculateMean = (values: number[]) => {
  const sum = values.reduce((acc, value) => acc + value, 0);
  return sum / values.length;
};

const calculateMedian = (values: number[]) => {
  const sortedValues = values.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedValues.length / 2);
  if (sortedValues.length % 2 === 0) {
    return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
  } else {
    return sortedValues[middle];
  }
};

const calculateMode = (values: number[]) => {
  const valueCounts: Record<string, number> = values.reduce(
    (acc: any, value) => {
      acc[value.toString()] = (acc[value.toString()] || 0) + 1;
      return acc;
    },
    {}
  );

  let mode: number = 0;
  let maxCount = 0;
  for (const value in valueCounts) {
    if (valueCounts[value] > maxCount) {
      mode = parseFloat(value);
      maxCount = valueCounts[value];
    }
  }

  return mode;
};

const calculateGamma = (item: WineData) => {
  return (+item.Ash * +item.Hue) / +item.Magnesium;
};

// Define the WineData interface with properties related to wine characteristics
export interface WineData {
  Alcohol: number | string;
  "Malic Acid": number | string;
  Ash: number | string;
  "Alcalinity of ash": number | string;
  Magnesium: number | string;
  "Total phenols": number | string;
  Flavanoids: number | string;
  "Nonflavanoid phenols": number | string;
  Proanthocyanins: string;
  "Color intensity": number | string;
  Hue: number | string;
  "OD280/OD315 of diluted wines": number | string;
  Unknown: number | string;
}

// Define the FlavanoidsStatsTableProps interface
export interface FlavanoidsStatsTableProps {
  wineData: WineData[];
}

// Define the Statistics interface with mean, median, and mode properties
export interface Statistics {
  mean: number;
  median: number;
  mode: number | null;
}

// Function to calculate statistics for a specific key in the wine data
export function calculateStatistics(
  wineData: WineData[],
  key: string
): Statistics {
  const values = wineData.map((obj: any) =>
    obj[key] === "" ? 0 : parseFloat(obj[key])
  );

  return {
    mean: calculateMean(values),
    median: calculateMedian(values),
    mode: calculateMode(values),
  };
}

// Function to calculate gamma statistics for specific properties in the wine data
export function calculateGammaStats(
  wineData: WineData[]
): Record<string, number> {
  // Calculate Gamma for each data point and store it in a new property 'Gamma'
  wineData.forEach((point: any) => {
    const ash = point.Ash ? Number(point.Ash) : 0;
    const hue = point.Hue ? Number(point.Hue) : 0;
    const magnesium = point.Magnesium ? Number(point.Magnesium) : 0;
    point.Gamma = (ash * hue) / magnesium;
  });

  // Extract Gamma values and calculate mean, median, and mode
  const gammaValues = wineData.map((point: any) => point.Gamma);
  const gammaStats: Record<string, number> = {
    mean: calculateMean(gammaValues),
    median: calculateMedian(gammaValues),
    mode: calculateMode(gammaValues),
  };

  return gammaStats;
}
