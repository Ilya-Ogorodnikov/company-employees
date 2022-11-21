import { FC, useEffect, useState } from 'react';

import { FilterBox } from '..';

import { useActions } from '../../hooks';
import { IFilter, sortingFields } from '../../models';
import { employeesRoles, sortingOptions } from '../../constants';

const FilterTableBox: FC = () => {
  const [currentSortField, setCurrentSortField] = useState('');
  const [currentFilterField, setCurrentFilterField] = useState({
    fields: '',
    isArhive: false,
  });

  const { sortingEmployees, filterEmployees } = useActions();

  useEffect(() => {
    filterEmployees(currentFilterField as IFilter);
    sortingEmployees(currentSortField as sortingFields);
  }, [currentFilterField, currentSortField]);

  return (
    <>
      <FilterBox title="Сортировать по:">
        <select onChange={event => setCurrentSortField(event.target.value)}>
          {sortingOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </FilterBox>

      <FilterBox title="Фильтровать по:">
        <select
          onChange={event =>
            setCurrentFilterField(prev => ({
              ...prev,
              fields: event.target.value,
            }))
          }
        >
          {employeesRoles.map(option => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>

        <p>В архиве</p>

        <input
          type="checkbox"
          onChange={event =>
            setCurrentFilterField(prev => ({
              ...prev,
              isArhive: event.target.checked,
            }))
          }
        />
      </FilterBox>
    </>
  );
};

export default FilterTableBox;
