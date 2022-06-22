import type { IdentityRecordBy } from '../../type-utils';
import type { PrefabComponent, PrefabReference } from '../types/component';

function isNotNullEntry<T, X>(entry: [T, X]): entry is [T, NonNullable<X>] {
  const [, option] = entry;
  return option !== null;
}

type RequiredAttrs = Omit<PrefabComponent, 'name' | 'descendants'>;
type UnresolvedAttributes = IdentityRecordBy<
  RequiredAttrs,
  'options',
  [string],
  'nullable'
>;

const resolveAttributes = (attrs: UnresolvedAttributes): RequiredAttrs => {
  const options = Object.entries(attrs.options)
    .filter(isNotNullEntry)
    .map(([key, option]) => option(key));

  return {
    ...attrs,
    options,
  };
};

/**
 * Create a partial prefab
 *
 * @returns
 */
export const partial = (): PrefabReference => ({
  type: 'PARTIAL',
});

/**
 * Create a wrapper prefab
 *
 * @returns
 */
 export const wrapper = (descendants: PrefabReference[]): PrefabReference => ({
  type: 'WRAPPER',
  descendants
});

/**
 * Create a component prefab
 *
 * @param name name of the component
 * @param attrs attributes
 * @param descendants a list of child prefab components
 * @returns
 */

export const component = (
  name: string,
  attrs: UnresolvedAttributes,
  descendants: PrefabReference[],
): PrefabComponent => ({
  name,
  ...resolveAttributes(attrs),
  descendants,
  type: 'COMPONENT',
});
