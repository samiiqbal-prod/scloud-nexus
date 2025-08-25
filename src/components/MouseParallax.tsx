import { useEffect, useState } from 'react';

interface MouseParallaxProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

export const MouseParallax: React.FC<MouseParallaxProps> = ({ 
  children, 
  intensity = 0.5, 
  className = "" 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX - innerWidth / 2) * intensity * 0.01;
      const y = (clientY - innerHeight / 2) * intensity * 0.01;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return (
    <div 
      className={`mouse-parallax ${className}`}
      style={{
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
      }}
    >
      {children}
    </div>
  );
};