import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { FilterTableBox, Card, TableEmployees, Button } from '..';

import './style.scss';

const ListEmployees: FC = () => {
  const navigate = useNavigate();

  return (
    <Card title="Список сотрудников">
      <div
        style={{ paddingBottom: 5 }}
        onClick={() => navigate('/add-employee')}
      >
        <Button color="primary">Добавить сотрудника</Button>
      </div>

      <FilterTableBox />

      <TableEmployees />
    </Card>
  );
};

export default ListEmployees;
