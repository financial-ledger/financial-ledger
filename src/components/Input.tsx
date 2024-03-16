import {
  ChangeEvent,
  ElementRef,
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  useId,
  useState,
} from 'react';
import { useControllableState } from 'src/hooks/useControllableState';
import { createContext } from 'src/utils/createContext';
import { css, cva, cx } from 'styled-system/css';
import { hstack } from 'styled-system/patterns';
import { Primitive } from './primitives';

type InputElement = ElementRef<'input'>;
const [InputContextProvider, useInputContext] = createContext<{
  value?: string;
  onValueChange: (value: string) => void;
  maxLength?: number;
  isFocused: boolean;
  inputId: string;
  inputNode: InputElement | null;
}>('Input');

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'defaultValue'
  > {
  onValueChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  rightSlot?: ReactNode;
}

export function Input({
  value: valueProp,
  defaultValue,
  onChange,
  onValueChange,
  rightSlot,
  maxLength,
  className,
  onFocus,
  onBlur,
  ...rest
}: InputProps) {
  const [value, setValue] = useControllableState({
    defaultProp: defaultValue ?? '',
    prop: valueProp,
    onChange: onValueChange,
  });

  const [inputNode, setInputNode] = useState<null | InputElement>(
    null,
  );

  const inputId = useId();

  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
    onChange?.(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    onFocus?.(e);
    setIsFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
    setIsFocused(false);
  };

  return (
    <InputContextProvider
      value={{
        onValueChange: setValue,
        inputNode,
        value,
        maxLength,
        isFocused,
        inputId,
      }}
    >
      <div
        className={cx(
          hstack({
            justify: 'space-between',
            height: 42,
            gap: 8,
            color: 'gray10',
            '&::placeholder': {
              color: 'gray07',
            },
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: 'gray04',
            '&:focus-within': {
              borderBottomColor: 'gray10',
            },
          }),
          className,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <input
          id={inputId}
          ref={(ref) => setInputNode(ref)}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          className={css({ width: '100%' })}
          {...rest}
        />
        <span className={hstack({ gap: 8 })}>{rightSlot}</span>
      </div>
    </InputContextProvider>
  );
}

Input.ClearButton = ClearButton;
Input.MaxLengthIndicator = MaxLengthIndicator;
Input.ErrorLabel = ErrorLabel;

interface ClearButtonProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

function ClearButton(props: ClearButtonProps) {
  const { onValueChange, isFocused, inputNode } =
    useInputContext('ClearButton');

  return (
    <Primitive.button
      {...props}
      className={cx(clearButtonStyle({ isFocused }), props.className)}
      onClick={(e) => {
        e.preventDefault();
        onValueChange('');
        inputNode?.focus();
      }}
    />
  );
}

const clearButtonStyle = cva({
  variants: {
    isFocused: {
      true: {
        color: 'gray09',
      },
      false: {
        color: 'gray07',
      },
    },
  },
});

interface MaxLengthIndicatorProps
  extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

function MaxLengthIndicator(props: MaxLengthIndicatorProps) {
  const { maxLength, value, isFocused } = useInputContext(
    'MaxLengthIndicator',
  );
  if (!maxLength) {
    throw new Error('maxLength를 input prop으로 전달해주세요.');
  }
  const currentLength = value?.length ?? 0;
  return (
    <Primitive.span
      {...props}
      className={cx(
        maxLengthIndicatorStyle({
          isFocused,
          error: currentLength > maxLength,
        }),
        props.className,
      )}
    >
      {currentLength}/{maxLength}
    </Primitive.span>
  );
}

const maxLengthIndicatorStyle = cva({
  base: {
    textStyle: 'Body_16_R',
  },
  variants: {
    isFocused: {
      true: {
        color: 'gray09',
      },
      false: {
        color: 'gray07',
      },
    },
    error: {
      true: {
        color: 'point01',
      },
    },
  },
});

interface ErrorLabelProps extends HTMLAttributes<HTMLLabelElement> {
  asChild?: boolean;
}

function ErrorLabel(props: ErrorLabelProps) {
  const { inputId } = useInputContext('ErrorLabel');
  return (
    <Primitive.label
      {...props}
      htmlFor={inputId}
      className={cx(
        css({
          textStyle: 'Caption_12_M',
          color: 'point01',
        }),
        props.className,
      )}
    />
  );
}
