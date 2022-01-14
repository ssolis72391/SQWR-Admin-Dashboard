import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getSession, useSession } from 'next-auth/client';
import config from '../config';
import StatCard from '../components/dashboard/StatCard';
import RoundedStackedBars from '../components/CustomCharts/RoundedStackedBars';
import DoughnutChart from '../components/CustomCharts/Donut';
import DonutLabel from '../components/CustomCharts/DonutLabel';
import InsideLayout from '../components/layout/InsideLayout';
import { useEffect } from 'react';
import SquareLoader from 'react-spinners/SquareLoader';
const data = [
  {
    labels: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7'],
    datasets: [
      {
        label: 'Talents',
        data: [33, 53, 85, 41, 490, 65, 91],
        lineTension: 0.4,
        fill: false,
        borderWidth: undefined,
        borderColor: '#FFD500',
      },
    ],
  },
  {
    labels: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7'],
    datasets: [
      {
        label: 'Scouts',
        data: [33, 53, 85, 41, -12, 65, 91],
        lineTension: 0.4,
        fill: false,
        borderWidth: undefined,
        borderColor: '#FF5B5B',
      },
    ],
  },
  {
    labels: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7'],
    datasets: [
      {
        label: 'Talouts',
        data: [33, 53, 85, 41, 490, 65, 91],
        lineTension: 0.4,
        fill: false,
        borderWidth: undefined,
        borderColor: config.PRIMARY_COLOR,
      },
    ],
  },
];
const dataMobile = JSON.parse(JSON.stringify(data));
dataMobile[0].datasets[0].borderWidth = 2;
dataMobile[1].datasets[0].borderWidth = 2;
dataMobile[2].datasets[0].borderWidth = 2;
const dataDesktop = JSON.parse(JSON.stringify(data));
dataDesktop[0].datasets[0].borderWidth = 4;
dataDesktop[1].datasets[0].borderWidth = 4;
dataDesktop[2].datasets[0].borderWidth = 4;

export default function Dashboard() {
  const { t } = useTranslation('dashboard');
  return false ? (
    <div className="flex justify-center items-center h-screen w-full">
      <SquareLoader color="#f9013f" loading={false} size={100} />
    </div>
  ) : (
    <InsideLayout
      translation={t}
      page="dashboard"
      title={t('Dashboard')}
      subtitle={t('Welcome to your thesquareware Admin Dashboard')}
    >
      <div className="mt-8 lg:mt-20 3xl:w-9/12">
        <div
          className="hidden 2xl:flex w-full justify-between flex-row  gap-12
          "
        >
          <StatCard
            title="Talents"
            value="27000"
            data={dataDesktop[0]}
            percentage="-2.5"
          />
          <StatCard
            title="Scouts"
            value="27000"
            data={dataDesktop[1]}
            percentage="-2.5"
          />
          <StatCard
            title="Talouts"
            value="27000"
            data={dataDesktop[2]}
            percentage="-2.5"
          />
        </div>
        <div
          className="flex 2xl:hidden w-full justify-between  flex-col
          "
        >
          <StatCard
            title="Recipes"
            value="27000"
            data={dataMobile[0]}
            percentage="-2.5"
          />
          <StatCard
            title="Recipes"
            value="27000"
            data={dataMobile[1]}
            percentage="-2.5"
          />
          <StatCard
            title="Recipes"
            value="27000"
            data={dataMobile[2]}
            percentage="-2.5"
          />
        </div>

        <div className="flex w-full justify-between 2xl:flex-row flex-col mb-8">
          <div className="bg-grey-middle rounded-2xl flex p-5 lg:p-8 flex-1 flex flex-col  2xl:mr-12 mt-8 ">
            <div className="flex justify-between items-center">
              <h2 className="text-xl lg:text-2xl">{t('Users')}</h2>

              <Link href="/users">
                <a className="text-purple font-semibold text-xs lg:text-sm">
                  {t('View more')}
                </a>
              </Link>
            </div>

            <div className="flex flex-row items-center mt-3 mb-12">
              <div className="text-3xl lg:text-5xl text-primary">98,425k</div>
              <div className="ml-10">
                <div className="text-medium text-xs lg:text-base ">+0.4%</div>
                <div className="text-xxs lg:text-xs mt-1">
                  {t('compared to last week')}
                </div>
              </div>
            </div>

            <RoundedStackedBars />
          </div>
          <div className="bg-grey-middle rounded-2xl flex p-5 2xl:p-8 flex-1 flex flex-col  mt-8 ">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl lg:text-2xl">{t('Chart Summary')}</h2>
              <div className="text-purple font-semibold text-xs lg:text-sm">
                {t('Download Report')}
              </div>
            </div>
            <DoughnutChart />
            <div className="flex items-center justify-around lg:justify-between mt-5">
              <DonutLabel label="Talents" value="2343" color="#FFD500" />
              <DonutLabel label="Scouts" value="2343" color="#FF5B5B" />
              <DonutLabel
                label="Talouts"
                value="2343"
                color={config.PRIMARY_COLOR}
              />
            </div>
          </div>
        </div>
      </div>
    </InsideLayout>
  );
}

export async function getServerSideProps(context) {
  const req = context.req;
  // console.log(req);
  // const token = await jwt({ req, secret: process.env.JWT_SECRET });

  // if (!token) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }
  // console.log(token);
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['dashboard', 'menu'])),
      // Will be passed to the page component as props
    },
  };
}
