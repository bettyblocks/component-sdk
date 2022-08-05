import test from 'tape';
import { font, modelAndRelation } from '../../../src/prefabs/factories/options';

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

test('modelAndRelation builds variable option', (t) => {
  const result = modelAndRelation('Model', { value: '' })('model');

  const expected = {
    type: 'MODEL_AND_RELATION',
    label: 'Model',
    key: 'model',
    value: '',
  };

  t.deepEqual(result, expected);
  t.end();
});
