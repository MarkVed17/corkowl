import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const SalesChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ["", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
          datasets: [
            {
              //   label: "sales",
              data: [1000, 5000, 7000, 5000, 9000, 8345, 10000, 50000],
              borderColor: ["rgba(47, 202, 114, 1)"],
              borderWidth: 2,
            },
          ],
        }}
        height={300}
        width={710}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export { SalesChart };
