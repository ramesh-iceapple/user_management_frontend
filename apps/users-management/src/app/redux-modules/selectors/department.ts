import { RootState } from '../../store';

export const getDepartmentsInfoSelector = (state: RootState) =>
  state.department.departments;