import { FC } from 'react';

import { IFilterBoxProps } from '../../../models';

import './style.scss';

const FilterBox: FC<IFilterBoxProps> = ({ title, children }) => (
  <div className="sorting-box">
    <p>{title}</p>

    {children}
  </div>
);

export default FilterBox;
