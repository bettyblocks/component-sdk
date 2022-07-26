import test from 'tape';
import { component, wrapper } from '../../../src/prefabs/factories';
import { linked, variable } from '../../../src/prefabs/factories/options';

test('an option category in a wrapper should accept options', (t) => {
  const result = wrapper(
    {
      label: 'Wrapper label',
      optionCategories: [
        {
          label: 'Category label',
          expanded: true,
          members: ['linkedOption1', 'linkedOption2'],
        },
      ],
      options: {
        linkedOption1: linked({
          label: 'My linked label',
          value: { ref: { componentId: '#1', optionId: '#1' } },
        }),
        linkedOption2: linked({
          label: 'My linked label',
          value: { ref: { componentId: '#1', optionId: '#2' } },
        }),
      },
    },
    [
      component(
        'Alert',
        {
          ref: {
            id: '#1',
          },
          optionCategories: [
            { label: 'Category label', expanded: true, members: ['option1'] },
          ],
          options: {
            option1: variable('Value', {
              ref: {
                id: '#1',
              },
            }),
            option2: variable('Value', {
              ref: {
                id: '#2',
              },
            }),
          },
        },
        [],
      ),
    ],
  );

  const expected = {
    type: 'WRAPPER',
    label: 'Wrapper label',
    optionCategories: [
      {
        label: 'Category label',
        expanded: true,
        members: ['linkedOption1', 'linkedOption2'],
      },
    ],
    options: [
      {
        key: 'linkedOption1',
        label: 'My linked label',
        value: { ref: { componentId: '#1', optionId: '#1' } },
        type: 'LINKED_OPTION',
      },
      {
        key: 'linkedOption2',
        label: 'My linked label',
        value: { ref: { componentId: '#1', optionId: '#2' } },
        type: 'LINKED_OPTION',
      },
    ],
    descendants: [
      {
        ref: {
          id: '#1',
        },
        name: 'Alert',
        optionCategories: [
          { label: 'Category label', expanded: true, members: ['option1'] },
        ],
        options: [
          {
            ref: {
              id: '#1',
            },
            type: 'VARIABLE',
            label: 'Value',
            key: 'option1',
            value: [],
          },
          {
            ref: {
              id: '#2',
            },
            type: 'VARIABLE',
            label: 'Value',
            key: 'option2',
            value: [],
          },
        ],
        descendants: [],
        type: 'COMPONENT',
      },
    ],
  };

  t.deepEqual(result, expected);
  t.end();
});
