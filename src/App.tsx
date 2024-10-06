import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Nav from "./Nav"
import Parallax from "./pages/Parallax";
import Carousel from "./pages/Carousel";
import FadeIn from "./pages/FadeIn";
import Zoomable from "./pages/Zoomable";
import FallenConfetti from "./pages/FallenConfetti";
import TypingText from "./pages/TypingText";
import RippleEffect from "./pages/RippleEffect";
import GlassMorphism from "./pages/GlassMorphism";
import Neumorphism from "./pages/Neumorphism";
import Gears from "./pages/Gears";
const paragraphs = [
    'This is the first paragraph. It appears with a typing effect.',
    'Here comes the second paragraph. As you scroll down, it will also be typed out letter by letter.',
    'Finally, this is the third paragraph. The effect continues as you keep scrolling.',
    'This is the first paragraph. It appears with a typing effect.',
    'Here comes the second paragraph. As you scroll down, it will also be typed out letter by letter.',
    'Finally, this is the third paragraph. The effect continues as you keep scrolling.',
    'This is the first paragraph. It appears with a typing effect.',
    'Here comes the second paragraph. As you scroll down, it will also be typed out letter by letter.',
    'Finally, this is the third paragraph. The effect continues as you keep scrolling.',
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        children: [
            {
                path: "/",
                element: <Parallax />,
            },
            {
                path: "/carousel",
                element: <Carousel  />
            },
            {
                path: "/fadein",
                element: <FadeIn />,
            },
            {
                path: "/zoomable",
                element: <Zoomable />,
            },
            {
                path: "/typingtext",
                element: <TypingText paragraphs={paragraphs}  />,
            },
            {
                path: "/rippleeffect",
                element: <RippleEffect />,
            },
            {
                path: "/glassmorphism",
                element: <GlassMorphism />,
            },
            {
                path: "/neumorphism",
                element: <Neumorphism />,
            },
            {
                path: "/gears",
                element: <Gears />,
            },
            {
                path: "/fadein/fallenconfetti",
                element: <FallenConfetti />,
            },
            {
                path: "*",
                element: (
                    <h2>Error</h2>
                )
            }
        ]
    },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <RouterProvider router={router} />

        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}

      </header>
    </div>
  );
}

export default App;
