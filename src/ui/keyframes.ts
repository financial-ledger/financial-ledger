import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  fadeIn: {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  slideUp: {
    '0%': { opacity: '0', transform: 'translateY(100%)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  slideDown: {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(100%)' },
  },
});
