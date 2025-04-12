
import React from 'react';
import PhilosophyPage from './Philosophy';
import FallingFlowers from '@/components/animations/FallingFlowers';

const PhilosophyWithFlowers = () => {
  return (
    <>
      <FallingFlowers flowerType="🌼" flowerCount={22} />
      <PhilosophyPage />
    </>
  );
};

export default PhilosophyWithFlowers;
