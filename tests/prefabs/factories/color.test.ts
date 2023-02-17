import test from 'tape';
import { color } from '../../../src/prefabs/factories/options';
import { ThemeColor as Theme } from '../../../src/prefabs/types/prefabs/theme-color';

test('color builds variable option with a value', (t) => {
  const result = color('Border color (hover)', {
    value: Theme.BLACK,
  })('color');

  const expected = {
    value: 'Black',
    key: 'color',
    type: 'COLOR',
    label: 'Border color (hover)',
  };
  t.deepEqual(result, expected);
  t.end();
});
test('color builds variable option with Inherit value for Theme builder', (t) => {
  const result = color('Theme builder Inherit color', {
    value: Theme.INHERIT,
  })('color');

  const expected = {
    value: '[Inherit]',
    key: 'color',
    type: 'COLOR',
    label: 'Theme builder Inherit color',
  };
  t.deepEqual(result, expected);
  t.end();
});
