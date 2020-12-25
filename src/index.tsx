import React, { useEffect, useRef } from 'react';
import { addBackground, BackgroundControls } from 'addbackground';
import { backgrounds } from 'addbackground/lib/backgrounds';

export interface BackgroundProps {
  type: keyof typeof backgrounds;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  className?: string;
  size?: 'fill' | { width: number; height: number };
}

export const Background: React.FC<BackgroundProps> = ({
  type,
  primaryColor,
  secondaryColor,
  backgroundColor,
  className,
  size = 'fill'
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
  }, [type, primaryColor, secondaryColor, backgroundColor]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    if (size === 'fill') {
      canvasRef.current.style.position = 'absolute';
      canvasRef.current.style.top = '0';
      canvasRef.current.style.left = '0';
      canvasRef.current.style.right = '0';
      canvasRef.current.style.bottom = '0';
      canvasRef.current.width =
        canvasRef.current.parentElement?.clientWidth || 0;
      canvasRef.current.height =
        canvasRef.current.parentElement?.clientHeight || 0;
    } else {
      canvasRef.current.style.position = 'relative';
      canvasRef.current.style.top = '';
      canvasRef.current.style.left = '';
      canvasRef.current.style.right = '';
      canvasRef.current.style.bottom = '';
      canvasRef.current.width = size.width;
      canvasRef.current.height = size.height;
    }
  }, [size]);

  return <canvas ref={canvasRef} className={className}></canvas>;
};
