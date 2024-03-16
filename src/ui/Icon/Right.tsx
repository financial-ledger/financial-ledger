import type { SVGProps } from 'react';
const SvgRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
      d="m14 6 6 6-6 6"
    />
  </svg>
);
export default SvgRight;
