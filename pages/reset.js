import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Show from '../components/SVG/Auth/Show';
import Hide from '../components/SVG/Auth/Hide';
import OutsideLayout from '../components/layout/OutsideLayout';

export default function newPassword() {
  const [passwordError, setPasswordError] = useState(false);

  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  const { t } = useTranslation('reset');
  return (
    <OutsideLayout>
      <div className="w-full xl:w-7/12 xl:h-full h-3/5 bg-white px-5 xl:px-40 xl:pt-48">
        <form className="w-full xl:max-w-xl" onSubmit={handleSubmit}>
          <h1 className="text-5xl xl:block hidden">{t('Reset Password')}</h1>

          <label htmlFor="password" className="lg:mt-32 mt-5 block">
            {t('Password')}
          </label>
          <div className="relative mt-4">
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 mr-3">
              <button
                type="submit"
                className="p-1 text-grey-light"
                onClick={toggleVisibility}
              >
                {visibility ? <Show /> : <Hide />}
              </button>
            </span>
            <input
              type={visibility ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder={t('Password')}
              className=" py-3 lg:py-5 lg:px-6 text-lg lg:text-sm text-grey-dark placeholder-veryLight  bg-primary bg-opacity-20 rounded-2xl w-full border-1 border-primary"
            />
          </div>
          <div
            className={`text-red text-xs invisible ${
              passwordError ? 'visible' : 'invisible'
            }`}
          >
            {t('Type your password')}
          </div>
          <label htmlFor="password" className="mt-5 block">
            {t('Repeat Password')}
          </label>
          <div className="relative mt-4">
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 mr-3">
              <button
                type="submit"
                className="p-1 text-grey-light"
                onClick={toggleVisibility}
              >
                {visibility ? <Show /> : <Hide />}
              </button>
            </span>
            <input
              type={visibility ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder={t('Repeat Password')}
              className=" py-3 lg:py-5 lg:px-6 text-lg lg:text-sm text-grey-dark placeholder-veryLight  bg-primary bg-opacity-20 rounded-2xl w-full border-1 border-primary"
            />
          </div>
          <div
            className={`text-red text-xs invisible ${
              passwordError ? 'visible' : 'invisible'
            }`}
          >
            {t('Repeat your password')}
          </div>
          <div className="w-full flex justify-between items-center mt-10 pb-5 xl:pb-0 xl:mt-14 xl:flex-row flex-col">
            <button
              type="submit"
              className="rounded-2xl bg-black text-white py-4 xl:py-5 px-24 text-lg font-semibold w-full xl:w-auto"
            >
              {t('Save & Login')}
            </button>
            <></>
          </div>
        </form>
      </div>
    </OutsideLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['reset'])),
      // Will be passed to the page component as props
    },
  };
}
