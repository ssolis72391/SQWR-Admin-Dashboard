import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Table from '../components/users/Table';
import Dropdown from '../components/shared/Dropdown';
import Download from '../components/SVG/UserTable/Download';
import OptionButton from '../components/shared/OptionButton';
import Pagination from '../components/users/Pagination';
import DownloadMobile from '../components/SVG/UserTable/DownloadMobile';
import InsideLayout from '../components/layout/InsideLayout';

export default function Users() {
  const [allUsers, setAllUsers] = useState(false);
  const [verification, setVerification] = useState(false);
  const [sortByNewest, setSortByNewest] = useState(true);
  const { t } = useTranslation('users');

  return (
    <InsideLayout
      translation={t}
      page="users"
      title={t('Users')}
      subtitle={t('See all your users')}
      search
    >
      <div className="md:mt-8 mt-6 lg:mt-9 3xl:w-full">
        <div className="flex justify-between items-center pb-6 md:pb-8">
          <div className="flex gap-4">
            <OptionButton
              onClick={() => setAllUsers(prevState => !prevState)}
              active={allUsers}
            >
              {t('All Users')}
            </OptionButton>
            <OptionButton
              active={verification}
              onClick={() => setVerification(prevState => !prevState)}
            >
              {t('Pending Verification')}
            </OptionButton>
          </div>
          <div className="flex ml-4 lg:ml-0 lg:gap-10 items-center">
            <Dropdown
              title={sortByNewest ? t('Newest') : t('Oldest')}
              items={[t('Oldest'), t('Newest')]}
              setItem={item => {
                if (item === t('Newest')) {
                  setSortByNewest(true);
                } else {
                  setSortByNewest(false);
                }
              }}
              mobileHidden
            />
            <div className="p-3 lg:p-4 rounded-lg lg:rounded-2xl bg-grey-light hover:bg-opacity-20 hover:bg-primary">
              <div className="hidden lg:block">
                <Download />
              </div>
              <div className="block lg:hidden">
                <DownloadMobile />
              </div>
            </div>
          </div>
        </div>
        <Table />
        <div className="flex justify-between items-center mb-8 mt-10">
          <div className="md:block hidden" />
          <div className="md:text-sm text-xxs">Showing 1 to 5 of 256 Users</div>
          <Pagination active={1} pages={3} />
        </div>
      </div>
    </InsideLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['users', 'menu'])),
      // Will be passed to the page component as props
    },
  };
}
