import { AuthenticationProfile } from './authenticationProfile';
import { Property } from './property';

interface PrepareActionObjectProps {
  componentId: string;
  actionTemplate: 'create' | 'update' | 'delete' | 'login' | 'empty';
  idProperty?: Property;
  properties?: Property[];
  authenticationProfile: AuthenticationProfile;
  pageAuthenticationProfileId?: string;
  actionName?: string;
  pageName?: string;
  permissions?: 'public' | 'private' | 'inherit';
  applyValidation?: boolean;
}

export type MakePrepareActionArgs =
  | [
      string,
      Property | undefined,
      Property[] | undefined,
      'create' | 'update' | 'delete' | 'login' | 'empty',
      AuthenticationProfile?,
      string?,
      string?,
      ('public' | 'private' | 'inherit' | string)?,
      string?,
      boolean?,
    ]
  | [PrepareActionObjectProps];
