import {
  Content,
  Dialog,
  DialogClose,
  DialogProps,
  DialogTrigger,
  Overlay,
  Portal,
} from '@radix-ui/react-dialog';
import { HTMLAttributes } from 'react';
import { useControllableState } from 'src/hooks/useControllableState';
import SvgClose from 'src/ui/Icon/Close';
import { createContext } from 'src/utils/createContext';
import { cx, sva } from 'styled-system/css';
import { PullToClose, PullToCloseProps } from '../PullToClose';
import { Primitive } from '../primitives';

export interface BottomSheetProps extends DialogProps {}

const [BottomSheetProvider, useBottomSheet] = createContext<{
  open?: boolean;
  onOpenChange: (value: boolean) => void;
  styles: ReturnType<typeof dialogStyles>;
}>('BottomSheet');

export function BottomSheet({
  open: openProp,
  defaultOpen,
  onOpenChange,
  children,
  ...props
}: BottomSheetProps) {
  const dialogStyle = dialogStyles();
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  return (
    <BottomSheetProvider
      value={{ open, onOpenChange: setOpen, styles: dialogStyle }}
    >
      <Dialog {...props} open={open} onOpenChange={setOpen}>
        {children}
      </Dialog>
    </BottomSheetProvider>
  );
}

BottomSheet.Content = BottomSheetContent;
BottomSheet.Trigger = DialogTrigger;
BottomSheet.Header = BottomSheetHeader;

function BottomSheetContent({
  children,
  className,
  ...rest
}: Omit<PullToCloseProps, 'onClose'>) {
  const { onOpenChange, styles } = useBottomSheet(
    'BottomSheetContent',
  );
  return (
    <Portal>
      <Overlay className={styles.overlay} />
      <Content className={styles.content}>
        <PullToClose
          onClose={() => onOpenChange(false)}
          className={cx(styles.body, className)}
          {...rest}
        >
          {children}
        </PullToClose>
      </Content>
    </Portal>
  );
}

function BottomSheetHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { styles } = useBottomSheet('BottomSheetHeader');
  return (
    <Primitive.div
      className={cx(styles.header, className)}
      {...props}
    >
      {children}
      <DialogClose>
        <SvgClose />
      </DialogClose>
    </Primitive.div>
  );
}

const dialogStyles = sva({
  slots: ['overlay', 'content', 'body', 'header'],
  base: {
    header: {
      color: 'gray10',
      textStyle: 'Body_18_B',
      height: 52,
      px: 20,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    overlay: {
      position: 'fixed',
      inset: 0,
      bg: 'dimBlack',
      animationName: 'fadeIn',
      animationDuration: '500ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      '&[data-state="closed"]': {
        animationName: 'fadeOut',
      },
      zIndex: 1,
    },
    body: {
      pt: 8,
      maxHeight: 'calc(100vh - 8rem)',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      bg: 'white',
      borderTopRadius: 8,
      gap: 24,
      overflow: 'hidden',
      position: 'relative',
      width: 'full',
    },
    content: {
      bottom: 0,
      left: 0,
      right: 0,
      outline: 'none',
      position: 'fixed',
      width: 'full',
      zIndex: 2,
      animationName: 'slideUp',
      animationDuration: '500ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      '&[data-state="closed"]': {
        animationName: 'slideDown',
      },
    },
  },
});
