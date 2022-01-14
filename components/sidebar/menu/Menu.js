import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import MenuItem from './MenuItem';

export default function Menu({ active }) {
  const { t } = useTranslation('menu');
  return (
    <div className="mt-12">
      <MenuItem type="dashboard" active={active}>
        {t('Dashboard')}
      </MenuItem>
      <MenuItem type="users" active={active}>
        {t('User')}
      </MenuItem>
      <MenuItem type="push" active={active}>
        {t('Push Notifications')}
      </MenuItem>
      <div className="w-full mt-16 text-center">
        <Link href="/">
          <a className="rounded-xl border-2 border-primary font-medium text-primary px-8 py-3 mx-auto ">
            {t('Logout')}
          </a>
        </Link>
      </div>
    </div>
  );
}
