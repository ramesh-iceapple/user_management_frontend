import { BASE_URL } from './common';

const API_BASE_URL = `${BASE_URL}/api`;

const ENDPOINT = {
  AUTH: {
    SIGNUP: () => `${API_BASE_URL}/users`,
    PASSWORD: () => `${API_BASE_URL}/users/password`,
    USERDETAILS: () => `${API_BASE_URL}/users/details`,
    SIGNIN: () => `${API_BASE_URL}/Auth/login`,
    LOGOUT: () => `${API_BASE_URL}/Auth/logout`,
    VERIFY: () => `${API_BASE_URL}/users/auth/otp/verify`,
    RETRY: () => `${API_BASE_URL}/users/auth/otp/retry`,
    TOKEN_VERIFY: () => `${API_BASE_URL}/users/token/verify`,
  },
  USER: {
    USER: () => `${API_BASE_URL}/User`,
    USERSLIST: () => `${API_BASE_URL}/User/list`,
    UPDATEUSER: (id: number) => `${API_BASE_URL}/User/${id}`,
    UPDATEPASSWORD: (id: number) =>`${API_BASE_URL}/User/changepassword/${id}`,
    USERPERMISSIONS: () => `${API_BASE_URL}/User/permission`,
    USERAPPS: () => `${API_BASE_URL}/User/apps`,
  },
  ROLES: {
    ROLELIST: () => `${API_BASE_URL}/Role/list`,
    ROLELPERMISSIONIST: () => `${API_BASE_URL}/Role/list/roleswithpermissions`,
    ROLE: () => `${API_BASE_URL}/Role`,
    UPDATEROLE: (id: number) => `${API_BASE_URL}/Role/${id}`,
    PERMISSIONS: () => `${API_BASE_URL}/Role/permission`,
    UPDATEPERMISSION: () => `${API_BASE_URL}/Role/updateRolePermission`,
    GETROLEPERMISSION: (id: number) => `${API_BASE_URL}/Role/permission/role/${id}`,
  },
  SITES:{
    SITESLIST: () => `${API_BASE_URL}/Site/list`,
  },
  DEPARTMENTS:{
    DEPARTMENTSLIST: () => `${API_BASE_URL}/Department/list`,
    DEPARTMENT: () => `${API_BASE_URL}/Department`,
    UPDATEDEPARTMENT: (id: number) => `${API_BASE_URL}/Department/${id}`,
  }
};
export default ENDPOINT;