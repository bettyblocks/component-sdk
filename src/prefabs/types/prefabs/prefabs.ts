import { Icon } from './icon';
import { PrefabAction } from '../actions';
import { PrefabReference, PrefabComponent } from '../component';
import { PrefabInteraction, PrefabVariable } from '../interactions';

export interface Prefab {
  actions?: PrefabAction[];
  beforeCreate?: string;
  category: string;
  name: string;
  keywords?: string[];
  icon: Icon;
  interactions?: PrefabInteraction[];
  structure: PrefabReference[];
  variables?: PrefabVariable[];
  type?: string;
  description?: string;
  reconfigure?: {
    children: PrefabComponent[];
    wizardType?: string;
  };
}
