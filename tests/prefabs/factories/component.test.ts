import test from 'tape';
import { CreatePropertyKind } from '../../../src';
import { component } from '../../../src/prefabs/factories/component';
import {
  variable,
  showIfTrue,
  toggle,
  reconfigure,
  addChild,
  displayLogic,
  property,
} from '../../../src/prefabs/factories/options';

test('component builds empty component', (t) => {
  const result = component('Text', { options: {} }, []);
  const expected = {
    name: 'Text',
    options: [],
    descendants: [],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component ignores null options', (t) => {
  const result = component(
    'Text',
    {
      options: {
        shouldNotExist: null,
        shouldExist: toggle('ShouldExist', { value: false }),
      },
    },
    [],
  );
  const expected = {
    name: 'Text',
    options: [
      {
        label: 'ShouldExist',
        key: 'shouldExist',
        type: 'TOGGLE',
        value: false,
      },
    ],
    descendants: [],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component builds an option', (t) => {
  const result = component(
    'Text',
    {
      options: {
        content: variable('Value', {
          configuration: {
            condition: showIfTrue('visibility'),
          },
        }),
      },
    },
    [],
  );

  const expected = {
    name: 'Text',
    options: [
      {
        key: 'content',
        type: 'VARIABLE',
        label: 'Value',
        value: [],
        configuration: {
          condition: {
            type: 'SHOW',
            option: 'visibility',
            comparator: 'EQ',
            value: true,
          },
        },
      },
    ],
    descendants: [],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component builds a style in an option', (t) => {
  const result = component(
    'Button',
    {
      options: {},
      style: {
        name: 'Pappel',
        overwrite: {
          boxShadow: 'none',
        },
      },
    },
    [],
  );
  const expected = {
    name: 'Button',
    options: [],
    style: {
      name: 'Pappel',
      overwrite: {
        boxShadow: 'none',
      },
    },
    descendants: [],
    type: 'COMPONENT',
  };
  t.deepEqual(result, expected);
  t.end();
});

test('component is a data table with a "reconfigure" option', (t) => {
  const result = component(
    'Data table',
    {
      options: {
        reconfigure: reconfigure('Reconfigure', { value: '' }),
      },
    },
    [],
  );
  const expected = {
    name: 'Data table',
    options: [
      {
        value: '',
        label: 'Reconfigure',
        key: 'reconfigure',
        type: 'RECONFIGURE',
      },
    ],
    descendants: [],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component is a data table with a "addChild" option', (t) => {
  const result = component(
    'Data table',
    {
      options: {
        addChild: addChild('Add child', { value: '' }),
      },
    },
    [],
  );
  const expected = {
    name: 'Data table',
    options: [
      {
        value: '',
        label: 'Add child',
        key: 'addChild',
        type: 'ADD_CHILD',
      },
    ],
    descendants: [],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component is a box with a "display-logic" option', (t) => {
  const result = component(
    'Box',
    {
      options: {
        displayLogic: displayLogic('Display logic', { value: '' }),
      },
    },
    [],
  );
  const expected = {
    name: 'Box',
    options: [
      {
        value: '',
        label: 'Display logic',
        key: 'displayLogic',
        type: 'DISPLAY_LOGIC',
      },
    ],
    descendants: [],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component is a data table with "reconfigure" options', (t) => {
  const result = component(
    'Data table',
    {
      options: {
        addChild: addChild('Add child', { value: '' }),
      },
    },
    [
      component(
        'Data table column',
        {
          options: {
            property: property('Property', {
              value: '',
              configuration: {
                createProperty: {
                  type: CreatePropertyKind.STRING,
                  value: 'New property',
                },
                showOnDrop: true,
                showTextStyleColor: true,
                allowedKinds: ['TEXT', 'URL'],
                pushToWrapper: true,
              },
              showInReconfigure: true,
              showInAddChild: true,
            }),
          },
        },
        [],
      ),
    ],
  );
  const expected = {
    name: 'Data table',
    options: [
      {
        value: '',
        label: 'Add child',
        key: 'addChild',
        type: 'ADD_CHILD',
      },
    ],
    descendants: [
      {
        name: 'Data table column',
        options: [
          {
            value: '',
            label: 'Property',
            key: 'property',
            type: 'PROPERTY',
            configuration: {
              createProperty: {
                value: 'New property',
                type: CreatePropertyKind.STRING,
              },
              showOnDrop: true,
              showTextStyleColor: true,
              allowedKinds: ['TEXT', 'URL'],
              pushToWrapper: true,
            },
            showInReconfigure: true,
            showInAddChild: true,
          },
        ],
        descendants: [],
        type: 'COMPONENT',
      },
    ],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});

test('component can handle optionRefs', (t) => {
  const result = component(
    'Data table',
    {
      options: {
        addChild: addChild('Add child', { value: '' }),
      },
    },
    [
      component(
        'Data table column',
        {
          options: {
            property: property('Property', {
              value: '',
              optionRef: {
                id: '#property',
                sourceId: '#other',
                inherit: 'label',
              },
            }),
          },
        },
        [],
      ),
    ],
  );
  const expected = {
    name: 'Data table',
    options: [
      {
        value: '',
        label: 'Add child',
        key: 'addChild',
        type: 'ADD_CHILD',
      },
    ],
    descendants: [
      {
        name: 'Data table column',
        options: [
          {
            value: '',
            label: 'Property',
            key: 'property',
            type: 'PROPERTY',
            optionRef: {
              id: '#property',
              sourceId: '#other',
              inherit: 'label',
            },
          },
        ],
        descendants: [],
        type: 'COMPONENT',
      },
    ],
    type: 'COMPONENT',
  };

  t.deepEqual(result, expected);
  t.end();
});
