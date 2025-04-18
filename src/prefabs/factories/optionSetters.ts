type Format = 'propertyLabel' | 'propertyValue' | 'static';
interface Condition {
  condition: 'property_is_relation' | 'property_is_property' | 'value_is_empty';
  result: string;
}
interface SetBaseOptionProps {
  target: string;
}

interface SetVariableOptionProps extends SetBaseOptionProps {
  format: Format;
}

interface SetButtonGroupOptionProps extends SetBaseOptionProps {
  conditions: Condition[];
}

export function setVariableOption({ target, format }: SetVariableOptionProps) {
  return { action: 'setVariable', format, target };
}

export function setModelOption({ target }: SetBaseOptionProps) {
  return { action: 'setModel', target };
}

export function setOptionToDefaultValue({ target }: SetBaseOptionProps) {
  return { action: 'setToDefault', target };
}

export function setActionJSInputVariableOption({ target }: SetBaseOptionProps) {
  return { action: 'setActionJSInputVariable', target };
}

export function setPropertyOption({ target }: SetBaseOptionProps) {
  return { action: 'setProperty', target };
}

export function setButtonGroupOption({
  target,
  conditions,
}: SetButtonGroupOptionProps) {
  return { action: 'setButtonGroup', target, conditions };
}
