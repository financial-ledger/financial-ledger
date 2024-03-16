import type { SVGProps } from 'react';
const SvgFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke="currentColor" strokeWidth={2} d="M4 4h16v16H4z" />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 10h6M9 14h3"
    />
  </svg>
);
export default SvgFeed;
