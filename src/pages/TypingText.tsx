import React, { useState, useEffect, useRef } from 'react';
import './TypingText.style.css';

interface TypingEffectProps {
    text: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const index = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + ((index.current === 0) ? (text.charAt(0) + text.charAt(1)) : text.charAt(index.current)) );
            index.current += 1;
            if (index.current === text.length) {
                clearInterval(intervalId);
            }
        }, 60); // Скорость печатания (50 мс на букву)

        return () => clearInterval(intervalId);
    }, [text]);

    return <p className="typing-effect">{displayedText}</p>;
};

const TypingTextSection: React.FC<{ text: string }> = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Проверка при загрузке страницы

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={ref} className="text-section">
            {isVisible && <TypingEffect text={text} />}
        </div>
    );
};

const TypingText: React.FC<{ paragraphs: string[]}> = ({paragraphs}) => {

    return (
        <>
            <div style={{marginTop:'100px'}} >
                Text
            </div>
            <div className="page" id="page">
                {paragraphs.map((text, index) => (
                    <TypingTextSection key={index} text={text} />
                ))}
            </div>
        </>
    );
};

export default TypingText;