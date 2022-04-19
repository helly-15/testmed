import { omit } from 'lodash';
import { clear } from 'utils/object';

type AnyObject = { [key: string]: any };
type ConditionFunction = { [key: string]: (value: any) => boolean };

function getChangedKey(changed: any, origin: any) {
  const keys = Object.keys(changed);
  for (const k of keys) {
    if (!origin || changed[k] !== origin[k]) {
      return k;
    }
  }
  return;
}

/**
 * Clears the dependant fields in changedValues and origin specified in the keyDependency
 * if the conditions specified in the keyCondition are met
 *
 * @param key name of a form item that have changed
 * @param changedValues form items current values
 * @param origin origin object from the DB
 * @param keyDependency object that describes which fields must be cleared
 * @param keyCondition object that contains conditions by keys that must be checked before clear dependant fields
 */
function processChanges(
  key: string,
  changedValues: AnyObject,
  origin: AnyObject,
  keyDependency?: AnyObject,
  keyCondition?: ConditionFunction
) {
  const keys = keyDependency?.[key];
  const changedValue = changedValues[key];

  if (keys) {
    if (Array.isArray(keys)) {
      const condition =
        typeof changedValue === 'boolean'
          ? !changedValue
          : keyCondition && keyCondition[key]
          ? typeof keyCondition[key] === 'function'
            ? keyCondition[key](changedValue)
            : keyCondition[key]
          : false;

      if (condition) {
        clear(changedValues, keys);
        return { ...omit(origin, keys), [key]: changedValue };
      }
    } else {
      const changedKey = getChangedKey(changedValues[key], origin[key]);
      if (changedKey) {
        let newOrigin = origin;
        const newKeyValue = processChanges(
          changedKey,
          changedValues[key],
          origin[key],
          keys
        );
        newOrigin = { ...newOrigin, [key]: newKeyValue };
        return newOrigin;
      }
    }
  }

  return { ...origin, [key]: changedValue };
}

/**
 * Handles form items change, updates changedValues and returns new object to save in the DB
 *
 * @param changedValue form item changed value { itemName: value}
 * @param changedValues form items current values { itemName1: value, itemName2: value, ...etc }
 * @param origin origin object from the DB
 * @param keyDependency object that describes which fields must be cleared.
 *    Its keys and values are keys of changedValues and origin objects.
 *    Strucuture:
 *        { fieldName: [dependantFieldName1, dependantFieldName2] }
 *        when fieldName changed in changedValues, dependantFieldName1 and
 *        dependantField2 must be cleared
 * @param keyCondition object that contains conditions by keys that must be checked before clear dependant fields
 *
 * @returns new object based on origin with changes specified in changedValue
 */
export function handleFormChange(
  changedValue: any,
  changedValues: any,
  origin: any,
  keyDependency?: AnyObject,
  keyCondition?: ConditionFunction
) {
  if (!origin) {
    return { ...changedValue };
  } else {
    const key = Object.keys(changedValue)[0];

    return processChanges(
      key,
      changedValues,
      origin,
      keyDependency,
      keyCondition
    );
  }
}
