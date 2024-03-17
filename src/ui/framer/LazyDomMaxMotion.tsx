import { ReactNode } from 'react';

import { LazyMotion } from 'framer-motion';

const loadDomMax = () =>
  import('./domMaxAnimation').then((module) => module.default);
interface LazyDomMaxMotionProps {
  children?: ReactNode;
}

export function LazyDomMaxMotion({
  children,
}: LazyDomMaxMotionProps) {
  return <LazyMotion features={loadDomMax}>{children}</LazyMotion>;
}
