'use client';

import clsx from "clsx";

export function Header() {
    return (
        <h1 className={clsx(
            "text-xl",
            "font-bold",
            "text-blue-700",
        )}>
            Homesseee
        </h1>
    );
}