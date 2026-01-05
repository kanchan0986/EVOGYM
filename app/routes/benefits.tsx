import type { Route } from './+types/benefits'

export const meta = ({}: Route.MetaArgs) => { 
  return [
    { title: "EVOGYM | Benefits" },
    { name: "description", content: "Evolutionary Fitness." },
  ];
 }

type Props = {}

export default function Benefits({}: Props) {
  return (
    <section>Benefits</section>
  )
}