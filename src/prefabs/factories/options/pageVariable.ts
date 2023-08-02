import { PartialBy } from '../../../type-utils';
import { OptionProducer, ValueDefault, ValueRef } from '../../types/options';

// typescript issue #36981
// Omit is currently desctructive to union/extended types see
// So we have to Omit each variant as a work around
type RedundantKeys = 'type' | 'key' | 'label';
type Attributes =
  | PartialBy<Omit<ValueDefault, RedundantKeys>, 'value'>
  | Omit<ValueRef, RedundantKeys>;

const defaultAttributes = {
  value: {
    id: '',
  },
};

export const pageVariable =
  (label: string, attrs: Attributes = {}): OptionProducer =>
  (key) => ({
    ...defaultAttributes,
    ...attrs,
    key,
    type: 'PAGE_VARIABLE',
    label,
  });
