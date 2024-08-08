export * from './fetchUtils';
export * from './redux';
export * from './validation';
import moment from "moment";


export const convertUtcToLocalDate = (utcDate: any) =>{
    const localeLang = navigator.language;
    const momentDate = moment.utc(utcDate);
    const formattedDate= momentDate.locale(localeLang).format('L');
    
    return formattedDate;
}

export const convertUtcToLocalDateTime = (utcDate: any) =>{
    const localeLang = navigator.language;
    const momentDate = moment.utc(utcDate);
    const formattedDate= momentDate.locale(localeLang).format('LLL A'); 
 
    return formattedDate;
  }
