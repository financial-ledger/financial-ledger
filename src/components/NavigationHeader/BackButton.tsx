'use client';

import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes } from 'react';
import SvgLeft from 'src/ui/Icon/Left';
import { Primitive } from '../primitives';

interface NavigationHeaderBackButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function BackButton({
  onClick,
  ...props
}: NavigationHeaderBackButtonProps) {
  const router = useRouter();
  return (
    <Primitive.button
      onClick={(e) => {
        onClick?.(e);
        router.back();
      }}
      {...props}
    >
      <SvgLeft />
    </Primitive.button>
  );
}
