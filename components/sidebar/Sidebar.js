import { useTranslation } from 'next-i18next';
import LogoDesktop from '../SVG/LogoDesktop';
import Menu from './menu/Menu';

export default function Sidebar({ active }) {
  const { t } = useTranslation('menu');
  return (
    <aside className="pl-5 pt-5 pb-5 h-screen hidden lg:block">
      <div
        style={{
          background:
            'linear-gradient(121.56deg, #1F1E26 8.05%, #1F1E26 82.51%)',
        }}
        className="h-full w-80 border-1 border-grey-light rounded-3xl flex justify-between  flex-col"
      >
        <div>
          <div className="mt-12 flex justify-center">
            <LogoDesktop />
          </div>
          <Menu active={active} />
        </div>

        <div className="mx-10 mb-20">
          <div className="text-white font-semibold text-sm">
            {t('thesquareware Dashboard')}
          </div>
          <div className="text-grey-veryLight text-xs mt-4">
            {t('© 2021 All Rights Reserved')}
          </div>
          <div className="text-grey-veryLight text-xs mt-8">
            {t('Made with ❤️ in Bonn & Bangalore.')}
          </div>
        </div>
      </div>
    </aside>
  );
}
