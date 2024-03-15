'use client'
import {useState} from 'react';

type Props = {
  logo: string,
  width: string;
  height: string;
  transform: string;
}

export const Cube = ({logo, width, height, transform,}: Props) => {
    const [rotateX, setRotateX] = useState<number>(35);
    const [rotateY, setRotateY] = useState<number>(-45);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const x = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * 360;
      const y = (e.nativeEvent.offsetY / e.currentTarget.offsetHeight) * 360;
      setRotateX(y);
      setRotateY(x);
    };
  
    return (
      <div
        className="cube"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` ,
          width: `${width}`, height: `${height}`

        }}
        onMouseMove={handleMouseMove}
      >
        <div className="cube__face" style={{transform: `translateZ(${transform})` }}>
          <img src={logo} alt="Cube face" className="w-full h-full object-cover" />
        </div>
        <div className="cube__face" style={{transform: `rotateY(180deg) translateZ(${transform})` }} >
          <img src={logo} alt="Cube face" className="w-full h-full object-cover" />
        </div>
        <div className="cube__face" style={{transform: `rotateY(90deg) translateZ(${transform})` }}>
          <img src={logo} alt="Cube face" className="w-full h-full object-cover" />
        </div>
        <div className="cube__face" style={{transform: `rotateY(-90deg) translateZ(${transform})` }}>
          <img src={logo} alt="Cube face" className="w-full h-full object-cover" />
        </div>
        <div className="cube__face" style={{transform: `rotatex(90deg) translateZ(${transform})` }}>
          <img src={logo} alt="Cube face" className="w-full h-full object-cover" />
        </div>
        <div className="cube__face" style={{transform: `rotatex(-90deg) translateZ(${transform})` }}>
          <img src={logo} alt="Cube face" className="w-full h-full object-cover" />
        </div>
      </div>
    );
  };