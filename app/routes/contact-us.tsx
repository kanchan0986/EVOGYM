import type { Route } from "./+types/contact-us"

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "EVOGYM | Contact Us" },
    { name: "description", content: "Evolutionary Fitness." },
  ];
}

type Props = {}

export async function clientAction({ request }: Route.ClientActionArgs) {
    const formData = await request.formData();
    const values = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    }
    console.log(values) // call any API to use this data from here
    return {};
}

export default function ContactUs({}: Props) {
  return (
    <section>Contact Us</section>
  )
}