import test from 'tape';
import {
  modelAndRelation,
  showIf,
} from '../../../src/prefabs/factories/options';

test('modelAndRelation builds variable option', (t) => {
  const result = modelAndRelation('Model', {
    value: '',
  })('model');

  const expected = {
    type: 'MODEL_AND_RELATION',
    label: 'Model',
    key: 'model',
    value: '',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('modelAndRelation builds variable option with configuration', (t) => {
  const result = modelAndRelation('Model', {
    value: '',
    configuration: { condition: showIf('model', 'EQ', '') },
  })('model');

  const expected = {
    type: 'MODEL_AND_RELATION',
    label: 'Model',
    key: 'model',
    value: '',
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'model',
        comparator: 'EQ',
        value: '',
      },
    },
  };

  t.deepEqual(result, expected);
  t.end();
});
