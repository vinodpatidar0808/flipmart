import { useContext, useState } from 'react';
import { FaSortDown, FaSortUp, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

export default function UserDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlUserClick = () => {
    setIsDropdownOpen((curr) => !curr);
    // TODO: user click
  };

  const { user, logOut } = useContext(AuthContext);
  const isAdmin = user?.isAdmin;

  const handleLogout = async () => {
    // TODO: logout
    await logOut();
  };

  // Component is taken from flowbite https://flowbite.com/docs/components/dropdowns/
  return (
    <div className="relative">
      <div
        className="flex relative border rounded-md px-2 py-1 border-secondary  items-center gap-1"
        onClick={handlUserClick}>
        <FaUser className="w-8 h-8 fill-primary" />
        <div className="flex">
          <span className="font-semibold">{user?.displayName ?? 'Guest'}</span>
          <span className="flex justify-center items-center -translate-y-1 ">
            {!isDropdownOpen ? (
              <FaSortDown className="fill-primary w-6 h-6 " />
            ) : (
              <FaSortUp className="fill-primary w-6 h-6 translate-y-2" />
            )}
          </span>
        </div>
      </div>

      <div
        onClick={handlUserClick}
        id="dropdown"
        className={`top-12 right-3 absolute z-10 ${
          isDropdownOpen ? 'flex' : 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
        <ul
          className="w-full flex-1 py-2 text-sm text-gray-700  flex flex-col  justify-stretch"
          aria-labelledby="dropdownDefaultButton">
          <li className="w-full">
            <Link
              href="#"
              className="flex w-full px-4 py-2 hover:bg-gray-100 hover:text-primary ">
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex px-4 py-2 hover:bg-gray-100 hover:text-primary">
              Settings
            </Link>
          </li>
          <li>
            <Link
              to={'user/orders'}
              className="flex px-4 py-2 hover:bg-gray-100 hover:text-primary">
              Orders
            </Link>
          </li>
          <li>
            <a
              onClick={handleLogout}
              // href="#"
              className="flex px-4 py-2 hover:bg-gray-100 hover:text-primary">
              Sign out
            </a>
          </li>
          {isAdmin && (
            <>
              <li>
                <Link
                  to={'admin'}
                  className="flex px-4 py-2 hover:bg-gray-100 hover:text-primary">
                  Dashboard <span className="pl-1 text-primary text-sm">(Admin)</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
