import type { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke="currentColor" strokeWidth={2} d="M3 6h18v15H3z" />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
      d="M4 11h16M9 16h6M8 3v3M16 3v3"
    />
  </svg>
);
export default SvgCalendar;
