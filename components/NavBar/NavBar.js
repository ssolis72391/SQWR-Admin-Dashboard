import { useTranslation } from 'next-i18next';
import LanguageDropdown from '../shared/LanguageDropdown';
import H1 from '../shared/H1';
import ClientLogo from '../SVG/clientlogo';
import MobileNav from './MobileNav';

export default function NavBar({ title, subtitle, search, active }) {
  const { t } = useTranslation('menu');
  return (
    <>
      <div className="flex justify-between items-center flex-row">
        <div>
          <H1>{title}</H1>
          <p className="mt-2 text-xs lg:text-base hidden lg:block">
            {subtitle}
          </p>
        </div>
        {search && (
          <div className="relative  xl:block hidden">
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 mr-6">
              <button type="submit" className="p-1 text-grey-light">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              className="py-6 text-sm text-white placeholder-veryLight rounded-xl bg-grey-middle  pl-8 pr-10 border-0  2xl:w-96"
              placeholder={t('Search here...')}
              autoComplete="off"
            />
          </div>
        )}
        <div className="flex flex-row items-center gap-4">
          <LanguageDropdown items={['Deutsch', 'English']} />

          <MobileNav active={active} />
          <div className="hidden lg:block">
            <ClientLogo />
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs block lg:hidden w-2/3">{subtitle}</p>
      {search && (
        <div className="relative  block xl:hidden mt-4 ">
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 mr-6">
            <button type="submit" className="p-1 text-grey-light">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-3 text-xs text-white placeholder-veryLight rounded-md bg-grey-middle  pl-8 pr-10 w-full border-0"
            placeholder={t('Search here...')}
            autoComplete="off"
          />
        </div>
      )}
    </>
  );
}
