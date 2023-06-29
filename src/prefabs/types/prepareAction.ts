import { AuthenticationProfile } from './authenticationProfile';
import { Property } from './property';

export enum ActionTemplates {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LOGIN = 'login',
  EMPTY = 'empty',
  CUSTOM = 'custom',
}

export enum ActionPermissions {
  PUBLIC = 'public',
  PRIVATE = 'private',
  INHERIT = 'inherit',
}

interface PrepareActionObjectProps {
  componentId: string;
  actionTemplate: ActionTemplates;
  idProperty?: Property;
  properties?: Property[];
  authenticationProfile: AuthenticationProfile;
  pageAuthenticationProfileId?: string;
  actionName?: string;
  pageName?: string;
  permissions?: ActionPermissions;
  applyValidation?: boolean;
}

export type MakePrepareActionArgs =
  | [
      string,
      Property | undefined,
      Property[] | undefined,
      ActionTemplates,
      AuthenticationProfile?,
      string?,
      ActionPermissions?,
      string?,
      string?,
      boolean?,
    ]
  | [PrepareActionObjectProps];
