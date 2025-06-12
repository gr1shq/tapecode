"use client";

import { ReactTyped } from "react-typed";

interface HeroTitleProps {
  strings: string[];
  className: string;
  onTypingComplete?: () => void; // Add callback prop
}

const HeroTitle = ({ strings, className, onTypingComplete }: HeroTitleProps) => {
  return (
    <div>
      <ReactTyped
        strings={strings}
        typeSpeed={40}
        onComplete={onTypingComplete} // Trigger callback when typing finishes
        className={className}
      />
    </div>
  );
};

export default HeroTitle;