import type { SVGProps } from 'react';
const SvgMy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={8}
      height={8}
      x={8}
      y={4}
      stroke="currentColor"
      strokeWidth={2}
      rx={4}
    />
    <path stroke="currentColor" strokeWidth={2} d="M20 22v-6H4v6" />
  </svg>
);
export default SvgMy;
