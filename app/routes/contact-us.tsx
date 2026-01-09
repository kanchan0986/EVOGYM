import WrapperVertical from "@/components/Wrapper/WrapperVertical";
import type { Route } from "./+types/contact-us"
import { motion } from 'motion/react';
import ContactForm from "@/components/ContactForm/ContactForm";
import contactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'

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
      <WrapperVertical className="gap-y-20 bg-position-[bottom_2rem_right_2rem] px-5 py-20 @3xl/root:py-30 @7xl/root:bg-[url(@/assets/EvolveText.png)] @7xl/root:bg-no-repeat @7xl/root:px-20">
        <div className="flex flex-col-reverse items-start justify-between gap-y-20 @3xl/root:flex-row">
          <div className="flex basis-8/12 flex-col items-start gap-y-16 @3xl/root:pr-8">
            {/* --------------------------------- Heading -------------------------------- */}

            <div className="flex flex-col gap-y-4 overflow-hidden">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-primary-500 relative text-3xl font-extrabold uppercase before:absolute before:-top-20 before:left-0 before:animate-pulse before:content-[url(@/assets/AbstractWaves.png)] @3xl/root:before:-inset-20"
              >
                Join now <span className="text-gray-500">to get in shape</span>
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
                recusandae ipsam delectus voluptatum dolor repellat ab debitis
                vel illum hic pariatur, adipisci explicabo optio enim voluptate
                accusantium ratione dolorem odit aspernatur necessitatibus
                laborum, reprehenderit quis corporis! Quas laudantium tenetur
                exercitationem!
              </motion.p>
            </div>

            {/* ------------------------------ Contact Form ------------------------------ */}

            <div className="w-full">
              <ContactForm />
            </div>
          </div>

          {/* ------------------------------ Side Graphic ------------------------------ */}

          <div className="w-full self-end overflow-hidden @3xl/root:w-4/12">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              src={contactUsPageGraphic}
              alt="Benefit-graphic"
              className="w-full object-contain"
            />
          </div>
        </div>
      </WrapperVertical>
  )
}