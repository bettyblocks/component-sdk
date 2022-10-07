import test from 'tape';
import {
  style,
  styleReference,
  staticColor,
  themeColor,
} from '../../../src/prefabs/factories';

test('builds a static color', (t) => {
  const result = staticColor('#008800');
  const expected = {
    type: 'STATIC',
    value: '#008800',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a Theme color', (t) => {
  const result = themeColor('primary');
  const expected = {
    type: 'THEME_COLOR',
    value: 'primary',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a styleReference without overwrites', (t) => {
  const result = styleReference('Filled', {});
  const expected = {
    name: 'Filled',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a styleReference overwrites', (t) => {
  const result = styleReference('Filled', {
    overwrite: {
      basis: {
        backgroundColor: staticColor('blue'),
      },
      hover: {
        backgroundColor: staticColor('red'),
      },
    },
  });
  const expected = {
    name: 'Filled',
    overwrites: [
      {
        name: 'basis',
        content: {
          backgroundColor: {
            type: 'STATIC',
            value: 'blue',
          },
        },
      },
      {
        name: 'hover',
        content: {
          backgroundColor: {
            type: 'STATIC',
            value: 'red',
          },
        },
      },
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a style', (t) => {
  const result = style('ButtonType', {
    name: 'Filled',
    basis: {
      backgroundColor: staticColor('blue'),
    },
    states: {
      hover: {
        backgroundColor: staticColor('red'),
      },
    },
  });
  const expected = {
    type: 'ButtonType',
    name: 'Filled',
    content: {
      basis: {
        backgroundColor: {
            type: 'STATIC',
            value: 'blue',
          }
      },
      hover: {
        backgroundColor: {
            type: 'STATIC',
            value: 'red',
          }
      }
    }

  };

  t.deepEqual(result, expected);
  t.end();
});
