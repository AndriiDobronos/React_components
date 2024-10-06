import React, { useRef, useEffect } from 'react';

interface Confetti {
    x: number;
    y: number;
    r: number; // Радиус конфетти
    d: number; // Скорость падения
    color: string;
    tilt: number; // Наклон конфетти
}

interface ConfettiComponentProps {
    drawShape?: boolean
}

const ConfettiComponent: React.FC<ConfettiComponentProps> = ({drawShape}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const confettiCount = 150;
    const colors = ['#FFC700', '#FF0000', '#2E3192', '#41BBC7'];

    const createConfetti = (): Confetti[] => {
        return Array.from({ length: confettiCount }).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight - window.innerHeight,
            r: Math.random() * 6 + 4,
            d: Math.random() * confettiCount,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.floor(Math.random() * 10) - 10,
        }));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        let confetti = createConfetti();
        let animationFrameId: number;

        const draw = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            confetti.forEach((c) => {
                ctx.beginPath();
                ctx.arc(c.x, drawShape ? canvas.height - c.y : c.y, c.r, 0, Math.PI * 2, false);
                ctx.fillStyle = c.color;
                ctx.fill();
                c.y += Math.cos(c.d) + 1 + c.r / 2;
                c.x += Math.sin(c.d);
                c.tilt += Math.sin(c.d);
                if (c.y > canvas.height) {
                    c.y = -10;
                    c.x = Math.random() * canvas.width;
                }
            });
            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => cancelAnimationFrame(animationFrameId);
    }, [drawShape]);

    return (
        <>
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
                style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}

            />
            <p>{`${drawShape}`}</p>
        </>

    );
};

export default ConfettiComponent;
