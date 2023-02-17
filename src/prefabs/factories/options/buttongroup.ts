import { PartialBy } from '../../../type-utils';
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
  | PartialBy<Omit<ValueDefault, RedundantKeys>, 'value'>
  | Omit<ValueRef, RedundantKeys>;

const defaultAttributes = {
  value: '',
};

export const buttongroup =
  (
    label: string,
    options: [string, string, string?][],
    attrs: Attributes = {},
  ): OptionProducer =>
  (key) => ({
    ...defaultAttributes,
    ...attrs,
    key,
    type: 'CUSTOM',
    label,
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      allowedInput: options.map(([name, value, icon]) => ({
        name,
        value,
        icon,
      })),
      ...((attrs.configuration as any) || {}),
    },
  });
