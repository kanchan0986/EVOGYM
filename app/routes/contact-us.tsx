import type { Route } from "./+types/contact-us"

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "EVOGYM | Contact Us" },
    { name: "description", content: "Evolutionary Fitness." },
  ];
}

type Props = {}

export default function ContactUs({}: Props) {
  return (
    <main>ContactUs</main>
  )
}