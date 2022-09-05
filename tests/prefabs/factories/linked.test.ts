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

test('linked builds an option where value contains a number', (t) => {
  const result = linked({
    label: 'Form title example',
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'optionWithButtonGroup',
        comparator: 'EQ',
        value: 1,
      },
    },
    value: {
      ref: { componentId: '#tabs', optionId: '#tabsOptionWithButtonGroup' },
    },
  })('linkedTextComponentExample');

  const expected = {
    value: {
      ref: {
        componentId: '#tabs',
        optionId: '#tabsOptionWithButtonGroup',
      },
    },
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'optionWithButtonGroup',
        comparator: 'EQ',
        value: 1,
      },
    },
    key: 'linkedTextComponentExample',
    type: 'LINKED_OPTION',
    label: 'Form title example',
  };

  t.deepEqual(result, expected);
  t.end();
});
