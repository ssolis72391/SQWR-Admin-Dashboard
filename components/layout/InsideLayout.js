import Sidebar from '../sidebar/Sidebar';
import NavBar from '../NavBar/NavBar';

import { getSession, useSession } from 'next-auth/client';
import { useEffect } from 'react';
export default function InsideLayout({
  page,
  title,
  subtitle,
  children,
  search,
}) {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return (
    <div className="flex">
      <Sidebar active={page} />
      <div className="lg:pt-12 pt-5 px-5 lg:px-20 text-white w-full  max-h-screen overflow-y-scroll bg-grey-dark">
        <NavBar
          title={title}
          subtitle={subtitle}
          active={page}
          search={search}
        />
        {children}
      </div>
    </div>
  );
}
