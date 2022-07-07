import { PrefabAction } from './actions';
import { PrefabComponentOption, PrefabWrapperLinkedOption, PrefabComponentStyle } from './options';
import { Hook } from './hook';

export type PrefabReference = PrefabPartial | PrefabComponent | PrefabWrapper;

export interface PrefabPartial {
  type: 'PARTIAL';
}
export interface PrefabWrapper {
  type: 'WRAPPER';
  label?: string;
  descendants: PrefabReference[];
  options: PrefabWrapperLinkedOption[];
}

export interface PrefabComponent {
  id?: string;
  type?: 'COMPONENT';
  label?: string;
  actions?: PrefabAction[];
  descendants: PrefabReference[];
  name: string;
  options: PrefabComponentOption[];
  $afterCreate?: Hook[];
  $afterDelete?: Hook[];
  $onUpdate?: Hook[];
  ref?: {
    id: string;
  };
  style?: PrefabComponentStyle;
}
