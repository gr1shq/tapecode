'use client'

import { ReactTyped } from "react-typed";

interface HeroTitleProps {
    strings: string[];
    className: string;
}

const HeroTitle = ({strings, className}: HeroTitleProps) => {

    return (
        <div>
            <ReactTyped strings={strings} typeSpeed={40} className={className} />
        </div>
    )
}

export default HeroTitle