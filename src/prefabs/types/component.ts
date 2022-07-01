import { PrefabAction } from './actions';
import { PrefabComponentOption, PrefabComponentStyle } from './options';
import { Hook } from './hook';

export type PrefabReference = PrefabPartial | PrefabComponent | PrefabWrapper;

export interface PrefabPartial {
  type: 'PARTIAL';
}
export interface PrefabWrapper {
  type: 'WRAPPER';
  label?: string;
  descendants: PrefabReference[];
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
