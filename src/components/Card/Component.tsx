import './styles.css';
import { useState } from 'react';

export interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const Card = ({ imgSrc, title, description }: CardProps) => {
  const [bounds, setBounds] = useState(null);

  const rotateToMouse = (e) => {
    if (!bounds) return; // Make sure bounds are available

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    const cardElement = document.querySelector('.card-container');
    cardElement.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    const glowElement = cardElement.querySelector('.glow');
    glowElement.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  };

  const handleMouseEnter = () => {
    const cardElement = document.querySelector('.card-container');
    const cardBounds = cardElement.getBoundingClientRect();
    setBounds(cardBounds);
    document.addEventListener('mousemove', rotateToMouse);
  };

  const handleMouseLeave = () => {
    document.removeEventListener('mousemove', rotateToMouse);
    const cardElement = document.querySelector('.card-container');
    cardElement.style.transform = '';
    cardElement.querySelector('.glow').style.backgroundImage = '';
  };

  return (
    <div className="card-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="glow"></div>
    </div>
  );
};
