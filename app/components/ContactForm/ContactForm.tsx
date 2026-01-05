import { Form, useFetcher } from 'react-router'
import Button from '../Button/Button'
import { motion } from 'motion/react'
import { useEffect, useRef } from 'react';

type Props = {}

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const fetcher = useFetcher()

    const formIsSubmitting = fetcher.state === 'submitting';

    useEffect(() => {

        if(!formIsSubmitting && fetcher.data) { 
            formRef.current?.reset() 
        }

    }, [formIsSubmitting, fetcher.data])




  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay: 0.4, duration: 0.5}}
        variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
        }}
    >
        <fetcher.Form action='/contact-us' method='POST' ref={formRef} className='flex flex-col gap-y-5 text-white'>
            <input type="text" name="name" id="name" placeholder='Name' className='grow bg-primary-300 rounded-md p-2 text-inherit placeholder:uppercase capitalize inset-shadow-[0_0_10px_rgba(0,0,0,0.15)]' />
            <input type="email" name="email" id="email" placeholder='Email' className='grow bg-primary-300 rounded-md p-2 text-inherit placeholder:uppercase lowercase inset-shadow-[0_0_10px_rgba(0,0,0,0.15)]' />
            <textarea cols={30} rows={10} name="message" id="message" placeholder='Message' className='grow bg-primary-300 rounded-md p-2 text-inherit placeholder:uppercase normal-case inset-shadow-[0_0_10px_rgba(0,0,0,0.15)]' ></textarea>
            <motion.div className="self-center @3xl/root:self-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.8}}
                variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
                }}
            >
                <Button className='w-80 text-inherit uppercase'>Submit</Button>
            </motion.div>
        </fetcher.Form>
    </motion.div>
  )
}