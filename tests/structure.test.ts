import test from 'tape';
import { Row } from '../src/prefabs/types/structures/Row';
// import { Column } from '../src/prefabs/types/structures/Column';
import { Icon } from '../src/prefabs/types/prefabs/icon';
import { prefab } from '../src/prefabs/factories/prefab';
import { showIfTrue } from '../src/prefabs/factories/options';

test.only('sdk builds a Row component from outside of the component-set', (t) => {
  const attrs = {
    icon: Icon.RowColumnIcon,
    category: 'LAYOUT',
    keywords: ['Layout', 'column', 'columns', '1'],
  };
  const result = prefab('Row outside of the component-set', attrs, undefined, [
    Row({}, []),
  ]);

  const expected = {
    name: 'Row outside of the component-set',
    icon: 'RowColumnIcon',
    category: 'LAYOUT',
    keywords: ['Layout', 'column', 'columns', '1'],
    beforeCreate: undefined,
    structure: [
      {
        name: 'Row',
        options: [
          {
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
            key: 'maxRowWidth',
            type: 'CUSTOM',
          },
          {
            value: '',
            configuration: {
              as: 'UNIT',
            },
            key: 'rowHeight',
            type: 'TEXT',
            label: 'Height',
          },
          {
            value: 'Transparent',
            key: 'backgroundColor',
            type: 'COLOR',
            label: 'Background color',
          },
          {
            value: ['0rem', '0rem', '0rem', '0rem'],
            key: 'outerSpacing',
            type: 'SIZES',
            label: 'Outer space',
          },
          {
            value: false,
            key: 'advancedSettings',
            type: 'TOGGLE',
            label: 'Advanced settings',
          },
          {
            value: [],
            configuration: {
              condition: showIfTrue('advancedSettings'),
            },
            key: 'dataComponentAttribute',
            type: 'VARIABLE',
            label: 'Test attribute',
          },
        ],
        style: {},
        ref: undefined,
        descendants: [],
        type: 'COMPONENT',
      },
    ],
  };
  t.deepEqual(result, expected);
  t.end();
});
