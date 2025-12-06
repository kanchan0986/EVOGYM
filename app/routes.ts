import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/root-layout.tsx", [
        index("routes/home.tsx"),
        route("benefits", "routes/benefits.tsx"),
        route("our-classes", "routes/our-classes.tsx"),
        route("contact-us", "routes/contact-us.tsx"),
    ])
] satisfies RouteConfig;
