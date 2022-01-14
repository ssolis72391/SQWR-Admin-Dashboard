import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import IconButton from '../components/shared/IconButton';
import Button from '../components/shared/Button';
import H1 from '../components/shared/H1';
import ScheduledNotification from '../components/push/ScheduledNotification';
import TimePickerModal from '../components/shared/TimePickerModal';
import InsideLayout from '../components/layout/InsideLayout';

export default function Users() {
  const [isOpen, setIsOpen] = useState(false);
  const [scheduled, setScheduled] = useState(false);

  const notifications = [
    {
      title: 'Short Title for quick notifications',
      text: ' Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More  Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More ',
      date: '22 Uhr XX.XX',
    },
    {
      title: 'Short Title for quick notifications',
      text: ' Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More  Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More ',
      date: '22 Uhr XX.XX',
    },
    {
      title: 'Short Title for quick notifications',
      text: ' Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More  Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta...See More ',
      date: '22 Uhr XX.XX',
    },
  ];
  const { t } = useTranslation('push');
  return (
    <InsideLayout
      translation={t}
      page="push"
      title={t('Push Notifications')}
      subtitle={t('Welcome to your thesquareware Admin Dashboard')}
    >
      <TimePickerModal open={isOpen} setOpen={setIsOpen} />
      <div className="mt-8 lg:mt-12 3xl:w-9/12 flex flex-col xl:flex-row justify-between">
        <div className="w-full mr-12 w-full xl:max-w-xl">
          <H1 className="hidden lg:block">{t('Push a notification')}</H1>
          <div className="mt-0 lg:mt-14">
            <label htmlFor="peas" className="hidden">
              {t('Title')}
            </label>
            <input
              type="text"
              name="notification_title"
              id="notification_title"
              placeholder="Title"
              className="py-3 lg:py-6 lg:px-5 text-xs lg:text-sm text-white placeholder-veryLight rounded-md lg:rounded-xl bg-grey-middle rounded-md pl-4 pr-10 w-full border-0 border-grey-divider lg:border-1"
            />
          </div>
          <div>
            <label htmlFor="peas" className="hidden">
              {t('Notification Message')}
            </label>
            <textarea
              type="textarea"
              name="notification_text"
              rows={8}
              id="notification_text"
              placeholder="Write your message here..."
              className="py-3 lg:py-6 lg:px-5 text-xs lg:text-sm text-white placeholder-veryLight rounded-md lg:rounded-xl bg-grey-middle rounded-md pl-4 pr-10 w-full border-0 mt-5 lg:mt-7 border-grey-divider lg:border-1"
            />
          </div>
          {scheduled && <div>Scheduled for the xxx</div>}
          <div className="flex gap-5 mt-5">
            <IconButton>{t('Send')}</IconButton>
            <Button onClick={() => setIsOpen(true)}>
              {t('Schedule for later')}
            </Button>
          </div>
        </div>
        <div className="w-full xl:max-w-sm">
          <H1 className="mt-8 xl:mt-0">{t('Scheduled Notifications')}</H1>
          {notifications.map((notification, index) => (
            <ScheduledNotification
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              title={notification.title}
              text={notification.text}
              date={notification.date}
            />
          ))}
        </div>
      </div>
    </InsideLayout>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['push', 'menu'])),
      // Will be passed to the page component as props
    },
  };
}
