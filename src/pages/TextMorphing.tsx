import React, { useState } from 'react';
import './TextMorphing.css';

interface TextMorphingProps {
    text: string;
}

const TextMorphing: React.FC<TextMorphingProps> = ({ text }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    return (
        <div
            className={`text-morphing ${hovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text.split('').map((char, index) => (
                <span key={index} className="text-char">
          {char}
        </span>
            ))}
        </div>
    );
};

export default TextMorphing;
