/* -------------------------------------------------------------------------- */
/*                              Carousel Type One                             */
/* -------------------------------------------------------------------------- */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Carousel } from "@/shared/types";
import Button from "../Button/Button";
import { StopCircleIcon } from "@heroicons/react/24/solid";

type Props = { images: Carousel[] };

export default function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [isForward, setIsForward] = useState<boolean>(true);

  /* --------------------------- Auto-Advance Logic --------------------------- */
  useEffect(() => {
    if (isInteracting) return; // stop the auto-advance feature if interacting

    setIsForward(true); // keeps the auto-advance initially and always forward moving

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length); // keeps changing every 5 seconds
    }, 5000);

    return () => clearInterval(timer);
  }, [isInteracting]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); // + images.length handles the negative value (if comes)
    setIsForward(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsForward(true);
  };

  const handleStepper = (idx: number) => {
    setCurrentIndex(idx % images.length);
    idx > currentIndex ? setIsForward(true) : setIsForward(false); // if clicked index is greater than current index then go forward else go backward
  };

  return (
    <article
      className="relative flex flex-col items-center justify-center"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      <AnimatePresence>
        <div className="relative h-64 w-full overflow-hidden rounded-md @3xl/root:w-9/12">
          <motion.div
            className="relative flex justify-center gap-x-4"
            key={currentIndex} // re-trigger animation
            initial="initial"
            animate="animate"
            exit="exit"
            variants={
              isForward
                ? {
                    initial: { opacity: 0.5, x: 100 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0.5, x: -100 },
                  }
                : {
                    initial: { opacity: 0.5, x: -100 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0.5, x: 100 },
                  }
            }
            transition={{ duration: 0.6, ease: "easeIn" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              // mobile swipe logic
              const swipe = info.offset.x;
              const speed = info.velocity.x;
              if (swipe > 50 && speed > 500) {
                handlePrev();
              } else if (swipe < -50 && speed < -500) {
                handleNext();
              }
            }}
          >
            {[0, 1, 2].map((offset) => {
              // loop over an array with just 3 items
              const idx = (currentIndex + offset) % images.length; // set current image at the first offset then second image at second position then third at the third position then rotate the loop
              const img = images[idx];
              return (
                <img
                  key={img.id}
                  src={img.url}
                  alt={img.alt}
                  className="w-full rounded-md object-cover @3xl/root:w-1/3"
                />
              );
            })}
          </motion.div>
        </div>
      </AnimatePresence>
      {/* ----------------------------- Action Buttons ----------------------------- */}
      <div className="absolute top-[40%] left-0 hidden w-full items-center justify-between @3xl/root:flex">
        <Button clickHandler={handlePrev}>Prev</Button>
        <Button clickHandler={handleNext}>Next</Button>
      </div>
      {/* -------------------------------- Steppers -------------------------------- */}
      <div className="mt-4 flex items-center justify-center gap-x-0.5">
        {images.map((_, idx) => (
          <div key={idx} onClick={() => handleStepper(idx)}>
            <StopCircleIcon
              className={`size-5 stroke-gray-500 stroke-[0.5px] transition-[color_transform] duration-500 hover:scale-110 active:scale-95 ${idx === currentIndex ? "fill-gray-500" : "fill-secondary-500 hover:fill-primary-500"}`}
            />
          </div>
        ))}
      </div>
    </article>
  );
}




/* -------------------------------------------------------------------------- */
/*                              Carousel Type Two                             */
/* -------------------------------------------------------------------------- */



// import type { Carousel } from "@/shared/types";
// import image1 from "@/assets/image1.png";
// import image2 from "@/assets/image2.png";
// import image3 from "@/assets/image3.png";
// import image4 from "@/assets/image4.png";
// import image5 from "@/assets/image5.png";
// import Button from "../Button/Button";
// import { useEffect, useState } from "react";
// import { motion } from "motion/react";
// import { StopCircleIcon } from "@heroicons/react/24/solid";
// import { useMediaQuery } from "@/hooks/useMediaQuery";

// const images: Carousel[] = [
//   { id: 0, url: image1, alt: "image1" },
//   { id: 1, url: image2, alt: "image2" },
//   { id: 2, url: image3, alt: "image3" },
//   { id: 3, url: image4, alt: "image4" },
//   { id: 4, url: image5, alt: "image5" },
// ];

// type Props = {};

// export default function Carousel({}: Props) {
//   const [imagePosition, setImagePosition] = useState<number[]>([0, 1, 2, 3, 4]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setImagePosition((currImgs) => {
//         return currImgs.map((currImgIdx) => (currImgIdx + 1) % images.length);
//       });
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const isDesktop = useMediaQuery("(min-width: 1295px)");

//   console.log(isDesktop);

//   const handlePrev = () => {
//     setImagePosition((currImgs) => {
//       return currImgs.map((currImgIdx) => (currImgIdx + 4) % images.length);
//     });
//   };

//   const handleNext = () => {
//     setImagePosition((currImgs) => {
//       return currImgs.map((currImgIdx) => (currImgIdx + 1) % images.length);
//     });
//   };

//   const handleStepper = (idx: number) => {
//     setImagePosition((currImgs) => {
//       return currImgs.map(
//         (_, index) => (index + idx + images.length) % images.length,
//       ); // shifts all image positions by idx steps in a circular manner
//     });
//   };

