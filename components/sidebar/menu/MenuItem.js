/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable default-case */
import Link from 'next/link';
import config from '../../../config';
import Home from '../../SVG/MenuIcons/home';
import Users from '../../SVG/MenuIcons/users';
import Deals from '../../SVG/MenuIcons/deals';
import Push from '../../SVG/MenuIcons/push';

export default function MenuItem({ active, type, children }) {
  let icon;
  let isActive;
  if (active === type) {
    isActive = true;
    switch (type) {
      case 'push':
        icon = <Push color={config.PRIMARY_COLOR} />;
        break;
      case 'deals':
        icon = <Deals color={config.PRIMARY_COLOR} />;
        break;
      case 'users':
        icon = <Users color={config.PRIMARY_COLOR} />;
        break;
      case 'dashboard':
        icon = <Home color={config.PRIMARY_COLOR} />;
        break;
    }
  } else {
    isActive = false;
    switch (type) {
      case 'push':
        icon = <Push color="#3B3741" />;
        break;
      case 'deals':
        icon = <Deals color="#3B3741" />;
        break;
      case 'users':
        icon = <Users color="#3B3741" />;
        break;
      case 'dashboard':
        icon = <Home color="#3B3741" />;
        break;
    }
  }
  return (
    <Link href={`/${type}`}>
      <a
        className={` ${
          isActive && 'rounded-2xl bg-primary bg-opacity-20 '
        } mx-8 mt-5 flex items-center hover:bg-primary hover:bg-opacity-20 hover:rounded-2xl`}
      >
        <div className="ml-7 mt-4 mb-4 mr-5">{icon}</div>
        <div
          className={`${
            isActive ? 'text-primary ' : 'text-grey-veryLight'
          } font-medium`}
        >
          {children}
        </div>
      </a>
    </Link>
  );
}
