import type { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={10} r={8} fill="#BBB" />
    <path
      stroke="#fff"
      strokeLinecap="square"
      strokeWidth={2}
      d="M10 6v8M14 10H6"
    />
  </svg>
);
export default SvgPlus;
