export enum UserType {
  SUPERADMIN = "SuperAdmin",
  ADMIN = "Admin",
  MANAGER = "Manager",
}

export enum UserAccessingStatusType {
  NEWREQUEST = "New Request",
  ACTIVATED = "Activated",
}

export enum AccountHeaderType {
  SIGNIN = "signin",
  SIGNUP = "signup",
}

export enum StepperStatus {
  PROCESS = "process",
  WAIT = "wait",
  FINISH = "finish",
}

export enum Gender {
  MALE = 0,
  FEMALE = 1,
}

export enum Status {
  ACTIVE = 1,
  DELETED = 0,
}

export enum PERMISSION_TYPE {
  ROLE_VIEW = "role:view",
  ROLE_CREATE = "role:create",
  ROLE_UPDATE = "role:update",
  ROLE_DELETE = "role:delete",
  USER_VIEW = "user:view",
  USER_CREATE = "user:create",
  USER_UPDATE = "user:update",
  USER_DELETE = "user:delete",
  SITE_VIEW = "site:view",
  SITE_CREATE = "site:create",
  SITE_UPDATE = "site:update",
  SITE_DELETE = "site:delete",
  DEPARTMENT_VIEW = "department:view",
  DEPARTMENT_CREATE = "department:create",
  DEPARTMENT_UPDATE = "department:update",
  DEPARTMENT_DELETE = "department:delete",
}