//   const positions = ["center", "left", "left_1", "right_1", "right"];

//   const activeImage = imagePosition[0];

//   return (
//     <article className="flex h-[20vh] @sm/root:h-[30vh] @md/root:h-[50vh] @7xl/root:h-[70vh] flex-col items-center justify-between">
//       {images.map((image, idx) => (
//         <motion.img
//           key={image.id}
//           src={image.url}
//           alt={image.alt}
//           className="absolute w-[40%] object-cover"
//           initial="center"
//           animate={positions[imagePosition[idx]]}
//           variants={
//             !isDesktop
//               ? {
//                   center: { x: "0%", scale: 1.5, zIndex: 5 },
//                   left: { x: "-30%", scale: 1.2, zIndex: 4 },
//                   left_1: { x: "-60%", scale: 0.9, zIndex: 3 },
//                   right_1: { x: "60%", scale: 0.9, zIndex: 2 },
//                   right: { x: "30%", scale: 1.2, zIndex: 4 },
//                 }
//               : {
//                   center: { x: "0%", scale: 1, zIndex: 5 },
//                   left: { x: "-50%", scale: 0.7, zIndex: 4 },
//                   left_1: { x: "-90%", scale: 0.4, zIndex: 3 },
//                   right_1: { x: "90%", scale: 0.4, zIndex: 2 },
//                   right: { x: "50%", scale: 0.7, zIndex: 4 },
//                 }
//           }
//           transition={{ duration: 0.3 }}
//         />
//       ))}
//       <div className="z-10 hidden @7xl/root:flex w-[97vw] grow items-center justify-between">
//         <Button clickHandler={handlePrev}>Prev</Button>
//         <Button clickHandler={handleNext}>Next</Button>
//       </div>
//       <div className="z-10 mt-auto flex items-center justify-center gap-x-0.5">
//         {images.map((_, idx) => (
//           <div key={idx} onClick={() => handleStepper(idx)}>
//             <StopCircleIcon
//               className={`size-5 stroke-gray-500 stroke-[0.5px] transition-[color_transform] duration-500 hover:scale-110 active:scale-95 ${idx === activeImage ? "fill-gray-500" : "fill-secondary-500 hover:fill-primary-500"}`}
//             />
//           </div>
//         ))}
//       </div>
//     </article>
//   );
// }



/* -------------------------------------------------------------------------- */
/*                             Carousel Type Three                            */
/* -------------------------------------------------------------------------- */




// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import type { Carousel } from "@/shared/types";
// import Button from "../Button/Button";
// import { StopCircleIcon } from "@heroicons/react/24/solid";

// type Props = {
//   images: Carousel[];
// };

// export default function Carousel({ images }: Props) {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isInteracting, setIsInteracting] = useState<boolean>(false);
//   const [isForward, setIsForward] = useState<boolean>(true);

//   /* --------------------------- Auto-Advance Logic --------------------------- */

//   useEffect(() => {
//     if (isInteracting) return; // stop the auto-advance feature if interacting

//     setIsForward(true); // keeps the auto-advance initially and always forward moving

//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length); // keeps changing every 5 seconds
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isInteracting]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); // + images.length handles the negative value (if comes)
//     setIsForward(false);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//     setIsForward(true);
//   };

//   const handleStepper = (idx: number) => {
//     setCurrentIndex(idx % images.length);
//     idx > currentIndex ? setIsForward(true) : setIsForward(false); // if clicked index is greater than current index then true else false
//   };

//   return (
//     <article
//       className="flex flex-col items-center justify-center"
//       onMouseEnter={() => setIsInteracting(true)}
//       onMouseLeave={() => setIsInteracting(false)}
//     >
//       <div className="relative flex h-64 w-4/12 overflow-hidden">
//         <AnimatePresence>
//           {images.map((img, idx) => {
//             if (idx === currentIndex) {
//               return (
//                 <motion.img
//                   key={img.id}
//                   src={img.url}
//                   alt={img.alt}
//                   className="absolute inset-0 size-full object-cover"
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   variants={
//                     isForward
//                       ? {
//                           initial: { opacity: 0, x: 100 },
//                           animate: { opacity: 1, x: 0 },
//                           exit: { opacity: 0, x: -100 },
//                         }
//                       : {
//                           initial: { opacity: 0, x: -100 },
//                           animate: { opacity: 1, x: 0 },
//                           exit: { opacity: 0, x: 100 },
//                         }
//                   }
//                   transition={{ duration: 0.5, ease: "easeIn" }}
//                 />
//               );
//             }
//           })}
//         </AnimatePresence>
//       </div>
//       <div className="z-10 flex w-full items-center justify-between">
//         <Button clickHandler={handlePrev}>Prev</Button>
//         <Button clickHandler={handleNext}>Next</Button>
//       </div>
//       <div className="z-10 mt-auto flex items-center justify-center gap-x-0.5">
//         {images.map((_, idx) => (
//           <div key={idx} onClick={() => handleStepper(idx)}>
//             <StopCircleIcon
//               className={`size-5 stroke-gray-500 stroke-[0.5px] transition-[color_transform] duration-500 hover:scale-110 active:scale-95 ${idx === currentIndex ? "fill-gray-500" : "fill-secondary-500 hover:fill-primary-500"}`}
//             />
//           </div>
//         ))}
//       </div>
//     </article>
//   );
// }
