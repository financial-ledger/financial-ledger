import type { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6.666 10 2.5 2.5 4.167-5"
    />
  </svg>
);
export default SvgCheck;
