import { MutableRefObject } from 'react';
import { colorRegex } from './rgb-hex-regex';

/**
 * Returns the glow color of the SVG Element
 * @example getGlowColor() -> "rgb(240, 219, 79)"
 *
 */
export const getGlowColor = (
  svgElementRef: MutableRefObject<SVGSVGElement | null>
): string | undefined => {
  if (!svgElementRef?.current) {
    console.error('svgRef.current is null');
    return;
  }

  const path = svgElementRef.current.querySelector('path');
  if (!path) return;

  const fill = window.getComputedStyle(path).fill;
  const colorRegex = /^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$|^#([0-9A-Fa-f]{3}){1,2}$/;
  return colorRegex.test(fill) ? fill : undefined;
};
