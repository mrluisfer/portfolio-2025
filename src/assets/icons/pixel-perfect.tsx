export default function PixelPerfect({
  size = 32,
  color = '#598DF6',
}: {
  size: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 16V31L3 23.5V8.5L16 16Z" fill={color} fillOpacity="0.8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 8.5L16 1L3 8.5V23.5L16 31L29 23.5V8.5ZM16 2.15449L4 9.07756V22.9224L16 29.8455V16L27.9994 9.07724L16 2.15449ZM28 22.9224L17 29.2686V22.9614L23 19.49V13.116L28 10.2314V22.9224ZM17 21.8061L22 18.9132V13.6996L22.0106 13.6868L17 16.5776V21.8061Z"
        fill="#D7E1F5"
      />
    </svg>
  );
}
