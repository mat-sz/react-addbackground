import React, { useEffect, useRef } from 'react';
import { addBackground, BackgroundControls } from 'addbackground';
import { backgrounds } from 'addbackground/lib/backgrounds';

export type BackgroundSizeType = 'fill' | { width: number; height: number };

export interface BackgroundProps {
  type: keyof typeof backgrounds;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  className?: string;
  size?: BackgroundSizeType;
}

const updateSize = (
  canvas: HTMLCanvasElement | null,
  size: BackgroundSizeType
) => {
  if (!canvas) {
    return;
  }

  if (size === 'fill') {
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.right = '0';
    canvas.style.bottom = '0';
    canvas.width = canvas.parentElement?.clientWidth || 0;
    canvas.height = canvas.parentElement?.clientHeight || 0;
  } else {
    canvas.style.position = 'relative';
    canvas.style.top = '';
    canvas.style.left = '';
    canvas.style.right = '';
    canvas.style.bottom = '';
    canvas.width = size.width;
    canvas.height = size.height;
  }
};

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
    if (!canvasRef.current) {
      return;
    }

    updateSize(canvasRef.current, size);
  }, [size]);

  useEffect(() => {
    const onResize = () => {
      updateSize(canvasRef.current, size);
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [size]);

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

  return <canvas ref={canvasRef} className={className}></canvas>;
};
