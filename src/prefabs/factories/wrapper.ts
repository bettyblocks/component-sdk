import type { PrefabReference, PrefabComponent } from '../types/component';
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
  reconfigure?: {
    children: PrefabComponent[];
    wizardType: string;
  },
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
    reconfigure,
  };
};
