import {
  LinkedOptionProducer,
  PrefabWrapperLinkedOption,
} from '../../types/options';

// typescript issue #36981
// Omit is currently desctructive to union/extended types see
// So we have to Omit each variant as a work around
type Attributes = {value?: PrefabWrapperLinkedOption['value']}

export const linked =
  (label: string, attrs: Attributes): LinkedOptionProducer =>
  (key: string) =>
  ({
    ...attrs,
    key,
    type: 'LINKED_OPTION',
    label,
  });
