import React from 'react'

type Props = {
    className?: string;
    children: React.ReactNode;
    id?: string;
}

export default function WrapperVertical({children, className, id}: Props) {
    const classes = `flex flex-col items-center justify-between @3xl/root:flex-row @3xl/root:flex-wrap ${className}`
  return (
    <section className={classes} id={id}>{children}</section>
  )
}