'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import { ReactNode } from 'react';

export interface LazyDomMotionProps {
  children?: ReactNode;
}

export function LazyDomMotion({ children }: LazyDomMotionProps) {
  return (
    <LazyMotion strict features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
