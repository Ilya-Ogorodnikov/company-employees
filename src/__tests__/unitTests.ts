import {
  reverseDateRepresentation,
  isInvalidValue,
  isEmptyValue,
  isValidValues,
} from '../utils/helpers';

describe('validateValue', () => {
  test('reverseDate', () => {
    expect(reverseDateRepresentation('15.10.2000')).toEqual('2000.10.15');
  });

  test('validString', () => {
    expect(isInvalidValue('1234567890')).toEqual(false);
  });

  test('unValidString', () => {
    expect(isInvalidValue('123456__')).toEqual(true);
  });

  test('emptyString', () => {
    expect(isEmptyValue('')).toEqual(true);
  });

  test('notEmptyString', () => {
    expect(isEmptyValue('day')).toEqual(false);
  });

  test('validValues', () => {
    expect(isValidValues('name', 'role', '1234567890', '11.11.1990')).toEqual(
      true,
    );
  });

  test('unValidValues', () => {
    expect(isValidValues('', '', '1234567__', '11.11.19__')).toEqual(false);
  });
});
