/* eslint-disable react/jsx-one-expression-per-line */
import { Line } from 'react-chartjs-2';

export default function StatCard({ title, percentage, value, data }) {
  const options = {
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-grey-middle rounded-2xl flex  p-5 lg:p-8 items-center flex-1 flex justify-between mt-5 2xl:mt-0">
      <div className="mr-8">
        <div className="flex flex-row items-center">
          <div className="text-lg lg:text-sm">{title}</div>
          <div
            className={`${
              percentage >= 0 ? 'text-green ' : 'text-red'
            } text-xs font-medium block 2xl:hidden ml-5`}
          >
            {percentage}%
          </div>
        </div>

        <div className="font-normal mt-3 lg:mt-0 lg:font-semibold text-3xl">
          {value}
        </div>
        <div
          className={`${
            percentage >= 0 ? 'text-green ' : 'text-red'
          } text-lg font-medium mt-8 hidden 2xl:block`}
        >
          {percentage}%
        </div>
      </div>

      <div className="w-24 xxs:w-28 h-16  lg:h-24 lg:w-24">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
