import { PrefabAction } from './actions';
import { PrefabComponentOption } from './options';
import { Hook } from './hook';

export type PrefabReference = PrefabPartial | PrefabComponent;

export interface PrefabPartial {
  type: 'PARTIAL';
}

export interface PrefabComponent {
  type?: 'COMPONENT';
  label?: string;
  actions?: PrefabAction[];
  descendants: PrefabComponent[];
  name: string;
  options: PrefabComponentOption[];
  $afterCreate?: Hook[];
  $afterDelete?: Hook[];
  $onUpdate?: Hook[];
  ref?: {
    id: string;
  };
}
