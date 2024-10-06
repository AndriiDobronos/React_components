import React, { useRef, useEffect } from 'react';
import decor from "./decor13.png"

const WaterRippleEffect: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const intervalRef = useRef<number | null>(null);
    //const imageUrl =  'https://static.wixstatic.com/media/a7b508_1856c29c865643e7b4925690be99b081~mv2.jpg/v1/fill/w_628,h_625,al_c,q_90,enc_auto/Play-sig-1000.jpg';
    // Замените на нужное изображение
    //const imageUrl = 'https://example.com/your-image.jpg';
    const imageUrl = decor;
    //const imageUrl = 'https://via.placeholder.com/600x400/0000FF/808080?text=Slide+1';

    useEffect(() => {
        const canvas = canvasRef.current;
//        const ctx = canvas?.getContext('2d');
//        const img = new Image();
//
//         img.src = imageUrl;
//         img.onload = () => {
//             if (ctx && canvas) {
//                 canvas.width = img.width;
//                 canvas.height = img.height;
//
//                 ctx.drawImage(img, 0, 0);
//
//                 const width = canvas.width;
//                 const height = canvas.height;
//                 const halfWidth = width >> 1;
//                 const halfHeight = height >> 1;
//                 const size = width * (height + 2) * 2;
//                 let ripplemap = new Uint32Array(size);
//                 let lastMap = new Uint32Array(size);
//                 let ripple = ctx.getImageData(0, 0, width, height);
//                 let rippleData = ripple.data;
//                 let texture = ctx.getImageData(0, 0, width, height);
//                 let textureData = texture.data;
//
//                 const drop = (x: number, y: number) => {
//                     for (let j = y - 5; j < y + 5; j++) {
//                         for (let k = x - 5; k < x + 5; k++) {
//                             ripplemap[width * j + k] += 512;
//                         }
//                     }
//                 };
//
//                 const run = () => {
//                     let i = 0;
//                     let mapIndex = width;
//                     let oldIndex = mapIndex;
//                     let newIndex = mapIndex + width * height;
//                     let pixelIndex = 0;
//
//                     for (let y = 0; y < height; y++) {
//                         for (let x = 0; x < width; x++) {
//                             let data = (ripplemap[oldIndex - width] +
//                                 ripplemap[oldIndex + width] +
//                                 ripplemap[oldIndex - 1] +
//                                 ripplemap[oldIndex + 1]) >> 1;
//
//                             data -= ripplemap[newIndex + i];
//                             data -= data >> 5;
//
//                             ripplemap[newIndex + i] = data;
//
//                             data = 1024 - data;
//
//                             let oldData = lastMap[i];
//                             lastMap[i] = data;
//
//                             if (oldData !== data) {
//                                 const a = (((x - halfWidth) * data) / 1024) << 0;
//                                 const b = (((y - halfHeight) * data) / 1024) << 0;
//
//                                 if (
//                                     x + a >= 0 &&
//                                     x + a < width &&
//                                     y + b >= 0 &&
//                                     y + b < height
//                                 ) {
//                                     const newPixel = (a + x + (b + y) * width) * 4;
//                                     const curPixel = pixelIndex * 4;
//                                     rippleData[curPixel] = textureData[newPixel];
//                                     rippleData[curPixel + 1] = textureData[newPixel + 1];
//                                     rippleData[curPixel + 2] = textureData[newPixel + 2];
//                                 } else {
//                                     rippleData[pixelIndex * 4] = 0;
//                                     rippleData[pixelIndex * 4 + 1] = 0;
//                                     rippleData[pixelIndex * 4 + 2] = 0;
//                                 }
//                             }
//
//                             ++oldIndex;
//                             ++pixelIndex;
//                             ++i;
//                         }
//                     }
//
//                     mapIndex = newIndex;
//                     ctx.putImageData(ripple, 0, 0);
//                 };
//
//                 intervalRef.current = window.setInterval(() => {
//                     drop(Math.random() * width, Math.random() * height);
//                     run();
//                 }, 50);
//
//                 const animate = () => {
//                     run();
//                     requestAnimationFrame(animate);
//                 };
//
//                 animate();
//             }
//         };
//
//         return () => {
//             if (intervalRef.current !== null) {
//                 clearInterval(intervalRef.current);
//             }
//         };

     }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                display: 'block',
                margin: '0 auto',
                background: '#000',
                //background:'rgba(50,50,50,0.1)',
            }}
        />
    );
};

 export default WaterRippleEffect;
