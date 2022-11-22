import { toast } from 'react-toastify';
import {
  ERROR_MESSAHE_FOR_BIRTHDAY,
  ERROR_MESSAHE_FOR_NAME,
  ERROR_MESSAHE_FOR_PHONE,
  ERROR_MESSAHE_FOR_ROLE,
} from '../constants';

export const reverseDateRepresentation = (date: string) => {
  const parts = date.split('.');
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
};

export const isInvalidValue = (value: string) => value.indexOf('_') !== -1;

export const isEmptyValue = (value: string) => value.length === 0;

export const showToastError = (text: string) => {
  toast.error(text, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    onClose: undefined,
  });
};

export const showToastSuccess = (text: string) => {
  toast.success(text, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    onClose: undefined,
  });
};

export const isValidValues = (
  name: string,
  role: string,
  phone: string,
  birthday: string,
) => {
  if (isEmptyValue(name)) {
    showToastError(ERROR_MESSAHE_FOR_NAME);
    return false;
  }

  if (isEmptyValue(role)) {
    showToastError(ERROR_MESSAHE_FOR_ROLE);
    return false;
  }

  if (isInvalidValue(phone)) {
    showToastError(ERROR_MESSAHE_FOR_PHONE);
    return false;
  }

  if (isInvalidValue(birthday)) {
    showToastError(ERROR_MESSAHE_FOR_BIRTHDAY);
    return false;
  }

  return true;
};
