import { IUserInfo, DefaultUserInfo } from "../interfaces";

const localStorageInfoKey = "usersplatform.user";

const localStorageTokens = "usersplatform.tokens";

export const LocalStorageUtil = {
  saveUserToLocalStorage: (info: IUserInfo) => {
    localStorage.setItem(localStorageInfoKey, JSON.stringify(info));
  },

  getUserFromLocalStorage: (): IUserInfo => {
    const localStorageInfo = localStorage.getItem(localStorageInfoKey);

    if (localStorageInfo) {
      const user = JSON.parse(localStorageInfo);

      return user;
    }

    return DefaultUserInfo;
  },

  getTokensLocalStorage: (): { authToken: string; refreshToken: string } => {
    const localStorageInfo = localStorage.getItem(localStorageTokens);

    if (localStorageInfo) {
      const tokens = JSON.parse(localStorageInfo);

      return tokens;
    }

    return { authToken: "", refreshToken: "" };
  },

  saveTokensToLocalStorage: (authToken: string, refreshToken: string) => {
    localStorage.setItem(
      localStorageTokens,
      JSON.stringify({ authToken, refreshToken })
    );
  },

  clear: () => {
    localStorage.removeItem(localStorageInfoKey);
    // localStorage.clear();
  },
};
