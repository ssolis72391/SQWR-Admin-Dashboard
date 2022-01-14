/* eslint-disable indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import Checkbox from '../shared/Checkbox';
import DeleteUserModal from '../shared/DeleteUserModal';
import BlockDesktop from '../SVG/UserTable/BlockDesktop';
import BlockMobile from '../SVG/UserTable/BlockMobile';

import TrashDesktop from '../SVG/UserTable/TrashDesktop';
import TrashMobile from '../SVG/UserTable/TrashMobile';

const users = [
  {
    name: 'Jane Cooper',
    signUp: '1/7/2021',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    isVerified: true,
  },
  {
    name: 'Jane Cooper',
    signUp: '1/7/2021',
    role: 'Admin',
    email: 'jane.coopedfr@example.com',
    isVerified: false,
    isBlocked: true,
  },
  {
    name: 'Jane Cooper',
    signUp: '1/7/2021',
    role: 'Admin',
    email: 'jane.coofpedfr@example.com',
    isVerified: false,
    isBlocked: true,
  },
  {
    name: 'Jane Cooper',
    signUp: '1/7/2021',
    role: 'Adamin',
    email: 'janes.coopedfr@example.com',
    isVerified: false,
    isBlocked: true,
  },
  {
    name: 'Jane Cooper',
    signUp: '1/7/2021',
    role: 'Admin',
    email: 'jande.coopedfr@example.com',
    isVerified: false,
    isBlocked: true,
  },
];

export default function Table() {
  const { t } = useTranslation('users');
  const [isBlocked, setIsBlocked] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState({});

  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    const blockInfo = {};
    for (let i = 0; i < users.length; i += 1) {
      blockInfo[users[i].email] = users[i].isBlocked;
    }
    setIsBlocked(blockInfo);
  }, []);

  const handeleAllChange = () => {
    const allKeys = {};
    for (let i = 0; i < users.length; i += 1) {
      allKeys[users[i].email] = !allChecked;
    }
    setChecked(allKeys);
    setAllChecked(prevState => !prevState);
  };
  const handleCheckboxChange = event => {
    setChecked(prevState => ({
      ...checked,
      [event.target.id]: !prevState[event.target.id],
    }));
  };

  const handleBlocking = email => {
    setIsBlocked(prevState => ({
      ...isBlocked,
      [email]: !prevState[email],
    }));
  };

  return (
    <div className="flex flex-col -mx-5 md:mx-0">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden md:rounded-2xl">
            <DeleteUserModal open={isOpen} setOpen={setIsOpen} />
            <table className="min-w-full divide-y  divide-grey-divider bg-grey-tableDark text-left font-medium">
              <thead className="text-grey-veryLight xl:table-header-group hidden">
                <tr className="bg-grey-tableDark">
                  <th
                    scope="col"
                    className={`md:px-6 px-4 py-8 lg:py-11 text-center md:border-l-10  text-center ${
                      allChecked
                        ? 'border-l-primary'
                        : 'border-l-grey-tableDark'
                    }`}
                  >
                    <Checkbox
                      key="all"
                      id="all"
                      label="All"
                      hidden
                      onChange={handeleAllChange}
                      checked={allChecked}
                    />
                  </th>
                  <th scope="col">{t('Email')}</th>
                  <th scope="col">{t('Name')}</th>
                  <th scope="col">{t('Signup Date')}</th>
                  <th scope="col">{t('Role')}</th>
                  <th scope="col">{t('Actions')}</th>
                </tr>
              </thead>
              <tbody className="md:divide-y md:divide-grey-divider">
                {users.map((user, index) => (
                  <tr
                    key={user.email}
                    className={`${
                      index % 2 === 0 ? 'bg-grey-light' : 'bg-grey-tableDark'
                    }`}
                  >
                    <td
                      className={`md:px-6 px-4 py-8 lg:py-11 text-center border-l-2  md:border-l-10  ${
                        checked[user.email]
                          ? 'border-l-primary '
                          : index % 2 === 0
                          ? 'border-l-grey-light'
                          : 'border-l-grey-tableDark'
                      } `}
                    >
                      <Checkbox
                        key={user.email}
                        id={user.email}
                        label={user.email}
                        hidden
                        checked={checked[user.email]}
                        onChange={handleCheckboxChange}
                      />
                    </td>
                    <td className="hidden xl:table-cell">{user.email}</td>
                    <td className="hidden xl:table-cell">{user.name}</td>
                    <td className="table-cell xl:hidden">
                      <div className="text-sm font-semibold">{user.name}</div>
                      <div className="text-xxs font-normal mt-2">
                        {user.email}
                      </div>
                    </td>
                    <td className="hidden xl:table-cell">{user.signUp}</td>
                    <td className="hidden xl:table-cell">{user.role}</td>
                    <td className="table-cell xl:hidden pr-4">
                      <div className="text-xs font-semibold text-right">
                        {user.role} | {user.signUp}
                      </div>
                      <div className="flex gap-4 justify-end mt-2">
                        <div onClick={() => setIsOpen(true)}>
                          <TrashMobile />
                        </div>
                        <div onClick={() => handleBlocking(user.email)}>
                          <BlockMobile active={isBlocked[user.email]} />
                        </div>
                      </div>
                    </td>
                    <td className="hidden xl:table-cell">
                      <div className="flex 2xl:gap-9 gap-2 items-center">
                        <div onClick={() => setIsOpen(true)}>
                          <TrashDesktop />
                        </div>
                        <div onClick={() => handleBlocking(user.email)}>
                          <BlockDesktop active={isBlocked[user.email]} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
