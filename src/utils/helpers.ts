import { toast } from 'react-toastify';

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
    showToastError('Введите имя сотрудника, минимум 1 буква');
    return false;
  }

  if (isEmptyValue(role)) {
    showToastError('Выберите должность сотрудника');
    return false;
  }

  if (isInvalidValue(phone)) {
    showToastError('Заполните номер в виде +7 (ххх) хххх-хххх');
    return false;
  }

  if (isInvalidValue(birthday)) {
    showToastError('Заполните дату рождения в виде dd.mm.yyyy');
    return false;
  }

  return true;
};
