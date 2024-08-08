import userReducer from '../redux-modules/slices/user';
import authReducer from '../redux-modules/slices/auth';
import roleReducer from '../redux-modules/slices/role';
import siteReducer  from '../redux-modules/slices/site';
import departmentReducer from '../redux-modules/slices/department'

export const reducersReduxMap = {
  user: userReducer,
  auth: authReducer,
  role: roleReducer,
  site: siteReducer,
  department: departmentReducer
};
