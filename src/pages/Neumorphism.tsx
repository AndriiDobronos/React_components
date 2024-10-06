import React, {useRef, useEffect, useState} from 'react';

interface SphereImageProps {
    src: string;
    alt: string;
}

const SphereImage: React.FC<SphereImageProps> = ({ src, alt }) => {
    const imgRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const img = imgRef.current;

        if (img) {
            const width = img.offsetWidth;
            const height = img.offsetHeight;
            const centerX = width / 2;
            const centerY = height / 2;

            const handleMouseMove = (event: MouseEvent) => {
                const { offsetX: x, offsetY: y } = event;

                // Вычисляем расстояние от центра в диапазоне от -1 до 1
                const deltaX = (x - centerX) / centerX;
                const deltaY = (y - centerY) / centerY;

                // Определяем степень масштабирования по осям X и Y, чтобы создать эффект сферического искажения
                const scaleX = 1 + (0.5 * deltaX * deltaX);
                const scaleY = 1 + (0.5 * deltaY * deltaY);

                // Применяем трансформации
                img.style.transform = `scale(${scaleX}, ${scaleY})`;
            };

            const resetScale = () => {
                img.style.transform = 'scale(1, 1)';
            };

            img.addEventListener('mousemove', handleMouseMove);
            img.addEventListener('mouseleave', resetScale);

            return () => {
                img.removeEventListener('mousemove', handleMouseMove);
                img.removeEventListener('mouseleave', resetScale);
            };
        }
    }, []);

    return (
        <div style={styles.container}>
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                style={styles.image}
            />
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '90px',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#E0E5EC',
        overflow: 'hidden',
    },
    image: {
        width: '400px',
        height: '400px',
        borderRadius: '50%', // делает изображение круглым
        objectFit: 'cover',
        transition: 'transform 0.1s ease',
        boxShadow: '5px 5px 5px 5px rgba(55, 55, 55, 0.3)',
    },
    button: {
        padding: '20px 40px',
        borderRadius: '12px',
        fontSize: '16px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: 'none',
        backgroundColor: '#E0E5EC',
        color: '#333',
        marginBottom: '20px',
    },
    embossed: {
        boxShadow: '6px 6px 16px #a3b1c6, -6px -6px 16px #ffffff',
    },
    debossed: {
        boxShadow: 'inset 6px 6px 16px #a3b1c6, inset -6px -6px 16px #ffffff',
    },
};
const src0 = 'https://static.wixstatic.com/media/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg/v1/fill/w_980,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg'
const src1 = 'https://static.wixstatic.com/media/3675c3_b854e59df065445a91b60ffd3f639832~mv2_d_1200_1200_s_2.png/v1/fill/w_491,h_491,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3675c3_b854e59df065445a91b60ffd3f639832~mv2_d_1200_1200_s_2.png'
const src2 = 'https://static.wixstatic.com/media/84770f_3ebbf7ac3e26427b83ca50c82aabaaf8~mv2.png/v1/fill/w_1899,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_3ebbf7ac3e26427b83ca50c82aabaaf8~mv2.png'
const src3 = 'https://static.wixstatic.com/media/c837a6_f884fc717355463cbbf3ff1446ffb844~mv2.jpg/v1/fill/w_613,h_1226,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_f884fc717355463cbbf3ff1446ffb844~mv2.jpg'
const src4 = 'https://static.wixstatic.com/media/c837a6_ec3f3132518d409f9b6a458252ebd997~mv2.jpg/v1/fill/w_1536,h_518,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_ec3f3132518d409f9b6a458252ebd997~mv2.jpg'
const src5 = 'https://static.wixstatic.com/media/ca2a5a_4f308b3df1784fa39e4197b23468dd66.jpg/v1/fill/w_956,h_521,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ca2a5a_4f308b3df1784fa39e4197b23468dd66.jpg'
const images = [
    'https://static.wixstatic.com/media/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg/v1/fill/w_980,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg',
    'https://static.wixstatic.com/media/3675c3_b854e59df065445a91b60ffd3f639832~mv2_d_1200_1200_s_2.png/v1/fill/w_491,h_491,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3675c3_b854e59df065445a91b60ffd3f639832~mv2_d_1200_1200_s_2.png',
    'https://static.wixstatic.com/media/c837a6_ec3f3132518d409f9b6a458252ebd997~mv2.jpg/v1/fill/w_1536,h_518,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_ec3f3132518d409f9b6a458252ebd997~mv2.jpg',
    'https://static.wixstatic.com/media/c837a6_f884fc717355463cbbf3ff1446ffb844~mv2.jpg/v1/fill/w_613,h_1226,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_f884fc717355463cbbf3ff1446ffb844~mv2.jpg',
    'https://static.wixstatic.com/media/ca2a5a_4f308b3df1784fa39e4197b23468dd66.jpg/v1/fill/w_956,h_521,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ca2a5a_4f308b3df1784fa39e4197b23468dd66.jpg',
    'https://static.wixstatic.com/media/1e47b2_832b0bb8d00d4239a45c78ffc5060194.jpg/v1/fill/w_406,h_375,al_c,q_85,usm_0.66_1.00_0.01/1e47b2_832b0bb8d00d4239a45c78ffc5060194.webp',
]

const Neumorphism: React.FC = () => {
    const [src, setSrc] = useState(src0)
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = ()=> {
        setSrc(src === src0 ? src1 :
                    src === src1 ? src2 :
                    src === src2 ? src3 :
                    src === src3 ? src4 :
                    src === src4 ? src5 : src0)
    }

    const handleRevertClick = ()=> {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);

        // const isLastSlide = currentIndex === images.length - 1;
        // const newIndex = isLastSlide ? 0 : currentIndex + 1;
        // setCurrentIndex(newIndex);
        setSrc(images[currentIndex]);
    }

    return (
        <div style={styles.container}>
            <button style={{ ...styles.button, ...styles.embossed }} onClick={handleClick} >Embossed Button</button>
            <button style={{ ...styles.button, ...styles.debossed }} onClick={handleRevertClick} >Debossed Button</button>
           <SphereImage src={src} alt={'alt'} />
        </div>
    );
};
export default Neumorphism;

