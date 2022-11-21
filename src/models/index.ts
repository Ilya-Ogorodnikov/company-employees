type filterFields = 'waiter' | 'cook' | 'driver';

export type sortingFields = 'birthday' | 'name';

export interface IEmployee {
  id: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: string;
}

export interface IEmployeeState {
  employees: IEmployee[];
  editedEmployees: IEmployee[];
  newEmployees: IEmployee[];
}

export interface IFilter {
  fields: filterFields;
  isArhive: boolean;
}

export interface ICardProps {
  title: string;
  children: React.ReactNode;
}

export interface IFilterBoxProps extends ICardProps {}

export interface IButtonProps {
  children: React.ReactNode;
  color: 'primary' | 'danger';
  onClick?: () => void;
}

export interface IActionsButtonProps {
  saveChange: () => void;
}
