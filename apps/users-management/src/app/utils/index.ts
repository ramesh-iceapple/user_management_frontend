import { parse } from 'query-string';
import { LocalStorageUtil } from './localstorage';
import { axiosInstance } from '@users-platform/iceapple';

export const timeout = (time: number) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), time * 1000);
  return controller;
};

export function secondsToHms(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor((sec % 3600) % 60);

  const hDisplay = h > 0 ? h + (h === 1 ? ' hr ' : ' hrs ') : '';
  const mDisplay = m > 0 ? m + (m === 1 ? ' min ' : ' mins ') : '';
  const sDisplay = s > 0 ? s + (s === 1 ? ' sec' : ' secs') : '';

  if (h > 0) return hDisplay + mDisplay;
  return mDisplay + sDisplay;
}

export function getWelcomeTime() {
  const today = new Date();
  const curHr = today.getHours();

  if (curHr < 12) {
    return 'morning';
  } else if (curHr < 18) {
    return 'afternoon';
  } else {
    return 'evening';
  }
}

export function getDayAndDate() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = new Date();
  return `${days[d.getDay()]}, ${monthNames[d.getMonth()]}${d.getDate()}`;
}

export function getDiffDate(date: string) {
  const date1: any = new Date(date);
  const date2: any = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function getFormattedDate(date: string) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const d = new Date(date);
  return `${d.getDate()} ${monthNames[d.getMonth()]}, ${d.getFullYear()}`;
}

export function getInitials(name: string) {
  const temp = name.split(' ');
  if (temp.length >= 2) {
    return `${temp[0].substring(0, 1)}${temp[1].substring(0, 1)}`;
  }
  return temp[0].substring(0, 1);
}

export const getAllQueryParams = (querystring: string) => parse(querystring);

export const interceptApi = () => {
  axiosInstance.interceptors.response.use(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (response: any) => response,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (error: any) => {
      const responseStatusCode = error.response.status;
      const requestUrl = error.request.responseURL;
      switch (responseStatusCode) {
        case 404: {
          break;
        }

        case 401: {
          if (
            requestUrl.includes('/case') ||
            (window.location.href.includes('/home') &&
              requestUrl.includes('/users/info'))
          ) {
            LocalStorageUtil.clear();
            const hostUrl = window.location.origin;
            window.location.assign(`${hostUrl}/signin`);
          }
          break;
        }

        case 500: {
          break;
        }

        default: {
          break;
        }
      }
      if (error.response && error.response.data) {
        if (error.response.status) {
          error.response.data['status'] = error.response.status;
        }
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.message);
    }
  );
};

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '575px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  mobileXL: `(min-width: ${sizes.mobileXL})`,
};

export const handleStringKeyPress = (e: any) => {
  if (!/^[a-zA-Z ]*$/.test(e.key)) {
    //Restricting to enter alphabets.
    e.preventDefault();
  }
};

export const handleAlphaNumericKeyPress = (e: any) => {
  if (!/^[a-zA-Z0-9 ]*$/.test(e.key)) {
    //Restricting to enter alphabets.
    e.preventDefault();
  }
};

