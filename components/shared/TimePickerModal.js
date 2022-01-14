/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Calendar from 'react-calendar';
import { useTranslation } from 'next-i18next';

export default function TimePickerModal({ open, setOpen }) {
  const { t } = useTranslation('push');
  const cancelButtonRef = useRef(null);
  let now10 = new Date().getMinutes() + 10;
  let hours = new Date().getHours();
  if (now10 >= 60) {
    now10 = '0' + (now10 % 60);
    hours += 1;
  }

  const [time, setTime] = useState(hours + ':' + now10);

  const [date, setDate] = useState(
    new Date(
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      )
    )
  );

  const onDateChange = changedDate => {
    setDate(
      new Date(
        changedDate.getFullYear(),
        changedDate.getMonth(),
        changedDate.getDate()
      )
    );
  };

  const handleTimeInput = e => {
    setTime(e.target.value);
  };
  function tileDisabled({ chosenDate, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is within any of the ranges
      return chosenDate < new Date(Date.now() - 1 * 60000 * 60 * 24);
    }
    return false;
  }
  const handleReschedule = () => {
    onDateChange(date);
    date.setTime(
      date.getTime() + time.slice(0, 2) * 60000 * 60 + time.slice(3) * 60000
    );
    if (new Date(Date.now() + 10 * 60000).getTime() <= date) {
      setOpen(false);
    } else {
      // eslint-disable-next-line no-alert
      alert('Time is not enough in the future');
    }
  };
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
            <div className="px-7 text-white inline-block align-bottom bg-grey-dark rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-xs sm:w-full">
              <div className="bg-grey-dark border-b-1 pb-4 border-grey-light pt-2">
                <Calendar
                  onChange={onDateChange}
                  value={date}
                  // eslint-disable-next-line react/jsx-no-bind
                  tileDisabled={tileDisabled}
                />
              </div>
              <div className="flex flex-col justify-center items-center pt-2">
                <label htmlFor="peas" className="hidden">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={time}
                  maxLength="5"
                  onChange={handleTimeInput}
                  className="p-3  tracking-time text-primary bg-grey-dark  w-min border-0"
                />
                <div className="flex justify-between w-full mb-4 mt-8">
                  <button
                    className="bg-grey-light text-white py-2 rounded-md px-4"
                    type="button"
                  >
                    {t('Cancel')}
                  </button>
                  <button
                    type="button"
                    className="bg-primary py-2 rounded-md px-4 text-grey-dark"
                    onClick={handleReschedule}
                  >
                    {t('Set Date')}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
