/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import Link from 'next/link';

import { Popover, Transition } from '@headlessui/react';
import Close from '../SVG/MenuIcons/close';
import Menu from '../sidebar/menu/Menu';
import LogoMobile from '../SVG/LogoMobile';

export default function MobileNav({ active }) {
  return (
    <Popover>
      <div className="flex justify-between items-center lg:justify-start lg:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1" />
        <div className=" lg:hidden" style={{ height: '32px' }}>
          <Popover.Button>
            <svg
              width="33"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x=".3" width="32" height="32" rx="8" fill="#F7F7F7" />
              <path d="m27.1 9.7-10.8 6V28L27.1 22V9.7Z" fill="url(#a)" />
              <path d="m5.5 9.7 10.8 6V28L5.6 22V9.7Z" fill="url(#b)" />
              <path
                d="M16.4 3.5 5.5 9.7l10.8 6 10.8-6-10.7-6.2Zm-2.6 9.8L7.6 9.7l8.8-5 6 3.5-8.6 5Z"
                fill="#8097FF"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="24.4"
                  y1="23.5"
                  x2="19"
                  y2="14.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8097FF" stopOpacity="0" />
                  <stop offset="1" stopColor="#8097FF" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="8.3"
                  y1="23.5"
                  x2="13.7"
                  y2="14.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8097FF" stopOpacity="0" />
                  <stop offset="1" stopColor="#8097FF" />
                </linearGradient>
              </defs>
            </svg>
          </Popover.Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 transition transform origin-top-right lg:hidden h-screen bg-grey-dark z-10"
        >
          <div className=" pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div className="ml-7">
                <LogoMobile />
              </div>
              <div className="-mr-2">
                <Popover.Button className=" rounded-md m-8 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Close menu</span>
                  <Close />
                </Popover.Button>
              </div>
            </div>
            <Menu active={active} />
          </div>
          <div className="absolute bottom-20 mx-auto flex w-screen">
            <Link href="/">
              <a className="rounded-xl border-2 border-primary font-medium text-primary px-8 py-3 mx-auto ">
                Logout
              </a>
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
