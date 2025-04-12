
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Flower {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  rotation: number;
  size: number;
}

const FallingFlowers = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  
  useEffect(() => {
    // Create initial set of flowers
    const initialFlowers = Array.from({ length: 15 }, (_, i) => createFlower(i));
    setFlowers(initialFlowers);
    
    // Add a new flower every 2 seconds
    const interval = setInterval(() => {
      setFlowers(prev => {
        // Remove flowers that are likely off-screen (older than 10 seconds)
        const filtered = prev.filter(flower => 
          Date.now() - flower.id < 10000
        );
        
        // Add a new flower
        return [...filtered, createFlower(Date.now())];
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const createFlower = (id: number): Flower => ({
    id,
    left: Math.random() * 100, // position across the width (0-100%)
    animationDuration: 5 + Math.random() * 10, // between 5-15 seconds to fall
    delay: Math.random() * 5, // delay start by 0-5 seconds
    rotation: Math.random() * 360, // initial rotation
    size: 0.6 + Math.random() * 0.8, // size between 0.6-1.4em
  });
  
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="absolute top-0 flower animate-float"
          style={{
            left: `${flower.left}%`,
            animationDuration: `${flower.animationDuration}s`,
            animationDelay: `${flower.delay}s`,
            transform: `rotate(${flower.rotation}deg)`,
            fontSize: `${flower.size}em`
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default FallingFlowers;
