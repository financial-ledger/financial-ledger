import { ComponentProps, ReactNode, useRef, useState } from 'react';

import { m, PanInfo } from 'framer-motion';
import { LazyDomMaxMotion } from 'src/ui/framer/LazyDomMaxMotion';

export interface PullToCloseProps
  extends ComponentProps<typeof m.div> {
  children: ReactNode;
  onClose: VoidFunction;
  threshold?: number;
}

const THRESHOLD = 0.3;

/**
 * AnimatePresence와 함께 사용 권장
 */
export function PullToClose({
  onClose,
  className,
  children,
  threshold = THRESHOLD,
  ...restProps
}: PullToCloseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [snapToOrigin, setSnapToOrigin] = useState(false);
  const handleDragEnd = (_: any, info: PanInfo) => {
    if (!ref.current) return;

    if (
      ref.current.getBoundingClientRect().height * threshold <
      info.offset.y
    ) {
      onClose();
    }
  };

  const handleDrag = (_: any, info: PanInfo) => {
    requestAnimationFrame(() => {
      if (!ref.current) return;
      if (
        ref.current.getBoundingClientRect().height * threshold <
        info.offset.y
      ) {
        setSnapToOrigin(false);
      } else {
        setSnapToOrigin(true);
      }
    });
  };

  return (
    <LazyDomMaxMotion>
      <m.div
        {...restProps}
        animate={{ y: '0%' }}
        className={className}
        drag="y"
        dragConstraints={{ top: 0 }}
        dragElastic={0}
        dragSnapToOrigin={snapToOrigin}
        exit={{ y: '100%' }}
        initial={{ y: '100%' }}
        ref={ref}
        transition={{
          duration: !snapToOrigin ? 0.1 : 0.2,
          type: 'tween',
        }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        {children}
      </m.div>
    </LazyDomMaxMotion>
  );
}
