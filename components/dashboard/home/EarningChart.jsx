import dynamic from "next/dynamic";
import { useState } from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const EarningChart = (props) => {
  const [state, setState] = useState({
    options: {
      colors: ["#1FAA5C"],
      dataLabels: {
        enabled: false,
      },
      chart: {
        type: "area",
        height: 230,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      xaxis: {
        axisTicks: {
          show: true,
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      },
      yaxis: {
        show: true,
        opposite: false,
        labels: {
          formatter: function (value) {
            return "$" + value;
          },
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        colors: ["#1FAA5C"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
      markers: {
        hover: {
          size: 8,
          strokeWidth: 4,
          colors: ["#ffffff"],
          strokeColors: ["#51CCA9"],
        },
      },
      legend: {
        horizontalAlign: "left",
      },
    },
    series: [
      {
        name: "Earned",
        data: [6000, 5500, 4800, 2600, 2000, 1500, 1800, 2200, 2800, 600, 1000, 1600],
      },
    ],
  });

  return (
    <ApexCharts options={state.options} series={state.series} type="area" />
  );
};

export default EarningChart;
