import { FC } from 'react';

import { IButtonProps } from '../../../models';

import './style.scss';

const Button: FC<IButtonProps> = ({ children, color, onClick }) => (
  <button className={`button ${color}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
