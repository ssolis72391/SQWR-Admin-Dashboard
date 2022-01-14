import { useState } from 'react';

import DeleteModal from '../shared/DeleteModal';
import TimePickerModal from '../shared/TimePickerModal';

export default function ScheduledNotification({ title, text, date }) {
  const [readMore, setReadMore] = useState(true);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);

  const truncate = str => {
    if (readMore) {
      return str.length > 150 ? `${str.substring(0, 150)}...` : str;
    }
    return str;
  };
  return (
    <div className="rounded-xl bg-grey-middle lg:bg-gradient-to-tl lg:from-grey-dark to-grey-light py-4 px-5 lg:p-8 my-5">
      <DeleteModal open={deleteOpen} setOpen={setDeleteOpen} />
      <TimePickerModal open={rescheduleOpen} setOpen={setRescheduleOpen} />
      <div className="font-normal lg:text-lg">{title}</div>
      <span className="text-grey-veryLight text-xs lg:text-sm mt-1">
        {date}
      </span>
      <p className="text-sm mt-4">
        {truncate(text)}
        <span
          className="text-primary underline ml-2"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? 'See More' : 'See Less'}
        </span>
      </p>
      <div className="gap-8 mt-4 flex">
        <span
          className="text-primary text-red text-xs lg:text-sm"
          onClick={() => setDeleteOpen(true)}
        >
          Delete
        </span>
        <span
          className="text-primary text-green text-xs lg:text-sm"
          onClick={() => setRescheduleOpen(true)}
        >
          Reschedule
        </span>
      </div>
    </div>
  );
}
