import { motion } from 'motion/react';
import {twMerge} from 'tailwind-merge';

type Props = {
    children: React.ReactNode;
    className?: string;
    clickHandler?: () => void
}

export default function Button({children, className, clickHandler}: Props) {
  return (
          <motion.button
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className={twMerge('bg-secondary-500 hover:bg-primary-500 cursor-pointer rounded-sm px-4 py-2 text-gray-500 hover:text-white hover:shadow-sm', className)}
            onClick={clickHandler}
          >
            {children}
          </motion.button>
  )
}