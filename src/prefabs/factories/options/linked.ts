import {
  LinkedOptionProducer,
  LinkedPartialOptionProducer,
  PrefabWrapperLinkedOption,
  PrefabWrapperLinkedPartialOption,
} from '../../types/options';

type RedundantKeys = 'type' | 'key';
type Attributes = Partial<Omit<PrefabWrapperLinkedOption, RedundantKeys>>;
type PartialAttributes = Partial<
  Omit<PrefabWrapperLinkedPartialOption, RedundantKeys>
>;

export const linked =
  (attrs: Attributes): LinkedOptionProducer =>
  (key: string) => ({
    ...attrs,
    label: attrs.label || '',
    key,
    type: 'LINKED_OPTION',
  });
export const linkedPartial =
  (attrs: PartialAttributes): LinkedPartialOptionProducer =>
  (key: string) => ({
    ...attrs,
    label: attrs.label || '',
    key,
    type: 'LINKED_PARTIAL',
  });
