import { toggle, variable, showIfTrue } from '../../../../factories/options';

export const advanced = {
  advancedSettings: toggle('Advanced settings', { value: false }),
  dataComponentAttribute: variable('Test attribute', {
    value: [],
    configuration: {
      condition: showIfTrue('advancedSettings'),
    },
  }),
};
