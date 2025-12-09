import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "@/assets/Logo.png";
import { routes } from '@/shared/routes';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuHandler = (
    event: React.MouseEvent<
      HTMLAnchorElement | HTMLDivElement | HTMLButtonElement
    >,
    state: boolean,
  ) => {
    setIsOpen(state);
  };

  return (
    <div className="relative flex w-full items-center justify-between gap-x-2 @7xl/root:hidden">
      <NavLink
        to={`${routes[0].to}`}
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
      >
        <img src={Logo} alt="Logo" className="w-40 min-w-30 object-cover" />
      </NavLink>

      {/* Hamburger button */}
      <div onClick={(e) => menuHandler(e, true)}>
        <Bars3Icon className="size-6 cursor-pointer"/>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-0 bg-black/50"
          onClick={(e) => menuHandler(e, false)}
        />
      )}

      {/* Slider menu */}
      <nav
        className={`from-secondary-400/95 to-secondary-400 fixed top-0 right-0 z-10 h-full w-[80%] transform bg-linear-to-r shadow-[-4px_0_8px_rgba(0,0,0,0.25)] transition-transform duration-800 ease-in-out @md/root:w-[70%] @lg/root:w-[60%] @xl/root:w-[50%] @2xl/root:w-[40%] ${isOpen ? "translate-x-0" : "translate-x-[104%]"}`}
      >
        <div className="flex justify-between p-4">
          <div className="flex flex-col items-start gap-y-2">
            {routes.map((route) => (
              <NavLink
                key={route.label}
                to={route.to}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
                onClick={(e) => menuHandler(e, false)}
              >
                {route.label}
              </NavLink>
            ))}
            <Link to={`${routes[0].to}#sign-in`} onClick={(e) => menuHandler(e, false)}>
              Sign In
            </Link>
            <Link to={`${routes[0].to}#become-a-member`}>
              <button
                className="bg-gray-20 rounded-md px-8 text-gray-500"
                onClick={(e) => menuHandler(e, false)}
              >
                Become a Member
              </button>
            </Link>
          </div>

          {/* Close button */}
          <div onClick={(e) => menuHandler(e, false)}>
            <XMarkIcon className="size-6 cursor-pointer"/>
          </div>
        </div>
      </nav>
    </div>
  );
}
