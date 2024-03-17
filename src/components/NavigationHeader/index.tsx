import { HTMLAttributes, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { hstack } from 'styled-system/patterns';
import { BackButton } from './BackButton';
import { Primitive } from '../primitives';

export interface NavigationHeaderProps
  extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  rightSlot?: ReactNode;
  leftSlot?: ReactNode;
}

export function NavigationHeader({
  children,
  leftSlot,
  rightSlot,
  className,
  ...props
}: NavigationHeaderProps) {
  return (
    <header
      className={cx(
        hstack({
          justifyContent: 'space-between',
          height: 56,
          px: 20,
          color: 'gray10',
        }),
        className,
      )}
      {...props}
    >
      <span className={hstack({ gap: 0 })}>
        {leftSlot}
        {children}
      </span>
      <span>{rightSlot}</span>
    </header>
  );
}

NavigationHeader.Title = Title;
NavigationHeader.BackButton = BackButton;

interface NavigationHeaderTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

function Title({ className, ...props }: NavigationHeaderTitleProps) {
  return (
    <Primitive.h1
      className={cx(css({ textStyle: 'Body_18_B' }), className)}
      {...props}
    />
  );
}
