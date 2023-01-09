import { createStyles, MantineNumberSize, getSize } from '@mantine/core';

interface PinInputStyles {
  size: MantineNumberSize;
}

const sizes = {
  xs: 28,
  sm: 32,
  md: 36,
  lg: 40,
  xl: 48,
};

export default createStyles((theme, { size }: PinInputStyles) => ({
  input: {
    width: getSize({ size, sizes }),
    height: getSize({ size, sizes }),
    textAlign: 'center',
    minHeight: 'auto',
    paddingRight: '0px !important',
    paddingLeft: '0px !important',

    '&::selection': {
      background: 'transparent',
    },
  },
}));
