import {NavLink, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {FC,ReactElement} from "react";

const navLinks = ['Parallax','Carousel','FadeIn','Zoomable','TypingText','RippleEffect','GlassMorphism','Neumorphism','Gears'];

const Nav:FC = ():ReactElement => {
    const[selectedLink, setSelectedLink] = useState('Parallax');

    useEffect (() => {

    },[selectedLink])

    const handleLink = (event:any) => {
        const link =  [...event.target.href].slice(22,42).join('') === '' ? 'Parallax' : [...event.target.href].slice(22,42).join('')
        setSelectedLink(link )
    }

    return (
        <>
            <ul className="nav">
            {navLinks.map((navLink, index) => (
                <li key={index}>
                    <NavLink to={navLink === 'Parallax'? '/' : navLink.toLowerCase()} onClick={handleLink}
                             style={{color: selectedLink.toLowerCase() === navLink.toLowerCase() ? "black" : "#d0021b"}}>
                        {navLink}
                    </NavLink>
                </li>
                ))}
            </ul>
         <Outlet />
        </>
    )
}
export default Nav;