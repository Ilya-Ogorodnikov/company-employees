import { FC } from 'react';

import { ICardProps } from '../../../models';

import './style.scss';

const Card: FC<ICardProps> = ({ title, children }) => (
  <div className="card">
    <h3 className="card__title">{title}</h3>

    {children}
  </div>
);

export default Card;
