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
}
