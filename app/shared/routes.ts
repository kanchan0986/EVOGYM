export type Route = {
    to: string;
    label: string;
}

export const routes: Route[] = [
  { to: ".", label: "Home" },
  { to: "benefits", label: "Benefits" },
  { to: "our-classes", label: "Our Classes" },
  { to: "contact-us", label: "Contact Us" },
];