import { FC, useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { useNavigate, useParams } from 'react-router-dom';

import { ActionsButtons, Card } from '..';

import { useActions, useTypedSelector } from '../../hooks';
import { IEmployee } from '../../models';
import { isValidValues, showToastSuccess } from '../../utils/helpers';
import { employeesRoles } from '../../constants';

import './style.scss';

const EditEmployee: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentEmployee, setCurrentEmployee] = useState<IEmployee>({
    id: 0,
    name: '',
    birthday: '',
    isArchive: false,
    phone: '',
    role: '',
  });

  const { employees } = useTypedSelector(state => state.employeesReducer);
  const { changeEmployee } = useActions();

  useEffect(() => {
    if (id) {
      setCurrentEmployee(employees.find(el => el.id === +id)!);
    }
  }, []);

  const changeCurrentEmployee = (key: string, value: string | boolean) => {
    setCurrentEmployee({ ...currentEmployee, [key]: value });
  };

  const saveChange = () => {
    if (
      isValidValues(
        currentEmployee.name,
        currentEmployee.role,
        currentEmployee.phone,
        currentEmployee.birthday,
      )
    ) {
      changeEmployee(currentEmployee);
      showToastSuccess('Сотрудник успешно изменен');
      navigate('/');
    }
  };

  return (
    <Card title="Редактирование сотрудника">
      <div className="edit-box">
        <div>
          <label htmlFor="isArchive">В архиве:</label>

          <input
            id="isArchive"
            type="checkbox"
            checked={currentEmployee.isArchive}
            onChange={event =>
              changeCurrentEmployee('isArchive', event.target.checked)
            }
          />
        </div>

        <div>
          <label htmlFor="name">Имя сотрудника:</label>

          <input
            id="name"
            value={currentEmployee.name}
            onChange={event =>
              changeCurrentEmployee('name', event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="role">Должность работника:</label>

          <select
            id="role"
            onChange={event =>
              changeCurrentEmployee('role', event.target.value)
            }
          >
            <option hidden>
              {
                employeesRoles.find(
                  element => element.value === currentEmployee.role,
                )?.title
              }
            </option>

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
            value={currentEmployee.phone}
            onChange={event =>
              changeCurrentEmployee('phone', event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="birthday">День рождения:</label>

          <ReactInputMask
            id="birthday"
            mask="99.99.9999"
            value={currentEmployee.birthday}
            onChange={event =>
              changeCurrentEmployee('birthday', event.target.value)
            }
          />
        </div>

        <ActionsButtons saveChange={saveChange} />
      </div>
    </Card>
  );
};

export default EditEmployee;