//************************************************************************************
// import React, { useRef, useEffect } from 'react';
// import decor from "./decor13.png";
//
// const WaterRippleEffect: React.FC = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const intervalRef = useRef<number | null>(null);
//     //const imageUrl = decor//'https://example.com/your-image.jpg'; // Замените на нужное изображение
//     const imageUrl = 'https://via.placeholder.com/600x400/0000FF/808080?text=Slide+1';
//
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas?.getContext('2d');
//         const img = new Image();
//
//         img.src = imageUrl;
//         img.onload = () => {
//             if (ctx && canvas) {
//                 canvas.width = img.width;
//                 canvas.height = img.height;
//
//                 ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//
//                 const width = canvas.width;
//                 const height = canvas.height;
//                 const rippleData = new Uint32Array(width * height); // add: const
//                 const texture = ctx.getImageData(0, 0, width, height);
//                 const rippleMap = new Uint32Array(width * height);
//                 const lastMap = new Uint32Array(width * height);
//                 let frame = 0;
//
//                 const draw = () => {
//                     for (let y = 0; y < height; y++) {
//                         for (let x = 0; x < width; x++) {
//                             const idx = y * width + x;
//                             const waveHeight =
//                                 ((rippleMap[idx - 1] +
//                                         rippleMap[idx + 1] +
//                                         rippleMap[idx - width] +
//                                         rippleMap[idx + width]) >>
//                                     1) -
//                                 rippleMap[idx];
//
//                             rippleMap[idx] = waveHeight - (waveHeight >> 4);
//
//                             const t = 1024 - waveHeight;
//                             const offset = ((x + ((rippleMap[idx - 1] - waveHeight) >> 3)) +
//                                     (y + ((rippleMap[idx - width] - waveHeight) >> 3)) * width) *
//                                 4;
//
//                             rippleData[idx] =
//                                 (texture.data[offset] << 24) |
//                                 (texture.data[offset + 1] << 16) |
//                                 (texture.data[offset + 2] << 8) |
//                                 texture.data[offset + 3];
//                         }
//                     }
//
//                     const imageData = ctx.createImageData(width, height);
//                     for (let i = 0; i < rippleData?.length; i++) {
//                         imageData.data[i * 4] = rippleData[i] >> 24;
//                         imageData.data[i * 4 + 1] = (rippleData[i] >> 16) & 0xff;
//                         imageData.data[i * 4 + 2] = (rippleData[i] >> 8) & 0xff;
//                         imageData.data[i * 4 + 3] = rippleData[i] & 0xff;
//                     }
//                     ctx.putImageData(imageData, 0, 0);
//                 };
//
//                 const drop = (x: number, y: number) => {
//                     for (let j = y - 5; j < y + 5; j++) {
//                         for (let k = x - 5; k < x + 5; k++) {
//                             rippleMap[j * width + k] = 512;
//                         }
//                     }
//                 };
//
//                 const animate = () => {
//                     frame++;
//                     if (frame % 60 === 0) {
//                         drop(
//                             Math.floor(Math.random() * width),
//                             Math.floor(Math.random() * height)
//                         );
//                     }
//                     draw();
//                     requestAnimationFrame(animate);
//                 };
//
//                 animate();
//             }
//
//         };
//
//         return () => {
//             if (intervalRef.current !== null) {
//                 clearInterval(intervalRef.current);
//             }
//         };
//     }, []);
//
//
//     return (
//         <>
//             <p>{'rippleData:'}{ `${[0]}` }</p>
//             <canvas
//                 ref={canvasRef}
//                 style={{
//                     display: 'block',
//                     margin: '0 auto',
//                     background: '#000',
//                 }}
//             />
//         </>
//     );
// };
//
// export default WaterRippleEffect;
//**********************************************************************************
// import React, { useRef, useEffect } from 'react';
// import decor from "./decor13.png";
//
// const WaterRippleEffect: React.FC = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const rippleRadiusRef = useRef(0);
//     const rippleActiveRef = useRef(false);
//
//     const imageUrl = decor//'https://example.com/your-image.jpg'; // Замените на нужное изображение
//
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext('2d');
//     const img = new Image();
//
//     useEffect(() => {
//
//
//         img.src = imageUrl;
//         img.onload = () => {
//             if (ctx && canvas) {
//                 canvas.width = img.width;
//                 canvas.height = img.height;
//                 ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//             }
//         };
//     }, []);
//
//     const drawRipple = (x: number, y: number) => {
//         const canvas = canvasRef.current;
//         const ctx = canvas?.getContext('2d');
//         const img = new Image();
//
//         img.src = imageUrl;
//         img.onload = () => {
//             if (ctx && canvas) {
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);
//                 ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//
//                 // Рисуем волновой эффект
//                 ctx.beginPath();
//                 ctx.arc(x, y, rippleRadiusRef.current, 0, Math.PI * 2);
//                 ctx.strokeStyle = 'rgba(120,120, 120, 0.5)';
//                 ctx.stroke();
//             }
//         };
//     };
//
//     const animateRipple = (x: number, y: number) => {
//         rippleActiveRef.current = true;
//         rippleRadiusRef.current = 0;
//
//         const animate = () => {
//             if (!rippleActiveRef.current || rippleRadiusRef.current > canvasRef.current!.width) {
//                 rippleActiveRef.current = false;
//                 return;
//             }
//
//             rippleRadiusRef.current += 2;
//             drawRipple(x, y);
//             requestAnimationFrame(animate);
//         };
//
//         animate();
//     };
//
//     const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
//         const canvas = canvasRef.current;
//         if (canvas) {
//             const rect = canvas.getBoundingClientRect();
//             const x = event.clientX - rect.left;
//             const y = event.clientY - rect.top;
//             animateRipple(x, y);
//         }
//     };
//
//     return (
//         <canvas
//             ref={canvasRef}
//             onClick={handleClick}
//             style={{
//                 display: 'block',
//                 margin: '0 auto',
//                 cursor: 'pointer',
//                 background: '#000',
//             }}
//         />
//     );
// };
//
// export default WaterRippleEffect;
//********************************************************************************************
// import React, { useRef, useEffect } from 'react';
// import decor from "./decor13.png";
//
// const WaterRippleEffect: React.FC = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const rippleRadiusRef = useRef(0);
//     const rippleActiveRef = useRef(false);
//
//     const imageUrl = decor//'https://example.com/your-image.jpg'; // Замените на нужное изображение
//
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext('2d');
//     const img = new Image();
//
//
//     useEffect(() => {
//         img.src = imageUrl;
//         img.onload = () => {
//             if (ctx && canvas) {
//                 canvas.width = img.width;
//                 canvas.height = img.height;
//                 ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//             }
//         };
//     }, [imageUrl]);
//
//     const drawRipple = (x: number, y: number) => {
//         img.src = imageUrl;
//         img.onload = () => {
//             if (ctx && canvas) {
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);
//                 ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//
//                 // Рисуем волновой эффект с градиентом прозрачности
//                 const gradient = ctx.createRadialGradient(
//                     x, y,rippleRadiusRef.current > 30 ? rippleRadiusRef.current - 30 : rippleRadiusRef.current,//
//                     x, y, rippleRadiusRef.current + 10
//                 );
//                 gradient.addColorStop(0, 'rgba(255, 255, 255, 0.01)');
//                 gradient.addColorStop(0.25, 'rgba(255, 255, 255, 0.3)');
//                 gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
//                 gradient.addColorStop(0.75, 'rgba(255, 255, 255, 0.6)');
//                 gradient.addColorStop(1, 'rgba(255, 255, 255, 0.7)');
//
//                 ctx.beginPath();
//                 ctx.arc(x, y, rippleRadiusRef.current + 10, 0, Math.PI * 2);
//                 ctx.fillStyle = gradient;
//                 ctx.fill();
//
//                 // Создаем эффект выпуклости за счет смещения изображения
//                 ctx.save();
//                 ctx.clip();
//                 // ctx.drawImage(
//                 //     canvas,
//                 //     //x - rippleRadiusRef.current, y - rippleRadiusRef.current,
//                 //     x*rippleRadiusRef.current, y*rippleRadiusRef.current,
//                 //     rippleRadiusRef.current * 2, rippleRadiusRef.current * 2,
//                 //     x - rippleRadiusRef.current * 0.6, y - rippleRadiusRef.current * 0.9,
//                 //     rippleRadiusRef.current * 2.2, rippleRadiusRef.current * 2.2
//                 // );
//
//                 ctx.restore();
//             }
//         };
//     };
//
//     const animateRipple = (x: number, y: number) => {
//         rippleActiveRef.current = true;
//         rippleRadiusRef.current = 0;
//
//         const animate = () => {
//             if (!rippleActiveRef.current || rippleRadiusRef.current > canvasRef.current!.width) {
//                 rippleActiveRef.current = false;
//                 return;
//             }
//
//             rippleRadiusRef.current += 1;
//             drawRipple(x, y);
//             requestAnimationFrame(animate);
//         };
//
//         animate();
//     };
//
//     const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
//         const canvas = canvasRef.current;
//         if (canvas) {
//             const rect = canvas.getBoundingClientRect();
//             const x = event.clientX - rect.left;
//             const y = event.clientY - rect.top;
//             animateRipple(x, y);
//         }
//     };
//
//     return (
//         <canvas
//             ref={canvasRef}
//             onClick={handleClick}
//             style={{
//                 display: 'block',
//                 margin: '0 auto',
//                 cursor: 'pointer',
//                 background: '#000'
//             }}
//         />
//     );
// };
//
// export default WaterRippleEffect;