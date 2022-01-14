/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { useTranslation } from 'next-i18next';

export default function DeleteModal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  const { t } = useTranslation('push');
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-opacity-20 bg-white transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="px-7 text-white inline-block align-bottom bg-grey-dark rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-grey-dark ">
                <div>
                  <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium my-8 text-center"
                    >
                      {t('Delete Notification?')}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-grey-veryLight md:text-md text-center">
                        {t(
                          'This notification will be deleted and can’t be recovered.'
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col">
                <button
                  type="button"
                  className="text-primary font-semibold w-full inline-flex justify-center rounded-md border border-primary shadow-sm px-4 py-2 text-base font-medium "
                  onClick={() => setOpen(false)}
                >
                  {t('Delete')}
                </button>
                <button
                  type="button"
                  className="mt-3 mb-8 w-full font-semibold inline-flex justify-center px-4 py-2 text-base font-medium "
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  {t('Cancel')}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
