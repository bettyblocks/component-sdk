import test from 'tape';
import { authenticationProfile } from '../../../src/prefabs/factories/options/authenticationProfile';

test('authenticationProfile builds option', (t) => {
  const result = authenticationProfile('AuthProfile label', {
    value: '1234abcd5678efgh',
  })('authProfile');

  const expected = {
    value: '1234abcd5678efgh',
    key: 'authProfile',
    type: 'AUTHENTICATION_PROFILE',
    label: 'AuthProfile label',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('authenticationProfile builds options with string value', (t) => {
  const result = authenticationProfile('Authentication Profile label', {
    value: '',
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'model',
        comparator: 'EQ',
        value: '',
      },
    },
  })('authProfile');

  const expected = {
    value: '',
    label: 'Authentication Profile label',
    key: 'authProfile',
    type: 'AUTHENTICATION_PROFILE',
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
