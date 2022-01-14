import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Dropdown({ setItem, mobileHidden, title, items }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`${
            mobileHidden ? 'hidden' : 'inline-flex'
          } text-xs lg:text-base font-medium xl:inline-flex justify-center w-full rounded-lg lg:rounded-2xl  px-3 py-2 lg:px-6 lg:py-4 bg-grey-light items-center`}
        >
          {title}
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 text-primary"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2  w-32 lg:w-56 rounded-2xl bg-grey-light">
          <div className="py-1">
            {items.map(item => {
              return (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <a
                      onClick={() => setItem(item)}
                      className={classNames(
                        active && 'bg-grey-light rounded-2xl',
                        'block px-4 py-2 text-xs lg:text-base  cursor-pointer'
                      )}
                    >
                      {item}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
