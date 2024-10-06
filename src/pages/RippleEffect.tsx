import {FC,ReactElement} from "react";
import WaterRippleEffect from "./WaterRippleEffects";
const RippleEffect:FC = ():ReactElement  => {

    return (
        <div className='popular-container' >
            <WaterRippleEffect />
        </div>
    )
}
export default RippleEffect;