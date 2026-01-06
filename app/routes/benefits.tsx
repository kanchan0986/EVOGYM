import type { Route } from './+types/benefits'
import {motion} from 'motion/react'
import kristen from '@/assets/kristen-plastique-rj9rz1Ho3k8-unsplash.jpg'
import samuel from '@/assets/samuel-girven-4Bp8v9A0zKw-unsplash.jpg'
import labib from '@/assets/labib-jaffar-CtqoeOJlImQ-unsplash.jpg'
import WrapperVertical from '@/components/Wrapper/WrapperVertical';
import WrapperHorizontal from '@/components/Wrapper/WrapperHorizontal';
import Button from '@/components/Button/Button'
import { Link } from 'react-router'

export const meta = ({}: Route.MetaArgs) => { 
  return [
    { title: "EVOGYM | Benefits" },
    { name: "description", content: "Evolutionary Fitness." },
  ];
 }

type Props = {}

export default function Benefits({}: Props) {
  return (
    <section className="mt-16 overflow-hidden">
      <WrapperVertical>

        {/* -------------------------------------------------------------------------- */
        /*                           State of Art Facilities                          */
        /* -------------------------------------------------------------------------- */}

        <WrapperHorizontal className="px-5 py-10 @7xl/root:p-20" id='state_of_art_facilities'>
          {/* ------------------------------ Side Graphic ------------------------------ */}
          <div className="basis-4/12 h-[70vh] overflow-hidden">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              src={labib}
              alt="Benefit-graphic"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* -------------------------------- Contents -------------------------------- */}
          <div className="basis-6/12 flex flex-col gap-y-4">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-primary-500 text-3xl font-extrabold uppercase"
            >
              State of Art <span className="text-gray-500">Facitlities</span>
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
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
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus amet fuga exercitationem beatae iusto vero quos quas!
              Soluta laudantium quam deserunt earum officiis dolore libero
              neque blanditiis beatae omnis cumque, at vel fuga aspernatur
              sint quasi alias saepe ut. Debitis itaque eaque obcaecati odio,
              labore cumque! Officia amet est delectus!
            </motion.p>
            {/* ------------------------------ Action Button ----------------------------- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to="#">
                <Button>Join Now</Button>
              </Link>
            </motion.div>
          </div>
        </WrapperHorizontal>

        {/* -------------------------------------------------------------------------- */
        /*                          100's of Diverse Classes                          */
        /* -------------------------------------------------------------------------- */}


        <WrapperHorizontal className="px-5 py-10 @3xl/root:flex-row-reverse items-center justify-between bg-primary-100 @7xl/root:p-20" id='100_of_diverse_classes'>
          {/* ------------------------------ Side Graphic ------------------------------ */}
          <div className="basis-4/12 h-[70vh] overflow-hidden">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              src={kristen}
              alt="Benefit-graphic"
              className="w-full h-full object-cover object-bottom rounded-md"
            />
          </div>
          {/* -------------------------------- Contents -------------------------------- */}
          <div className="basis-6/12 flex flex-col gap-y-4">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-primary-500 text-3xl font-extrabold uppercase"
            >
              100' of <span className="text-gray-500">Diverse Classes</span>
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
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus amet fuga exercitationem beatae iusto vero quos quas!
              Soluta.
            </motion.p>
            {/* ------------------------------ Action Button ----------------------------- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to="#">
                <Button>Join Now</Button>
              </Link>
            </motion.div>
          </div>
        </WrapperHorizontal>

        {/* -------------------------------------------------------------------------- */
        /*                           Expert and Pro Trainers                          */
        /* -------------------------------------------------------------------------- */}


        <WrapperHorizontal className="px-5 py-10 @7xl/root:p-20" id='expert_and_pro_trainers'>
          {/* ------------------------------ Side Graphic ------------------------------ */}
          <div className="basis-4/12 h-[70vh] overflow-hidden">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              src={samuel}
              alt="Benefit-graphic"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* -------------------------------- Contents -------------------------------- */}
          <div className="basis-6/12 flex flex-col gap-y-4">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-primary-500 text-3xl font-extrabold uppercase"
            >
              Expert and Pro <span className="text-gray-500">Trainers</span>
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
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
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus amet fuga exercitationem beatae iusto vero quos quas!
              Soluta laudantium quam deserunt earum officiis dolore libero
              neque blanditiis beatae omnis cumque.
            </motion.p>
            {/* ------------------------------ Action Button ----------------------------- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to="#">
                <Button>Join Now</Button>
              </Link>
            </motion.div>
          </div>
        </WrapperHorizontal>
      </WrapperVertical>
    </section>
  )
}