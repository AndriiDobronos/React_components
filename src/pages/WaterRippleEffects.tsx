import React, { useState, useEffect } from 'react';
import './WaterRippleEffect.css';

const WaterRippleEffect: React.FC = () => {
    const [ripples, setRipples] = useState<{ x: number, y: number }[]>([]);
    const [isContainer, setIsContainer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (event.clientY > 100) {
                setIsContainer(true);
            } else {
                setIsContainer(false);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setRipples([...ripples, { x , y }]);

        setTimeout(() => {
            setRipples(ripples => ripples.slice(1));
        }, 5000);
    };

    const createArrDelay = ()=> {
        const delay = 0.2;
        const arrDelay = [];
        for(let i=0; i<11; i++){
            arrDelay.push(delay*i)
        }
        return arrDelay
    };
    const arrDelay = createArrDelay();

    return (
        <div className="ripple-container" onClick={handleClick}
        style={{zIndex: isContainer ? '1' : '-1'}} >
            <p style={{marginTop: '90px'}}>{'x:'}{ripples.slice(0)[0]?.x}</p>
            <p>{'y:'}{ripples[0]?.y}</p>
            <h1>Water Ripple Effect</h1>
            {ripples.map((ripple, index) => (
                <div key={index}>
                    {arrDelay.map((delay,index)=>(
                        <span key={index}
                              className="ripple"
                              style={{left: ripple.x, top: ripple.y,
                                  fontSize: '2px',color: 'red',
                                  backgroundColor: `rgba(0,${delay*100}, 255, 0.7)`,
                                  boxShadow: '0 0 5px 2px rgba(255, 255, 255, 0.3)',
                                  animationDelay: `${delay}s`}}
                    >{index}</span>))}
                </div>
            ))}
        </div>
    );
};

export default WaterRippleEffect;
