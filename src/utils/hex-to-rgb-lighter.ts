export function hexToRgbLighter(
  hex: string,
  options: { gradient: boolean } = {
    gradient: false,
  }
) {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  const lighterR = Math.min(255, r + (255 - r) * 0.5);
  const lighterG = Math.min(255, g + (255 - g) * 0.5);
  const lighterB = Math.min(255, b + (255 - b) * 0.5);
  if (options?.gradient) {
    const lighterColor = `rgb(${Math.round(lighterR)}, ${Math.round(lighterG)}, ${Math.round(lighterB)})`;
    return `linear-gradient(to right, ${hex}, ${lighterColor})`;
  }
  return `rgb(${Math.round(lighterR)}, ${Math.round(lighterG)}, ${Math.round(lighterB)})`;
}
