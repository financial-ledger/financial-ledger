import type { SVGProps } from 'react';
const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 6-6 6 6 6"
    />
  </svg>
);
export default SvgLeft;
