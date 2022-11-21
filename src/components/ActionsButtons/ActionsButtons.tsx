import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '..';

import { IActionsButtonProps } from '../../models';

import './style.scss';

const ActionsButtons: FC<IActionsButtonProps> = ({ saveChange }) => {
  const navigate = useNavigate();

  return (
    <div className="actions-button-box">
      <Button color="primary" onClick={() => saveChange()}>
        Сохранить
      </Button>

      <Button color="danger" onClick={() => navigate('/')}>
        Отмена
      </Button>
    </div>
  );
};

export default ActionsButtons;
