import test from 'tape';
import { font } from '../../../src/prefabs/factories/options/index';

test('font builds variable option with a value', (t) => {
  const result = font('Font', { value: ['Body1'] })('font');

  const expected = {
    type: 'FONT',
    label: 'Font',
    key: 'font',
    value: ['Body1'],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('font builds variable option with a configuration', (t) => {
  const result = font('Font', {
    value: ['Body1'],
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'advancedSettings',
        comparator: 'EQ',
        value: true,
      },
    },
  })('font');

  const expected = {
    type: 'FONT',
    label: 'Font',
    key: 'font',
    value: ['Body1'],
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'advancedSettings',
        comparator: 'EQ',
        value: true,
      },
    },
  };

  t.deepEqual(result, expected);
  t.end();
});
