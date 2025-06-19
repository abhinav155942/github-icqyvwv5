
import * as React from "react";
import type { ChartConfig } from "./types";

export interface ChartContextProps {
  config: ChartConfig;
}

export const ChartContext = React.createContext<ChartContextProps | null>(null);

export function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

