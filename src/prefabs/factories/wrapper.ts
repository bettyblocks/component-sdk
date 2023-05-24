import type { PrefabReference } from '../types/component';
import type {
  LinkedOptionProducer,
  LinkedPartialOptionProducer,
  OptionCategory,
} from '../types/options';

export type WrapperAttrs = {
  label?: string;
  optionCategories?: OptionCategory[];
  options?: Record<string, LinkedOptionProducer | LinkedPartialOptionProducer>;
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
    name: 'Wrapper',
    ...labelField,
    ...optionCategories,
    options,
    descendants,
  };
};
