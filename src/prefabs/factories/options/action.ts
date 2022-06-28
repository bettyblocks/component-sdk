import {
  PrefabComponentOption,
  ValueDefault,
  ValueRef,
} from '../../types/options';

type OptionProducer = (key: string) => PrefabComponentOption;

// typescript issue #36981
// Omit is currently desctructive to union/extended types see
// So we have to Omit each variant as a work around
type RedundantKeys = 'type' | 'key' | 'label';
type Attributes =
  | Omit<ValueDefault, RedundantKeys>
  | Omit<ValueRef, RedundantKeys>;

export const action =
  (label: string, attrs: Attributes): OptionProducer =>
  (key) => ({
    ...attrs,
    key,
    type: 'ACTION',
    label,
  });
