import {FC, ReactElement, useState} from "react";
import ConfettiComponent from "./ConfettiComponent";

const FallenConfetti:FC = ():ReactElement  => {
    const [isSwitch,setIsSwitch] = useState(false)

    const handleOnClick = ()=> {
        setIsSwitch(!isSwitch)
    }

    return (
        <div className='results-container' >
            <h1 onClick={handleOnClick}
                style={{cursor:"pointer",color: isSwitch ? "red" : "black"}}
            >Press me</h1>
            <ConfettiComponent drawShape={isSwitch} />
        </div>
    )
}
export default FallenConfetti;