export type WineDataProperty = number;
export interface KeyStatistics {
  key: string;
  statistics: Statistics;
}

export interface WineData {
  Alcohol?: WineDataProperty;
  MalicAcid?: WineDataProperty;
  Ash?: WineDataProperty;
  "Alcalinity of ash": WineDataProperty;
  Magnesium: WineDataProperty;
  "Total phenols": WineDataProperty;
  Flavanoids: WineDataProperty;
  "Nonflavanoid phenols": WineDataProperty;
  Proanthocyanins: WineDataProperty;
  "Color intensity": WineDataProperty;
  Hue: WineDataProperty;
  "OD280/OD315 of diluted wines": WineDataProperty;
  Unknown: WineDataProperty;
}

export interface FlavanoidsStatsTableProps {
  wineData: WineData[];
}
export interface Statistics {
  mean: number;
  median: number;
  mode: number | null;
}

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

export function calculateGammaStats(
  wineData: WineData[]
): Record<string, number> {
  wineData.forEach((point: any) => {
    const ash = point.Ash ? Number(point.Ash) : 0;
    const hue = point.Hue ? Number(point.Hue) : 0;
    const magnesium = point.Magnesium ? Number(point.Magnesium) : 0;
    point.Gamma = (ash * hue) / magnesium;
  });

  const gammaValues = wineData.map((point: any) => point.Gamma);
  const gammaStats: Record<string, number> = {
    mean: calculateMean(gammaValues),
    median: calculateMedian(gammaValues),
    mode: calculateMode(gammaValues),
  };

  return gammaStats;
}

export function calculateMean(values: number[]): number {
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

export function calculateMedian(values: number[]): number {
  values.sort((a, b) => a - b);
  const mid = Math.floor(values.length / 2);
  return values.length % 2 === 0
    ? (values[mid - 1] + values[mid]) / 2
    : values[mid];
}

export function calculateMode(values: number[]): number {
  const counts: Record<number, number> = {};
  let mode = values[0];
  let maxCount = 0;

  values.forEach((val) => {
    if (!counts[val]) {
      counts[val] = 1;
    } else {
      counts[val]++;
    }

    if (counts[val] > maxCount) {
      mode = val;
      maxCount = counts[val];
    }
  });

  return mode;
}
