import test from 'tape';
import { linked, hideIf } from '../../../src/prefabs/factories/options';

test('linked builds a linked option with a value ref', (t) => {
  const result = linked({
    label: 'my linked label',
    configuration: {
      as: 'BUTTONGROUP',
      condition: hideIf('model', 'EQ', ''),
    },
    value: { ref: { componentId: '#1', optionId: '#2' } },
  })('0');

  const expected = {
    value: {
      ref: {
        componentId: '#1',
        optionId: '#2',
      },
    },
    configuration: {
      as: 'BUTTONGROUP',
      condition: {
        type: 'HIDE',
        option: 'model',
        comparator: 'EQ',
        value: '',
      },
    },
    key: '0',
    type: 'LINKED_OPTION',
    label: 'my linked label',
  };
  t.deepEqual(result, expected);
  t.end();
});
