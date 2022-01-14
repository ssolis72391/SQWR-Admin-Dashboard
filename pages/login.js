import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import Show from '../components/SVG/Auth/Show';
import Hide from '../components/SVG/Auth/Hide';
import OutsideLayout from '../components/layout/OutsideLayout';
import { useSession, getSession, signIn } from 'next-auth/client';

import { useRouter } from 'next/router';
export default function Login() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const router = useRouter();
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const handleLogin = async e => {
    e.preventDefault();
    // const result = await signIn('Credentials', {
    //   redirect: false,
    //   email: 'admin@thesquareware.de',
    //   password: '1234d56',
    // });
    const session = await signIn('credentials', {
      redirect: false,
      email: 'admin@thesquareware.de',
      password: '123456',
    });
    // console.log({ user: session.session });

    // console.log(result);

    // if (result.error) {
    //   console.log(result.error);
    // }
    // const session = await getSession();
    // console.log(session);

    router.replace('/dashboard');
  };

  const { t } = useTranslation('login');
  return (
    <OutsideLayout>
      <div className="w-full xl:w-7/12 xl:h-full h-3/5 bg-white px-5 xl:px-40 xl:pt-48">
        <form className="w-full xl:max-w-xl" onSubmit={handleLogin}>
          <h1 className="text-5xl xl:block hidden">Login to dashboard</h1>
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
          <label htmlFor="password" className="mt-5 block">
            Password
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
              placeholder="Password"
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
          <label
            className="hidden lg:inline-flex items-center mt-12"
            htmlFor="remember"
          >
            <input
              id="remember"
              type="checkbox"
              className="w-6 h-6 rounded-md bg-grey-dark text-grey-dark"
            />
            <span className="ml-2">{t('Remember me')}</span>
          </label>
          <div className="w-full flex justify-between items-center mt-10 pb-5 xl:pb-0 xl:mt-14 xl:flex-row flex-col">
            <button
              type="submit"
              className="rounded-2xl bg-black text-white py-4 xl:py-5 px-24 text-lg font-semibold w-full xl:w-auto"
            >
              {t('Login')}
            </button>
            <Link href="/forgot">
              <a className="underline font-medium xl:mt-0 mt-5">
                {t('Forgot Password?')}
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
      ...(await serverSideTranslations(locale, ['login'])),
      // Will be passed to the page component as props
    },
  };
}
