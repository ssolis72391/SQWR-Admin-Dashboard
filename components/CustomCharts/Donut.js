import React, { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import config from '../../config.js';

const data = {
  labels: ['Customer', 'Food Blogger', 'Recipes'], // labels for legend
  datasets: [
    {
      data: [20, 15, 5, 0], // use 0 as last value
      backgroundColor: ['#FFD500', '#FF5B5B', config.PRIMARY_COLOR, '#FFD500'],
      hoverBackgroundColor: [
        '#FFD500',
        '#FF5B5B',
        config.PRIMARY_COLOR,
        '#FFD500',
      ],
      borderWidth: 0,
    },
  ],
};

const labels = ['-0.5%', '+0.4%', '+2.5%']; // data labels for each section

export default function DoughnutChart() {
  const donut = useRef(null);

  const chartJsOptions = {
    maintainAspectRatio: false,
    rotation: -10,
    layout: {
      padding: 10,
    },
    cutout: 75,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: true,
        font: {
          size: 18,
        },
        color: 'white',
        anchor: 'end',
        align: 'end',
        offset: 10,
        formatter: function (value, context) {
          if (value !== 0) return `${labels[context.dataIndex]}`;
          else return '';
        },
      },
    },
  };
  let roundedEnd = {
    // @ts-ignore
    afterUpdate: function (chart) {
      var a = chart.config._config.data.datasets.length - 1;
      for (let i in chart.config._config.data.datasets) {
        for (
          var j = chart.config._config.data.datasets[i].data.length - 1;
          j >= 0;
          --j
        ) {
          if (j === chart.config._config.data.datasets[i].data.length - 1)
            continue;
          var arc = chart.getDatasetMeta(i).data[j];
          arc.round = {
            x: (chart.chartArea.left + chart.chartArea.right) / 2,
            y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
            radius:
              chart.innerRadius +
              chart.radiusLength / 2 +
              a * chart.radiusLength,
            thickness: (chart.radiusLength / 2 - 1) * 2.5,
            backgroundColor: arc.options.backgroundColor,
          };
        }
        a--;
      }
    },
    afterDraw: function (chart) {
      var ctx = chart.ctx;
      for (let i in chart.config._config.data.datasets) {
        for (
          var j = chart.config._config.data.datasets[i].data.length - 1;
          j >= 0;
          --j
        ) {
          if (
            Number(j) ===
            chart.config._config.data.datasets[i].data.length - 1
          )
            continue;
          var arc = chart.getDatasetMeta(i).data[j];
          var endAngle = Math.PI / 2 - arc.endAngle;

          ctx.save();
          ctx.translate(arc.round.x, arc.round.y);
          ctx.fillStyle = arc.round.backgroundColor;
          ctx.beginPath();
          ctx.arc(
            ((arc.outerRadius + arc.innerRadius) * Math.sin(endAngle)) / 2,
            ((arc.outerRadius + arc.innerRadius) * Math.cos(endAngle)) / 2,
            (arc.outerRadius - arc.innerRadius) / 2,
            0,
            2 * Math.PI
          );
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }
    },
  };

  return (
    <div className="card w-full h-64 2xl:h-full ">
      <Doughnut
        ref={donut}
        data={data}
        options={chartJsOptions}
        plugins={[roundedEnd, ChartDataLabels]}
      />
    </div>
  );
}
