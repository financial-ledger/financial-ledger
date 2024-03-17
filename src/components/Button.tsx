import { ButtonHTMLAttributes, forwardRef } from 'react';
import { RecipeVariantProps, cva, cx } from 'styled-system/css';
import { Primitive } from './primitives';

type ButtonVariants = Exclude<
  RecipeVariantProps<typeof buttonStyle>,
  undefined
>;

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonVariants {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, children, size, color, ...props },
    ref,
  ) {
    return (
      <Primitive.button
        ref={ref}
        className={cx(buttonStyle({ size, color }), className)}
        {...props}
      >
        {children}
      </Primitive.button>
    );
  },
);

const buttonStyle = cva({
  base: {
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    size: {
      52: {
        height: 52,
        width: '100%',
        textStyle: 'Body_16_B',
      },
      48: {
        height: 48,
        px: 24,
        textStyle: 'Body_16_M',
      },
      36: {
        height: 36,
        px: 12,
        textStyle: 'Body_14_M',
      },
      32: {
        height: 32,
        px: 12,
        textStyle: 'Body_14_M',
      },
    },
    color: {
      black: {
        color: 'white',
        bg: 'black',
        '&:disabled': {
          color: 'gray06',
          bg: 'gray01',
        },
      },
    },
  },
  defaultVariants: {
    color: 'black',
    size: 52,
  },
});
