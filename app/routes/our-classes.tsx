import type { Route } from "./+types/our-classes"

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "EVOGYM | Our Classes" },
    { name: "description", content: "Evolutionary Fitness." },
  ];
}

type Props = {}

export default function OurClasses({}: Props) {
  return (
    <section>OurClasses</section>
  )
}