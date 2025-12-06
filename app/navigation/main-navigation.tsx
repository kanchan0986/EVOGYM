import { Link, NavLink } from "react-router";
import Logo from "@/assets/Logo.png";
import MobileNavigation from "./mobile-navigation";
import { routes } from "@/shared/routes";

type Props = {
  isTopOfThePage: boolean;
};

export default function MainNavigation({ isTopOfThePage }: Props) {
  return (
    <nav
      className={`fixed inset-0 flex h-16 w-full items-center justify-between px-4 @7xl/root:px-20 ${isTopOfThePage ? "" : "bg-gray-20 shadow-[0_0.1rem_1rem_rgba(0,0,0,0.25)]"}`}
    >
      <MobileNavigation />
      <div className="hidden w-11/12 items-center gap-x-2 @7xl/root:flex">
        {/* Logo */}
        <Link to={`${routes[0].to}`} className="w-60">
          <img src={Logo} alt="Logo" className="w-40 min-w-35 object-cover" />
        </Link>
        {/* Menu Items */}
        <div className="flex gap-x-4">
          {routes.map((route) => (
            <NavLink
              key={route.label}
              to={route.to}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-primary-500 active:text-primary-500 text-black"
              }
            >
              {route.label}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Right side menu items */}
      <div className="hidden w-4/12 items-center justify-end gap-x-4 @7xl/root:flex">
        <Link
          to={`${routes[0].to}#sign-in`}
          className="hover:text-primary-500 active:text-primary-500 text-black"
        >
          Sign In
        </Link>
        <Link to={`${routes[0].to}#become-a-member`}>
          <button className="bg-secondary-500 cursor-pointer rounded-md px-8 text-gray-500 hover:text-white active:text-white">
            Become a Member
          </button>
        </Link>
      </div>
    </nav>
  );
}
