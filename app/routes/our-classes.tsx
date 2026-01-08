import WrapperVertical from "@/components/Wrapper/WrapperVertical";
import type { Route } from "./+types/our-classes"
import WrapperHorizontal from "@/components/Wrapper/WrapperHorizontal";
import { motion } from 'motion/react'
import { Link } from "react-router";
import Button from "@/components/Button/Button";
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "EVOGYM | Our Classes" },
    { name: "description", content: "Evolutionary Fitness." },
  ];
}

type Props = {}

export default function OurClasses({}: Props) {
  return (
    <section className="mt-16 overflow-hidden">
      <WrapperVertical>

        {/* -------------------------------------------------------------------------- */
        /*                             Functional Training                            */
        /* -------------------------------------------------------------------------- */}

        <WrapperHorizontal className="px-5 py-10 @7xl/root:p-20" id='functional_training'>
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
              src={image6}
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
              Functional <span className="text-gray-500">Training</span>
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
        /*                              Mobility Training                              */
        /* -------------------------------------------------------------------------- */}


        <WrapperHorizontal className="px-5 py-10 @3xl/root:flex-row-reverse items-center justify-between bg-primary-100 @7xl/root:p-20" id='mobility_training'>
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
              src={image2}
              alt="Benefit-graphic"
              className="w-full h-full object-cover object-right rounded-md"
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
              Mobility <span className="text-gray-500">Training</span>
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
        /*                              Strength Training                             */
        /* -------------------------------------------------------------------------- */}


        <WrapperHorizontal className="px-5 py-10 @7xl/root:p-20" id='strength_training'>
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
              src={image1}
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
              Strength <span className="text-gray-500">Training</span>
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

        {/* -------------------------------------------------------------------------- */
        /*                               Balance Training                              */
        /* -------------------------------------------------------------------------- */}


        <WrapperHorizontal className="px-5 py-10 @3xl/root:flex-row-reverse items-center justify-between bg-primary-100 @7xl/root:p-20" id='balance_training'>
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
              src={image5}
              alt="Benefit-graphic"
              className="w-full h-full object-cover object-left rounded-md"
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
              Balance <span className="text-gray-500">Training</span>
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
        /*                                 Stretching                                 */
        /* -------------------------------------------------------------------------- */}


        <WrapperHorizontal className="px-5 py-10 @7xl/root:p-20" id='stretching'>
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
              src={image4}
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
              <span className="text-gray-500">Stretching</span>
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

        {/* -------------------------------------------------------------------------- */
        /*                              Agility Training                               */
        /* -------------------------------------------------------------------------- */}


        <WrapperHorizontal className="px-5 py-10 @3xl/root:flex-row-reverse items-center justify-between bg-primary-100 @7xl/root:p-20" id='agility_training'>
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
              src={image3}
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
              Agility <span className="text-gray-500">Training</span>
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
      </WrapperVertical>
    </section>
  )
}