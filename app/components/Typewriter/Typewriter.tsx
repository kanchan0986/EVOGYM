import { useEffect, useState } from "react";
import { motion } from 'motion/react';
import type { Words } from "@/shared/types";


type Props = {
  words: Words[]
  className?: string
}


const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 8;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 8500;



const Typewrite = ({ words, className }: { words: Words[], className?: string}) => {
  const [wordIndex, setWordIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <p className={className}>
        {words[wordIndex].split("").map((letter, letterIndex) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${wordIndex}-${letterIndex}`}
            className="relative"
          >

            {/* Letters */}

            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: letterIndex * LETTER_DELAY,
                duration: 0,
              }}
            >
              {letter}
            </motion.span>

            {/* Typing box after the letters */}

            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: letterIndex * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-px right-0 top-[3px] bg-gray-500"
            />
          </motion.span>
        ))}
    </p>
  );
}




export default function Typewriter({words,className}: Props) {
  return (
    <Typewrite words={words} className={className} />
  );
}