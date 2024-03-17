import { useAnimate } from 'framer-motion';
import {
  ChangeEvent,
  InputHTMLAttributes,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useControllableState } from 'src/hooks/useControllableState';
import { css, cx, sva } from 'styled-system/css';

const SHAKE_ANIMATION = Array.from({ length: 3 }).flatMap(() => [
  -5, 0, 5, 0,
]);

interface NumericInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'defaultValue'
  > {
  onValueChange?: (value: number) => void;
  value?: number;
  defaultValue?: number;
}

const formatter = {
  format: (value: number) => {
    const numberFormat = new Intl.NumberFormat('ko-KR', {
      currency: 'KOR',
    });
    return numberFormat.format(value);
  },
  unFormat: (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    return parseInt(numericValue, 10);
  },
};

const 십억 = 1000000000;
const 일조 = 1000000000000;

export function NumericInput({
  value: valueProp,
  defaultValue,
  onValueChange,
  className,
  placeholder,
  ...rest
}: NumericInputProps) {
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? 0,
    onChange: onValueChange,
  });
  const [hasError, setHasError] = useState(false);
  const inputId = useId();

  const inputStyle = inputStyles({
    size: (value ?? 0) >= 십억 ? 'small' : 'default',
    error: hasError,
  });

  const [scope, animate] = useAnimate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: newValue },
    } = e;
    const numValue = Number(formatter.unFormat(newValue));
    if (newValue !== '' && Number.isNaN(numValue)) {
      return;
    }

    if (numValue >= 일조) {
      setHasError(true);

      animate(
        scope.current,
        {
          x: SHAKE_ANIMATION,
        },
        { duration: 0.3 },
      );

      return;
    }
    setHasError(false);

    if (!value) {
      setValue(0);
    } else {
      setValue(numValue);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  const formattedValue =
    value === 0 ? '' : formatter.format(value as number);

  useLayoutEffect(() => {
    if (!labelRef.current || !inputRef.current) {
      return;
    }
    // label element의 크기를 계산해서 input크기를 정한다
    const labelWidth = labelRef.current.offsetWidth;
    const labelHeight = labelRef.current.offsetHeight;
    const classNameList = hiddenElementStyle.split(' ');
    classNameList.forEach((v) => {
      inputRef.current?.classList.remove(v);
      labelRef.current?.classList.add(v);
    });
    inputRef.current.style.width = `${labelWidth}px`;
    inputRef.current.style.height = `${labelHeight}px`;
  }, [value]);

  return (
    <div ref={scope} className={cx(inputStyle.root, className)}>
      <input
        {...rest}
        id={inputId}
        ref={inputRef}
        pattern="[0-9]*"
        placeholder={placeholder}
        value={value === 0 ? '' : formatter.format(value as number)}
        onChange={handleChange}
        className={cx(
          value ? inputStyle.input : placeholderStyle,
          hiddenElementStyle,
        )}
      />
      <label
        htmlFor={inputId}
        className={value ? inputStyle.input : placeholderStyle}
        ref={labelRef}
      >
        {formattedValue || placeholder}
      </label>
      {Boolean(value) && <span className={inputStyle.affix}>원</span>}
    </div>
  );
}

const hiddenElementStyle = css({
  visibility: 'hidden',
  position: 'absolute',
});

const placeholderStyle = css({
  color: 'gray06',
  textStyle: 'Headline_26_B',
  '&::placeholder': {
    color: 'gray06',
    textStyle: 'Headline_26_B',
  },
});

const inputStyles = sva({
  base: {
    input: {
      '&::placeholder': {
        color: 'gray06',
        textStyle: 'Headline_26_B',
      },
    },
  },
  slots: ['input', 'affix', 'root'],
  variants: {
    error: {
      true: {
        root: {
          color: 'point01',
        },
      },
      false: {
        root: {
          color: 'black',
        },
      },
    },
    size: {
      small: {
        input: {
          textStyle: 'Number_24_B',
        },
        affix: {
          textStyle: 'Headline_24_B',
        },
      },
      default: {
        input: {
          textStyle: 'Number_36_B',
        },
        affix: {
          textStyle: 'Headline_36_B',
        },
      },
    },
  },
});
