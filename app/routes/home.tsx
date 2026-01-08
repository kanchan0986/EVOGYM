import { Link } from "react-router";
import type { Route } from "./+types/home";
import heroImage from "@/assets/HomePageGraphic.png";
import { motion } from "motion/react";
import Typewriter from "@/components/Typewriter/Typewriter";
import Marquee from "@/components/Marquee/Marquee";
import Cards from "@/components/Cards/Cards";
import type { Carousel as CarouselType, Words } from "@/shared/types";
import Button from "@/components/Button/Button";
import benefitsGraphic from "@/assets/BenefitsPageGraphic.png";
import Carousel from "@/components/Carousel/Carousel";
import contactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import ContactForm from "@/components/ContactForm/ContactForm";
import WrapperVertical from "@/components/Wrapper/WrapperVertical";

const images: CarouselType[] = [
  {
    id: 0,
    url: image1,
    alt: "image1",
    link: "/our-classes#strength_training",
    details: {
      title: "strength training",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, molestiae.",
    },
  },
  {
    id: 1,
    url: image2,
    alt: "image2",
    link: "/our-classes#mobility_training",
    details: { title: "mobility training" },
  },
  {
    id: 2,
    url: image3,
    alt: "image3",
    link: "/our-classes#agility_training",
    details: {
      title: "agility training",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis similique facilis nihil et totam exercitationem",
    },
  },
  {
    id: 3,
    url: image4,
    alt: "image4",
    link: "/our-classes#stretching",
    details: {
      title: "stretching",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis error vel accusantium culpa delectus.",
    },
  },
  {
    id: 4,
    url: image5,
    alt: "image5",
    link: "/our-classes#balance_training",
    details: { title: "balance training" },
  },
  {
    id: 5,
    url: image6,
    alt: "image6",
    link: "/our-classes#functional_training",
    details: {
      title: "functional training",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae atque esse deleniti.",
    },
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EVOGYM | Home" },
    { name: "description", content: "Evolutionary Fitness." },
  ];
}

type Props = {};

export const words: Words[] = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam aliquid labore nihil.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed unde quibusdam debitis.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, sapiente.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis porro voluptatu.",
];

export default function Home({}: Props) {
  return (
    <section className="mt-16 overflow-hidden py-10 @3xl/root:py-0">
      {/* -------------------------------------------------------------------------- */
      /*                                Hero section                                */
      /* -------------------------------------------------------------------------- */}

      <WrapperVertical className="px-5 @7xl/root:pr-18">
        <motion.div
          className="flex flex-col gap-y-8 @3xl/root:w-8/12 @7xl/root:bg-[url(@/assets/EvolveText.png)] @7xl/root:bg-no-repeat @7xl/root:pl-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {/* -------------------------------- Hero Text ------------------------------- */}

          <motion.div
            className="flex flex-col gap-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="@7xl/root:pt-20">
              <h1 className="font-montserrat text-6xl font-extrabold text-gray-500 uppercase">
                Evogym
              </h1>
              <h5 className="text-4xl font-extralight text-gray-500">
                evolutionary fittness.
              </h5>
            </div>
            <Typewriter words={words} className="text-gray-500" />
          </motion.div>

          {/* Action buttons */}

          <motion.div
            className="flex items-center gap-x-4"
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
              <Button className="capitalize">join now</Button>
            </Link>
            <Link
              to="/benefits"
              className="hover:text-primary-500 active:text-primary-500 text-gray-500 underline decoration-[0.01rem] underline-offset-3"
            >
              learn more
            </Link>
          </motion.div>
        </motion.div>

        {/* ------------------------------- Hero Banner ------------------------------ */}

        <div className="@3xl/root:w-4/12">
          <motion.img
            src={heroImage}
            alt="hero-image"
            className="w-full object-contain"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          />
        </div>
      </WrapperVertical>

      {/* -------------------------------------------------------------------------- */
      /*                           Sponsor Slider Section                           */
      /* -------------------------------------------------------------------------- */}

      <Marquee />

      {/* -------------------------------------------------------------------------- */
      /*                              Benefits section                              */
      /* -------------------------------------------------------------------------- */}

      <WrapperVertical className="mt-16 gap-y-40 px-5 pb-40 @3xl/root:pt-52 @7xl/root:px-20">
        {/* ------------------------------ Cards gallery ----------------------------- */}

        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl font-extrabold text-gray-500 uppercase">
              More than just a Gym.
            </h2>
            <p>
              We provide world class equipments, trainers and classes to get you
              your ultimate fitness goals with ease. We provide true care to
              each and every member.
            </p>
          </div>
          <Cards />
        </div>

        {/* ----------------------------- Happy Member's ----------------------------- */}

        <div className="flex flex-col items-center justify-between gap-y-20 @3xl/root:flex-row">
          {/* ------------------------------ Side Graphic ------------------------------ */}
          <div className="basis-4/12 overflow-hidden">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              src={benefitsGraphic}
              alt="Benefit-graphic"
              className="w-full object-contain"
            />
          </div>
          {/* -------------------------------- Contents -------------------------------- */}
          <div className="flex basis-5/12 flex-col items-start gap-y-16">
            <div className="flex flex-col gap-y-4">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="relative text-3xl font-extrabold text-gray-500 uppercase before:absolute before:-top-20 before:left-0 before:animate-pulse before:content-[url(@/assets/AbstractWaves.png)] @3xl/root:before:-inset-20"
              >
                Millions of happy members getting{" "}
                <span className="text-primary-500">fit</span>.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit culpa deserunt ut veniam obcaecati numquam quisquam
                odio, quam libero porro.
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
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative before:absolute before:-top-7 before:left-32 before:animate-pulse before:content-[url(@/assets/Sparkles.png)]"
            >
              <Link to="#">
                <Button>Join Now</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </WrapperVertical>

      {/* -------------------------------------------------------------------------- */
      /*                             Our Classes Section                            */
      /* -------------------------------------------------------------------------- */}

      <WrapperVertical className="bg-primary-100 gap-y-20 px-5 py-20 @3xl/root:py-30 @7xl/root:px-20">
        {/* --------------------------------- Heading -------------------------------- */}

        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <motion.h2
              className="text-3xl font-extrabold text-gray-500 uppercase"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Our Classes
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              ad asperiores, quae voluptates nobis, dolorem veritatis voluptas
              quisquam ipsum sit officia architecto sequi aperiam nihil!
            </motion.p>
          </div>
        </div>

        {/* -------------------------------- Carousel -------------------------------- */}

        <Carousel images={images} />
      </WrapperVertical>

      {/* -------------------------------------------------------------------------- */
      /*                              Join Now Section                              */
      /* -------------------------------------------------------------------------- */}

      <WrapperVertical className="gap-y-20 bg-position-[bottom_2rem_right_2rem] px-5 py-20 @3xl/root:py-30 @7xl/root:bg-[url(@/assets/EvolveText.png)] @7xl/root:bg-no-repeat @7xl/root:px-20">
        <div className="flex flex-col items-start justify-between gap-y-20 @3xl/root:flex-row">
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
    </section>
  );
}
