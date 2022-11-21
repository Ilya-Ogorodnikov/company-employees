import { FC, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

import { ActionsButtons, Card } from '..';

import { useActions } from '../../hooks';
import { IEmployee } from '../../models';
import { isValidValues, showToastSuccess } from '../../utils/helpers';
import { employeesRoles } from '../../constants';

const AddEmployee: FC = () => {
  const navigate = useNavigate();
  const [newEmployee, setNewEmployee] = useState<Omit<IEmployee, 'id'>>({
    name: '',
    birthday: '',
    isArchive: false,
    phone: '',
    role: '',
  });

  const { addEmployee } = useActions();

  const changeNewEmployee = (key: string, value: string | boolean) => {
    setNewEmployee({ ...newEmployee, [key]: value });
  };

  const saveChange = () => {
    if (
      isValidValues(
        newEmployee.name,
        newEmployee.role,
        newEmployee.phone,
        newEmployee.birthday,
      )
    ) {
      addEmployee(newEmployee);
      showToastSuccess('Сотрудник добавлен в конец списка');
      navigate('/');
    }
  };

  return (
    <Card title="Добавление сотрудника">
      <div className="edit-box">
        <div>
          <label htmlFor="isArchive">В архиве:</label>

          <input
            id="isArchive"
            type="checkbox"
            checked={newEmployee.isArchive}
            onChange={event =>
              changeNewEmployee('isArchive', event.target.checked)
            }
          />
        </div>

        <div>
          <label htmlFor="name">Имя сотрудника:</label>

          <input
            id="name"
            value={newEmployee.name}
            onChange={event => changeNewEmployee('name', event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="role">Должность работника:</label>

          <select
            id="role"
            onChange={event => changeNewEmployee('role', event.target.value)}
          >
            {employeesRoles.map(option => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="phone">Номер телефона:</label>

          <ReactInputMask
            id="phone"
            mask="+7 (999) 999-9999"
            value={newEmployee.phone}
            onChange={event => changeNewEmployee('phone', event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="birthday">День рождения:</label>

          <ReactInputMask
            id="birthday"
            mask="99.99.9999"
            value={newEmployee.birthday}
            onChange={event =>
              changeNewEmployee('birthday', event.target.value)
            }
          />
        </div>

        <ActionsButtons saveChange={saveChange} />
      </div>
    </Card>
  );
};

export default AddEmployee;
