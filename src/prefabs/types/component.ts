import { PrefabAction } from './actions';
import { PrefabComponentOption, PrefabComponentStyle } from './options';
import { Hook } from './hook';

export type PrefabReference = PrefabPartial | PrefabComponent;

export interface PrefabPartial {
  type: 'PARTIAL';
}

export interface PrefabComponent {
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
