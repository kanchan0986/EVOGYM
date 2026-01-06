import type { CardContent } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router";
import Button from "../Button/Button";
import { motion } from "motion/react";

export const cardContent: CardContent[] = [
  {
    icon: <HomeModernIcon className="size-6" />,
    heading: "State of Art Facitlities",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, delectus?",
    link: "/benefits#state_of_art_facilities",
  },
  {
    icon: <UserGroupIcon className="size-6" />,
    heading: "100' of Diverse Classes",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ut?",
    link: "/benefits#100_of_diverse_classes",
  },
  {
    icon: <AcademicCapIcon className="size-6" />,
    heading: "Expert and Pro Trainers",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, ullam!",
    link: "/benefits#expert_and_pro_trainers",
  },
];

type Props = {};

export default function Cards({}: Props) {
  return (
    <div className="flex flex-col gap-4 px-4 @3xl/root:flex-row @3xl/root:px-0">
      {cardContent.map((card, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="view"
          viewport={{ once: true, amount: 0.5 }}
          custom={index} // passing the "index" to the custom function which is recieved in "variants's" "view / animate" anonyms function
          variants={{
            hidden: { opacity: 0, y: 10 },
            view: (index: number) => ({
              opacity: 1,
              y: 0,
              transition: { // to perform the staggering effect of the cards
                delay: index * 0.4,
                duration: 0.6,
                ease: "easeIn",
              },
            }),
          }}
          className="group/card flex flex-col items-center justify-between gap-y-4 rounded-md border-[0.1rem] border-gray-500 p-4 transition-[shadow_transform] duration-400 ease-linear hover:bg-gray-50 hover:shadow-[0_0_10px_rgba(0,0,0,0.25)] hover:scale-105"
        >
          <div className="flex flex-col items-center gap-y-1">
            <h3 className="bg-primary-300 mb-3 rounded-full p-4 text-gray-500 transition-[transform_offset] ease-in group-hover/card:scale-110 group-hover/card:bg-gray-500 group-hover/card:text-white group-hover/card:outline-2 outline-gray-500 outline-offset-3">
              {card.icon}
            </h3>
            <h4 className="text-center text-xl font-bold text-gray-500">
              {card.heading}
            </h4>
            <p className="text-center">{card.details}</p>
          </div>
          <Link to={card.link}>
            <Button className="px-3 pt-px pb-0.5 capitalize">Learn More</Button>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
