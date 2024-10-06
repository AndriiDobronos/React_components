import React, { useState } from 'react';
import './Carousel.css';

interface CarouselProps {
    images: string[];
}

const images = [
    'https://via.placeholder.com/600x400/0000FF/808080?text=Slide+1',
    'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/600x400/00FF00/000000?text=Slide+3',
    'https://via.placeholder.com/600x400/808080/0000FF?text=Slide+4',
    'https://static.wixstatic.com/media/a7b508_7a5bd9283fa945c9aaf96afb91816039~mv2.jpg/v1/fill/w_620,h_625,al_c,q_90,enc_auto/whitney-1500-sig.jpg',
    'https://static.wixstatic.com/media/a7b508_24ca0edb9ee64b0c87d5eceae6ab4814~mv2.jpg/v1/fill/w_665,h_670,al_c,q_90,enc_auto/higher-note-2000-scribble.jpg',
    'https://static.wixstatic.com/media/a7b508_6af545f03db14ca88ad6e966a2b42493~mv2.jpg/v1/fill/w_675,h_675,al_c,q_90,enc_auto/Beloveds-sig-1000.jpg',
    'https://static.wixstatic.com/media/a7b508_9185024075094509ae0854c6166bbe75~mv2.jpg/v1/fill/w_618,h_615,al_c,q_90,enc_auto/Synth-sig-1000.jpg',
    'https://static.wixstatic.com/media/a7b508_11a845e0267c47d38876e49ea4849b6e~mv2.jpg/v1/fill/w_708,h_705,al_c,q_90,enc_auto/Pop-sig-1000.jpg',
    'https://static.wixstatic.com/media/a7b508_f2d965d7d0624345a3d15ca3db960b6d~mv2.jpg/v1/fill/w_608,h_608,al_c,q_90,enc_auto/Conmpletion-sig-1000.jpg',
    'https://static.wixstatic.com/media/a7b508_dbe5c24d112d47c59a1541ca81bf9e8c~mv2.jpg/v1/fill/w_750,h_750,al_c,q_90,enc_auto/Moon-sig-1000.jpg',
    'https://static.wixstatic.com/media/a7b508_1856c29c865643e7b4925690be99b081~mv2.jpg/v1/fill/w_628,h_625,al_c,q_90,enc_auto/Play-sig-1000.jpg',
    'https://static.wixstatic.com/media/a7b508_48d8b829773a4afd89e517a351f7ca3a~mv2.gif',
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                <button className="arrow left-arrow" onClick={goToPrevious}>
                    ❮
                </button>

                <div className="carousel-slide">
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                </div>

                <button className="arrow right-arrow" onClick={goToNext}>
                    ❯
                </button>
            </div>

            <div className="indicators">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
