import type { IdentityRecordBy } from '../../type-utils';
import { OptionProducer, PrefabComponentOption } from '../types';
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

export const optionTemplateOptions = (
  attrs: Record<string, OptionProducer | null>,
): PrefabComponentOption[] =>
  Object.entries(attrs)
    .filter(isNotNullEntry)
    .map(([key, option]) => option(key));

const resolveAttributes = (attrs: UnresolvedAttributes): RequiredAttrs => {
  const options = optionTemplateOptions(attrs.options);

  const optionCategories =
    attrs.optionCategories && attrs.optionCategories.length !== 0
      ? { optionCategories: attrs.optionCategories }
      : {};

  return {
    ...attrs,
    ...optionCategories,
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
  partialId: '',
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
