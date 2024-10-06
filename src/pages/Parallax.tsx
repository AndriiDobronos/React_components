import {FC,ReactElement} from "react";
import {useEffect, useState} from "react";

const Parallax:FC = ():ReactElement  => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setOffsetY(scrollPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const parallaxStyle = {
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
        backgroundImage: `url(${"https://static.wixstatic.com/media/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg/v1/fill/w_980,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg"})`,
        //backgroundAttachment: "fixed",
        backgroundPositionY: offsetY * 0.5, // Фон прокручивается в два раза медленнее
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        position: "relative",
        zIndex: -1
    };

    const contentStyle:{position:string,zIndex:number,padding:string,color:string} = {
        position: "relative",
        zIndex: 1,
        padding: "50px 20px",
        color: "#fff"
    };

    return (
        <div className='home-container' style={{}}>
            <div className="parallaxStyle" style={{backgroundPositionY: offsetY * 0.5}}>
                <h1 style={{}}>Test content</h1>
                <h2>Parallax effect</h2>
            </div>
            <div className="contentStyle" style={{}} >
                <h1 style={{color:"red"}}>Test content</h1>
            </div>
            <img src="https://static.wixstatic.com/media/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg/v1/fill/w_980,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg"
                 alt="" style={{}}/>
        </div>
    )
}
export default Parallax;