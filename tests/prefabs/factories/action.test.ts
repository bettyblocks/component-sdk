import test from 'tape';
import { action } from '../../../src/prefabs/factories/options/action';
import { actionInputObjects } from '../../../src/prefabs/factories/options/actionInputObjects';

test('action builds variable option with options  ', (t) => {
  const result = action('Action', { value: '#stringValue' })('action');

  const expected = {
    value: '#stringValue',
    key: 'action',
    type: 'ACTION',
    label: 'Action',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('actionInputObjects builds options with configuration', (t) => {
  const result = actionInputObjects('Objects to pass to action', {
    value: [],
    configuration: {
      apiVersion: 'v1',
      condition: {
        type: 'SHOW',
        option: 'linkType',
        comparator: 'EQ',
        value: 'action',
      },
    },
  })('actionModels');

  const expected = {
    value: [],
    label: 'Objects to pass to action',
    key: 'actionModels',
    type: 'ACTION_INPUT_OBJECTS',
    configuration: {
      apiVersion: 'v1',
      condition: {
        type: 'SHOW',
        option: 'linkType',
        comparator: 'EQ',
        value: 'action',
      },
    },
  };

  t.deepEqual(result, expected);
  t.end();
});

test('action builds options with ref. The OptionProducer allows only one value', (t) => {
  const result = action('Action has a ref', {
    ref: {
      value: '#actionId',
    },
    configuration: {
      apiVersion: 'v1',
      condition: {
        type: 'SHOW',
        option: 'linkType',
        comparator: 'EQ',
        value: 'action',
      },
    },
  })('action');

  const expected = {
    ref: {
      value: '#actionId',
    },
    label: 'Action has a ref',
    key: 'action',
    type: 'ACTION',
    configuration: {
      apiVersion: 'v1',
      condition: {
        type: 'SHOW',
        option: 'linkType',
        comparator: 'EQ',
        value: 'action',
      },
    },
  };

  t.deepEqual(result, expected);
  t.end();
});
