import type { JSX } from "react";

export type Route = {
    to: string;
    label: string;
}

export type Words = string;

export type CardContent = {
    icon: JSX.Element;
    heading: string;
    details: string;
    link: string;
}

export type Carousel = {
    url: string;
    id: number;
    alt: string;
}