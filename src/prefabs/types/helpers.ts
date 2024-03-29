import { ActionVariable } from './ActionVariable';
import { PrefabWrapperLinkedOption } from './options';
import { Property } from './property';

export interface PreparedAction {
  action: {
    actionId: string;
  };
  variables: Record<string, [Property, ActionVariable]>;
  relatedIdProperties: string[][];
  resultVariable: ActionVariable;
  recordInputVariable: ActionVariable;
  relatedModelIds: Record<string, string>;
}

export interface PreparedInput {
  variable: {
    variableId: string;
  };
  isRelational: boolean;
  isMultiRelational: boolean;
}

type RedundantKeys = 'type' | 'key';
export type LinkOptionProps = Omit<PrefabWrapperLinkedOption, RedundantKeys>;
