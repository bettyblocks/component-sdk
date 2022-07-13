import test from 'tape';
import { prefab } from '../../../src/prefabs/factories';
import { Icon } from '../../../src/prefabs/types/prefabs';
import { partial, component } from '../../../src/prefabs/factories/component';

test('prefab builds empty prefab', (t) => {
  const result = prefab(
    'Prefab',
    {
      category: 'FORM',
      icon: Icon.FormIcon,
    },
    () => null,
    [],
  );

  const expected = {
    name: 'Prefab',
    category: 'FORM',
    icon: 'FormIcon',
    beforeCreate: '() => null',
    structure: [],
  };

  t.deepEqual(result, expected);
  t.end();
});

test('builds a prefab with structure where the root is a partial', (t) => {
  const structure = partial();
  const result = prefab(
    'Prefab',
    {
      category: 'FORM',
      icon: Icon.FormIcon,
    },
    () => null,
    [structure],
  );

  const expected = {
    name: 'Prefab',
    category: 'FORM',
    icon: 'FormIcon',
    beforeCreate: '() => null',
    structure: [
      {
        type: 'PARTIAL',
        partialId: '',
      },
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});
test('builds a prefab with structure where the root is a component and has a partial as descendant', (t) => {
  const structure = component('Column', { options: {} }, [partial()]);

  const result = prefab(
    'Prefab',
    {
      category: 'FORM',
      icon: Icon.FormIcon,
    },
    () => null,
    [structure],
  );

  const expected = {
    name: 'Prefab',
    category: 'FORM',
    icon: 'FormIcon',
    beforeCreate: '() => null',
    structure: [
      {
        name: 'Column',
        options: [],
        descendants: [
          {
            type: 'PARTIAL',
            partialId: '',
          },
        ],
        type: 'COMPONENT',
      },
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});
