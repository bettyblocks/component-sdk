import { PrefabAction } from './actions';
import {
  OptionCategory,
  PrefabComponentOption,
  PrefabWrapperLinkedOption,
  PrefabComponentStyle,
  PrefabWrapperLinkedPartialOption,
} from './options';
import { Hook } from './hook';

export type PrefabReference = PrefabPartial | PrefabComponent | PrefabWrapper;

export interface PrefabPartial {
  type: 'PARTIAL';
  partialId: string;
}
export interface PrefabWrapper {
  type: 'WRAPPER';
  label?: string;
  descendants: PrefabReference[];
  optionCategories?: OptionCategory[];
  options: (PrefabWrapperLinkedOption | PrefabWrapperLinkedPartialOption)[];
}

export interface PrefabComponent {
  id?: string;
  type?: 'COMPONENT';
  label?: string;
  actions?: PrefabAction[];
  descendants: PrefabReference[];
  name: string;
  optionCategories?: OptionCategory[];
  options: PrefabComponentOption[];
  $afterCreate?: Hook[];
  $afterDelete?: Hook[];
  $onUpdate?: Hook[];
  ref?: {
    id: string;
  };
  style?: PrefabComponentStyle;
}
