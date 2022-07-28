import test from 'tape';

import { component } from '../../../src/prefabs/factories/component';
import { wrapper } from '../../../src/prefabs/factories/wrapper';

test('builds a wrapper prefab', (t) => {
  const result = wrapper({}, []);
  const expected = {
    type: 'WRAPPER',
    options: [],
    descendants: [],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a wrapper prefab with descendants', (t) => {
  const result = wrapper({}, [component('ROW', { options: {} }, [])]);
  const expected = {
    type: 'WRAPPER',
    options: [],
    descendants: [
      { name: 'ROW', options: [], descendants: [], type: 'COMPONENT' },
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a wrapper prefab with descendants and inner wrapper', (t) => {
  const result = wrapper({}, [
    component('ROW', { options: {} }, [wrapper({}, [])]),
  ]);
  const expected = {
    type: 'WRAPPER',
    options: [],
    descendants: [
      {
        name: 'ROW',
        options: [],
        descendants: [{ type: 'WRAPPER', options: [], descendants: [] }],
        type: 'COMPONENT',
      },
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});
