import React from 'react'

type Props = {
    className?: string;
    children: React.ReactNode;
    id?: string;
}

export default function WrapperHorizontal({children, className, id}: Props) {
    const classes = `flex flex-col gap-y-10 items-center justify-between @3xl/root:flex-row @3xl/root:gap-y-0 ${className}`
  return (
    <section className={classes} id={id}>{children}</section>
  )
}