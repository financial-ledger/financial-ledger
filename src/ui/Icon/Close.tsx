import type { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#202020"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6 6 18M6 6l12 12"
    />
  </svg>
);
export default SvgClose;
