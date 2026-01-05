import { Link, NavLink } from "react-router";
import { routes } from "@/shared/routes";
import logo from "@/assets/Logo.png";

type Props = {};

export default function FooterNavigation({}: Props) {
  

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-300 grid grid-cols-[3fr_1fr_1fr]  gap-15 px-5 py-20 @3xl/root:py-30 @7xl/root:px-20 relative">
      <div className="col-span-full @3xl/root:col-auto flex flex-col items-start justify-start gap-y-4">
        {/* ---------------------------------- Logo ---------------------------------- */}
        <Link to={`${routes[0].to}`} className="w-60">
          <img src={logo} alt="Logo" className="w-40 min-w-35 object-cover" />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis
          amet dignissimos in adipisci est officiis incidunt alias optio aliquam
          tempora deleniti, necessitatibus sint recusandae veniam aperiam
          mollitia repellendus voluptatibus?
        </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-4">
        {/* ---------------------------------- Links --------------------------------- */}
        <h3 className="text-2xl font-bold text-gray-500">Links</h3>
        <div className="flex flex-col items-start justify-start gap-y-1">
          {routes.map((route) => (
            <NavLink key={route.label} to={route.to}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 hover:underline underline-offset-3 decoration-px decoration-gray-500"
                  : "hover:underline underline-offset-3 decoration-px decoration-gray-500"}
            >
              {route.label}
            </NavLink>
          ))}
        </div>
      </div>
      {/* --------------------------------- Find Us -------------------------------- */}
      <div className="col-span-full @xs/root:col-span-2 @3xl/root:col-auto  flex flex-col items-start justify-start gap-y-4">
        <h3 className="text-2xl font-bold text-gray-500">Find Us</h3>
        <p className="flex">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
          dolor?
        </p>
        <div><span className="text-gray-500">Tel: </span><Link to="tel:1309-4802-39">1309-4802-39</Link></div>
      </div>
      {/* -------------------------------- Copyright ------------------------------- */}
      <div className="absolute bottom-0 left-0 w-full h-[4vh] flex justify-center items-center bg-gray-500 text-white">
        <small>&copy;{currentYear} | Kanchan Sanyal</small>
      </div>
    </footer>
  );
}
