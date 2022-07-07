import test from 'tape';
import { linked } from '../../../src/prefabs/factories/options';

test('linked builds a linked option with a value ref', (t) => {
  const result = linked({
    label: 'my linked label',
    value: { ref: {componentId: '#1', optionId: '#2'}},
  })('0');

  const expected = {
    value: {
      ref: {
        componentId: '#1',
        optionId: '#2',
      }
    },
    key: '0',
    type: 'LINKED_OPTION',
    label: 'my linked label',
  };
  t.deepEqual(result, expected);
  t.end();
});
