import { option, text, color, sizes } from '../../../../factories/options';
import { ThemeColor } from '../../../prefabs';

import { advanced } from './advanced';

export const options = {
  maxRowWidth: option('CUSTOM', {
    label: 'Width',
    value: 'XL',
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      allowedInput: [
        { name: 'S', value: 'S' },
        { name: 'M', value: 'M' },
        { name: 'L', value: 'L' },
        { name: 'XL', value: 'XL' },
        { name: 'Full', value: 'Full' },
      ],
    },
  }),
  rowHeight: text('Height', {
    value: '',
    configuration: {
      as: 'UNIT',
    },
  }),
  backgroundColor: color('Background color', { value: ThemeColor.TRANSPARENT }),

  outerSpacing: sizes('Outer space', {
    value: ['0rem', '0rem', '0rem', '0rem'],
  }),

  ...advanced,
};
