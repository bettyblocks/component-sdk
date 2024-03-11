import type { PrefabReference, PrefabWrapper } from '../types/component';
import type {
  LinkedOptionProducer,
  LinkedPartialOptionProducer,
  OptionCategory,
  OptionProducer,
} from '../types/options';

export type WrapperAttrs = {
  label?: string;
  optionCategories?: OptionCategory[];
  options?: Record<
    string,
    LinkedOptionProducer | LinkedPartialOptionProducer | OptionProducer
  >;
};

/**
 * Create a wrapper prefab
 *
 * @returns
 */
export const wrapper = (
  attrs: WrapperAttrs,
  descendants: PrefabReference[],
): PrefabWrapper => {
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
