import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EVOGYM | Home" },
    { name: "description", content: "Evolutionary Fitness." },
  ];
}

export default function Home() {
  return <main>EVOGYM</main>;
}
