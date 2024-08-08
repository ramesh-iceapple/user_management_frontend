import { message } from "antd";
import { ArgsProps } from "antd/lib/message";

export const toastInfo = (config: ArgsProps) => message.info({ ...config, ...{ style: { marginTop: 60 } }, ...{className: "toastInfo"} });

export const toastSuccess = (config: ArgsProps) => message.success({ ...config, ...{ style: { marginTop: 60 } },...{className: "toastSuccess"} });

export const toastError = (config: ArgsProps) =>
  message.error({ ...config, ...{ style: { marginTop: 60 } }, ...{className: "toastError"} });

export const toastWarning = (config: ArgsProps) => message.warning({ ...config, ...{ style: { marginTop: 60 } },...{className: "toastWarning"} });

export const toastLoading = (config: ArgsProps) => message.loading({ ...config, ...{ style: { marginTop: 60 } },...{className: "toastLoading"} });
