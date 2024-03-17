import {
  Content,
  Dialog,
  DialogProps,
  DialogTrigger,
  Overlay,
  Portal,
} from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { useControllableState } from 'src/hooks/useControllableState';
import { createContext } from 'src/utils/createContext';
import { sva } from 'styled-system/css';
import { PullToClose } from '../PullToClose';

export interface BottomSheetProps extends DialogProps {}

const [BottomSheetProvider, useBottomSheet] = createContext<{
  open?: boolean;
  onOpenChange: (value: boolean) => void;
}>('BottomSheet');

export function BottomSheet({
  open: openProp,
  defaultOpen,
  onOpenChange,
  children,
  ...props
}: BottomSheetProps) {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  return (
    <BottomSheetProvider value={{ open, onOpenChange: setOpen }}>
      <Dialog {...props} open={open} onOpenChange={setOpen}>
        {children}
      </Dialog>
    </BottomSheetProvider>
  );
}

BottomSheet.Content = BottomSheetContent;
BottomSheet.Trigger = DialogTrigger;

function BottomSheetContent({ children }: { children: ReactNode }) {
  const dialogStyle = dialogStyles();
  const { onOpenChange } = useBottomSheet('BottomSheetContent');
  return (
    <Portal>
      <Overlay className={dialogStyle.overlay} />
      <Content className={dialogStyle.content}>
        <PullToClose
          onClose={() => onOpenChange(false)}
          className={dialogStyle.body}
        >
          {children}
        </PullToClose>
      </Content>
    </Portal>
  );
}

const dialogStyles = sva({
  slots: ['overlay', 'content', 'body'],
  base: {
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
      maxHeight: 'calc(100vh - 4rem)',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      bg: 'white',
      borderTopRadius: 8,
      display: 'flex',
      flexDirection: 'column',
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
