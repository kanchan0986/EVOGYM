import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EVOGYM | Home" },
    { name: "description", content: "Evolutionary Fitness." },
  ];
}

type Props = {}

export default function Home({}: Props) {
  return <main>EVOGYM</main>;
}
