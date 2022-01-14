import { useState } from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import OutsideLayout from '../components/layout/OutsideLayout';

export default function Forgot() {
  const [emailError, setEmailError] = useState(false);

  const { t } = useTranslation('forgot');
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <OutsideLayout>
      <div className="w-full xl:w-7/12 xl:h-full h-3/5 bg-white px-5 xl:px-40 xl:pt-48">
        <form className="w-full xl:max-w-xl" onSubmit={handleSubmit}>
          <h1 className="text-5xl xl:block hidden">{t('Reset Password')}</h1>
          <label htmlFor="email" className="lg:mt-32 mt-5 block">
            {t('Email')}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="mt-4 py-3 lg:py-5 lg:px-6 text-lg lg:text-sm text-grey-dark placeholder-veryLight  bg-primary bg-opacity-20 rounded-2xl w-full border-1 border-primary"
          />
          <div
            className={`text-red text-xs invisible ${
              emailError ? 'visible' : 'invisible'
            }`}
          >
            {t('Type your email address')}
          </div>

          <div className="w-full flex justify-between items-center mt-20 pb-5 xl:pb-0 xl:mt-28 xl:flex-row flex-col">
            <button
              type="submit"
              className="rounded-2xl bg-black text-white py-4 xl:py-5 px-24 text-lg font-semibold w-full xl:w-auto"
            >
              {t('Reset Password')}
            </button>
            <Link href="/login">
              <a className="underline font-medium xl:mt-0 mt-5">
                {t('Login instead')}
              </a>
            </Link>
          </div>
        </form>
      </div>
    </OutsideLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['forgot'])),
      // Will be passed to the page component as props
    },
  };
}
