import type { IdentityRecordBy } from '../../type-utils';
import { LinkedOptionProducer } from '../types';
import type { PrefabComponent, PrefabReference } from '../types/component';
import type { OptionCategory } from '../types/options';

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

export type WrapperAttrs = {
  label?: string;
  optionCategories?: OptionCategory[];
  options?: Record<string, LinkedOptionProducer>;
};

/**
 * Create a wrapper prefab
 *
 * @returns
 */
export const wrapper = (
  attrs: WrapperAttrs,
  descendants: PrefabReference[],
): PrefabReference => {
  const labelField = attrs.label ? { label: attrs.label } : {};
  const options = Object.entries(attrs.options || {}).map(([key, linked]) =>
    linked(key),
  );
  const optionCategories =
    attrs.optionCategories && attrs.optionCategories.length !== 0
      ? { optionCategories: attrs.optionCategories }
      : {};

  return {
    type: 'WRAPPER',
    ...labelField,
    ...optionCategories,
    options,
    descendants,
  };
};

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
