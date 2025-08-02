
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Handle cursor position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Handle hover state for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Hide when cursor leaves window
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Only render on client side
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''} ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default CustomCursor;
