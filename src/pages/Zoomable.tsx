import {FC, ReactElement, useState} from "react";

const Zoomable:FC = ():ReactElement  => {
    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className='container' style={{marginTop: '80px',border: '1px solid'}} >
            <div className='img-container' style={{overflow: 'hidden',position: 'relative'}} >
                <img src='https://static.wixstatic.com/media/a7b508_1856c29c865643e7b4925690be99b081~mv2.jpg/v1/fill/w_628,h_625,al_c,q_90,enc_auto/Play-sig-1000.jpg'
                     className='zoomable-image'
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                     style={{transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                         objectFit: 'cover',
                         transition: 'transform 0.5s ease'
                     }}
                     alt=""/>
            </div>
        </div>
    )
}
export default Zoomable;