import {FC,ReactElement,useEffect,useState} from "react";
import  "./FadeIn.style.css";
import {Link} from "react-router-dom";

const images = [
    'https://via.placeholder.com/800x800/FF0000/FFFFFF?text=Image+1',
    'https://via.placeholder.com/800x800/00FF00/FFFFFF?text=Image+2',
    'https://via.placeholder.com/800x800/0000FF/FFFFFF?text=Image+3',
];

const FadeIn:FC = ():ReactElement  => {
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

    const handleScroll = () => {
        images.forEach((_, index) => {
            const element = document.getElementById(`img-${index}`);
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight * 0.75) {
                    setVisibleIndexes((prevIndexes) =>
                        prevIndexes.includes(index) ? prevIndexes : [...prevIndexes, index]
                    );
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Проверка позиции при загрузке страницы
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="indent" style={{height:"100px",marginTop:"100px"}}>
                <Link to={{pathname:'fallenconfetti'}}>
                    Fallen Confetti
                </Link>
            </div>
            <div className="landing-page">

                {images.map((image, index) => (
                    <div
                        key={index}
                        id={`img-${index}`}
                        className={`image-container ${visibleIndexes.includes(index) ? 'visible' : ''}`}
                    >
                        <img src={image} alt={`Landing ${index}`} />
                    </div>
                ))}
            </div>
        </>

    );
}
export default FadeIn;