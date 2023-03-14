import test from 'tape';
import {
  linked,
  linkedPartial,
  hideIf,
} from '../../../src/prefabs/factories/options';

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

test('linked builds an option where configuration contains showOnDrop', (t) => {
  const result = linked({
    label: 'Form title example',
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'optionWithButtonGroup',
        comparator: 'EQ',
        value: 1,
      },
      showOnDrop: true,
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
      showOnDrop: true,
    },
    key: 'linkedTextComponentExample',
    type: 'LINKED_OPTION',
    label: 'Form title example',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('linkedPartial builds option', (t) => {
  const result = linkedPartial({
    label: 'my linked partial label',
    value: {
      ref: { componentId: '#partialId' },
    },
  })('linkedPartial');
  const expected = {
    value: {
      ref: {
        componentId: '#partialId',
      },
    },
    key: 'linkedPartial',
    type: 'LINKED_PARTIAL',
    label: 'my linked partial label',
  };
  t.deepEqual(result, expected);
  t.end();
});

test('linkedPartial builds with showOnDrop configuration', (t) => {
  const result = linkedPartial({
    label: 'my linked partial label',
    value: {
      ref: { componentId: '#partialId' },
    },
    configuration: {
      showOnDrop: true,
    },
  })('linkedPartial');
  const expected = {
    value: {
      ref: {
        componentId: '#partialId',
      },
    },
    key: 'linkedPartial',
    type: 'LINKED_PARTIAL',
    label: 'my linked partial label',
    configuration: {
      showOnDrop: true,
    },
  };
  t.deepEqual(result, expected);
  t.end();
});

test('linkedOption accepts optionRef', (t) => {
  const result = linked({
    label: 'Property',
    value: {
      ref: { componentId: '#component', optionId: '#property' },
    },
    optionRef: {
      id: '#property',
    },
  })('linkedPropertyExample');

  const expected = {
    value: {
      ref: {
        componentId: '#component',
        optionId: '#property',
      },
    },
    optionRef: {
      id: '#property',
    },
    key: 'linkedPropertyExample',
    type: 'LINKED_OPTION',
    label: 'Property',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('linkedPartial accepts optionRef', (t) => {
  const result = linkedPartial({
    label: 'my linked partial property',
    value: {
      ref: { componentId: '#partialId' },
    },
    optionRef: {
      sourceId: '#property',
      inherit: 'label',
    },
  })('linkedPartial');
  const expected = {
    value: {
      ref: {
        componentId: '#partialId',
      },
    },
    key: 'linkedPartial',
    type: 'LINKED_PARTIAL',
    label: 'my linked partial property',
    optionRef: {
      sourceId: '#property',
      inherit: 'label',
    },
  };
  t.deepEqual(result, expected);
  t.end();
});
