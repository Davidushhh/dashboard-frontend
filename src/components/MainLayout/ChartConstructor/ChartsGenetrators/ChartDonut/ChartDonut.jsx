import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Box } from "@mui/material";

export const ChartDonut = ({ chartConfig, filter }) => {
  const [currentSeries, setCurrentSeries] = useState([]);

  useEffect(() => {
    if (chartConfig?.series) {
      setCurrentSeries(chartConfig.series);
    }
    if (chartConfig?.data) {
      let newSeries = chartConfig.data;

      for (const elem of filter) {
        if (newSeries) {
          if (elem === "") {
            newSeries = newSeries[Object.keys(newSeries)[0]];
          } else {
            newSeries = newSeries[elem];
          }
        }
      }

      setCurrentSeries(newSeries);
    }
  }, [chartConfig, filter]);

  if (!chartConfig.options) {
    return <div>no data</div>;
  }
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "rgb(237, 231, 246, 0.3)",
        borderRadius: "12px",
        padding: "12px",
      }}
    >
      {Array.isArray(currentSeries) && (
        <Chart
          style={{
            backgroundColor: "transparent",
          }}
          options={chartConfig.options}
          series={currentSeries}
          type={chartConfig.type}
          height={"100%"}
        />
      )}
    </Box>
  );
};