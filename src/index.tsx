import React, { useEffect, useRef } from 'react';
import { addBackground, BackgroundControls } from 'addbackground';
import { backgrounds } from 'addbackground/lib/backgrounds';

export interface BackgroundProps {
  type: keyof typeof backgrounds;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  className?: string;
}

export const Background: React.FC<BackgroundProps> = ({
  type,
  primaryColor,
  secondaryColor,
  backgroundColor,
  className
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundControlsRef = useRef<BackgroundControls>();

  useEffect(() => {
    if (canvasRef.current) {
      backgroundControlsRef.current = addBackground({
        canvas: canvasRef.current,
        type,
        primaryColor,
        secondaryColor,
        backgroundColor
      });
    }

    return () => {
      if (backgroundControlsRef.current) {
        backgroundControlsRef.current.stop();
        backgroundControlsRef.current = undefined;
      }
    };
  });

  return <canvas ref={canvasRef} className={className}></canvas>;
};
