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
  ref?: {
    id: string;
  };
}

export interface PrefabWrapper {
  type: 'WRAPPER';
  label?: string;
  descendants: PrefabReference[];
  optionCategories?: OptionCategory[];
  options: (
    | PrefabWrapperLinkedOption
    | PrefabWrapperLinkedPartialOption
    | PrefabComponentOption
  )[];
}

export interface OptionEventTrigger {
  action: string;
  format?: string;
  target: string;
}

export interface OptionEventRecord {
  onChange?: Record<string, OptionEventTrigger[]>;
}

export interface OptionTemplates {
  addChild?: {
    options: PrefabComponentOption[];
    optionEvents?: OptionEventRecord;
  };
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
  optionTemplates?: OptionTemplates;
  $afterCreate?: Hook[];
  $afterDelete?: Hook[];
  $onUpdate?: Hook[];
  ref?: {
    id: string;
  };
  style?: PrefabComponentStyle;
}
