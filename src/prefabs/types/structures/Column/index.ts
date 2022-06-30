import { component } from '../../../factories';
import { PrefabComponent } from '../../component';
import {
  PrefabComponentOption,
  PrefabComponentRef,
  PrefabComponentStyle,
} from '../../options';
import { options as defaults } from './options';

type OptionProducer = (key: string) => PrefabComponentOption;

export interface Configuration {
  options?: Record<string, OptionProducer>;
  style?: PrefabComponentStyle;
  ref?: PrefabComponentRef;
}
export const Column = (
  config: Configuration,
  descendants: PrefabComponent[] = [],
) => {
  const options = { ...(config.options || defaults) };
  const style = { ...config.style };
  const ref = config.ref ? { ...config.ref } : undefined;

  return component('Column', { options, style, ref }, descendants);
};
