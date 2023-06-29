import { AuthenticationProfile } from './authenticationProfile';
import { Property } from './property';

interface PrepareActionObjectProps {
  componentId: string;
  actionTemplate: string;
  idProperty?: Property;
  properties?: Property[];
  authenticationProfile: AuthenticationProfile;
  pageAuthenticationProfileId?: string;
  actionName?: string;
  pageName?: string;
  permissions?: string;
  applyValidation?: boolean;
}

export type MakePrepareActionArgs =
  | [
      string,
      Property | undefined,
      Property[] | undefined,
      string,
      AuthenticationProfile?,
      string?,
      string?,
      string?,
      string?,
      boolean?,
    ]
  | [PrepareActionObjectProps];
