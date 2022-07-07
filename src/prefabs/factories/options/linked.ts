import {
  LinkedOptionProducer,
  PrefabWrapperLinkedOption,
} from '../../types/options';

type RedundantKeys = 'type' | 'key' | 'label';
type Attributes = Partial<Omit<PrefabWrapperLinkedOption, RedundantKeys>>

export const linked =
  (label: string, attrs: Attributes): LinkedOptionProducer =>
  (key: string) =>
  ({
    ...attrs,
    key,
    type: 'LINKED_OPTION',
    label,
  });
