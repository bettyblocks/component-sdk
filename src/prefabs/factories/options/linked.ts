import {
  LinkedOptionProducer,
  PrefabWrapperLinkedOption,
} from '../../types/options';

type RedundantKeys = 'type' | 'key';
type Attributes = Partial<Omit<PrefabWrapperLinkedOption, RedundantKeys>>

export const linked =
  (attrs: Attributes): LinkedOptionProducer =>
  (key: string) =>
  ({
    ...attrs,
    label: attrs.label || '',
    key,
    type: 'LINKED_OPTION',
  });
