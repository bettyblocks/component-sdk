import { ActionVariable } from './ActionVariable';
import { Property } from './property';

export interface PreparedAction {
  action: {
    actionId: string;
  };
  variables: Record<string, [Property, ActionVariable]>;
  relatedIdProperties: Record<string, string>;
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
