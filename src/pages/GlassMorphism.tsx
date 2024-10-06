import React from 'react';
import TextMorphing from "./TextMorphing";

const GlassmorphismCard: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.glassCard}>
                <h2 style={styles.title}>Glassmorphism Effect</h2>
                <p style={styles.text}>
                    This is an example of a glassmorphism effect using React and TypeScript.
                </p>
            </div>
            <TextMorphing text="Hover over this text!" />
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200vh',
        width: '100%',
        //backgroundImage: 'url(https://example.com/your-background-image.jpg)', // Замените на ваше фоновое изображение
        backgroundImage: 'url(https://static.wixstatic.com/media/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg/v1/fill/w_980,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    glassCard: {
        padding: '20px 30px',
        borderRadius: '15px',
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        maxWidth: '1000px',
        textAlign: 'center',
        position: "fixed",
        bottom: '40vh',
    },
    title: {
        fontSize: '28px',
        marginBottom: '10px',
        color: '#fff',
    },
    text: {
        fontSize: '18px',
        color: '#fff',
    },
};

export default GlassmorphismCard;
