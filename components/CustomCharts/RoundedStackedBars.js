import React, { Component } from 'react';

import Chart from 'chart.js/auto';
import RoundedBars from './RoundedBars.js';
import config from '../../config.js';

class RoundedStackedBars extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'This Week',
            backgroundColor: config.PRIMARY_COLOR_15,
            hoverBackgroundColor: config.PRIMARY_COLOR,
            data: [20, 50, 20, 45, 12, 45, 21],
            stack: 1,
            name: 'AMR'
          },
          {
            label: 'Last Week',
            backgroundColor: config.PRIMARY_COLOR_5,
            hoverBackgroundColor: config.PRIMARY_COLOR,
            data: [40, 50, 20, 45, 49, 65, 91],
            stack: 1
          }
        ]
      },

      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            id: 'xAxis1',
            type: 'category',
            ticks: {
              display: true,
              fontSize: 14,
              color: '#A3A3A3'
            },
            grid: { display: false }
          },
          y: {
            stacked: true,
            ticks: {
              display: false
            },
            grid: { display: false, borderWidth: 0 }
          }
        }
      }
    };
  }
  componentDidMount() {
    Chart.register(RoundedBars);
    var ctx = document.getElementById('roundedBars').getContext('2d');
    new Chart(ctx, {
      type: 'roundedBars',
      data: this.state.data,
      options: this.state.options
    });
  }

  render() {
    return (
      <div>
        <canvas id="roundedBars" width="100%" height="250"></canvas>
      </div>
    );
  }
}

export default RoundedStackedBars;
