import type { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M5 9.667 12 4l7 5.667V21H5z"
    />
    <path stroke="currentColor" strokeWidth={2} d="M10 22v-8h4v8" />
  </svg>
);
export default SvgHome;
