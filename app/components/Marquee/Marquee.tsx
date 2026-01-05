import redbull from "@/assets/SponsorRedBull.png";
import forbes from "@/assets/SponsorForbes.png";
import fortune from "@/assets/SponsorFortune.png";
import { motion } from 'motion/react'

const slidingImages = [
  { src: redbull, alt: "redbull" },
  { src: forbes, alt: "forbes" },
  { src: fortune, alt: "fortune" },
];

type Props = {};

export default function Marquee({}: Props) {
  return (
    <motion.article initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.1, duration: 0.5, ease: "easeIn"}} className="bg-primary-300/50 absolute bottom-0 left-0 hidden h-24 w-full overflow-x-hidden shadow-[0_0_6px_rgba(0,0,0,0.25)] @7xl/root:flex">
      <div className="animate-marquee flex w-max items-center justify-between hover:[animation-play-state:paused]">
        {[ // de-structuring the same array 4 times to keep the same items in a loop
          ...slidingImages,
          ...slidingImages,
          ...slidingImages,
          ...slidingImages,
        ].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-9 w-64 shrink-0 grow-0 basis-auto px-20" // managing the flickering of the loop with these classes
          />
        ))}
      </div>
    </motion.article>
  );
}
