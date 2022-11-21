import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTypedSelector } from '../../hooks';
import { employeesRoles, tableHeader } from '../../constants';

const TableEmployees: FC = () => {
  const { employees } = useTypedSelector(state => state.employeesReducer);
  const navigate = useNavigate();

  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeader.map(headerCell => (
            <th key={headerCell.id}>{headerCell.title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {employees.map(employee => (
          <tr
            key={employee.id}
            onClick={() => navigate(`/edit-employee/${employee.id}`)}
          >
            <td>
              <input type="checkbox" checked={employee.isArchive} disabled />
            </td>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>
              {employeesRoles.find(role => role.value === employee.role)?.title}
            </td>
            <td>{employee.birthday}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableEmployees;
