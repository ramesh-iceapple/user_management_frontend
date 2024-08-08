import { Form, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState,useImperativeHandle, forwardRef } from "react";
import {
  FormLeftColWrapper,
  FormRowWrapper,
  FormWrapper,
  UpsertUserUserInfoActionsWrapper,
  UpsertUserUserInfoCard,
  UpsertUserUserInfoHeaderText,
  UpsertUserUserInfoHintText,
  UpsertUserUserInfoWrapper,
  SubmitDemoButtonWrapper,
} from "./index.style";
import {
  TextAreaInput,
  TextInput,
  toastError,
  toastSuccess,
} from "@users-platform/iceapple";

import { IDepartment } from "../../../interfaces";
import { FormattedMessage,useIntl } from "react-intl";
import { useAppDispatch } from "apps/users-management/src/app/store";
import { createDepartment, fetchDepartments, updateDepartment } from "../../../redux-modules/thunks/department";
import { handleStringKeyPress } from "../../../utils";

export interface IUpsertDepartmentForm {
  onClose: any;
  department?: IDepartment;
  parentRef?: any;
}

const UpsertDepartmentForm = forwardRef((props: IUpsertDepartmentForm) => {
  const [form] = useForm();
  const [disabledCreate, setDisabledCreate] = useState(true);
  const dispatch = useAppDispatch();
  const intl= useIntl();
  
  const onFinish = async (values: any) => {
    if (props.department) {
      updateDepartmentRequest(values);
      return;
    }
    const result = await dispatch(
      createDepartment({
        name: values.departmentName.trim(),
        description: values.description.trim(),
      })
    );
    if (createDepartment.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage({ id:"department.create.successMessage"}, {name: values.departmentName}),
      });
      form.resetFields();
      dispatch(fetchDepartments());
      props.onClose();
    } else if (createDepartment.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message}),
      });
    }
  };

  const updateDepartmentRequest = async (values: any) => {
    const result = await dispatch(
      updateDepartment({
        name: values.departmentName.trim(),
        description: values.description.trim(),
        id: props.department?.id,
      })
    );
    if (updateDepartment.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage({ id:"department.update.successMessage"}, {name: values.departmentName}),
      });
      dispatch(fetchDepartments());
      props.onClose();
    } else if (updateDepartment.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message}),
      });
    }
  };

  useEffect(() => {
    if (props.department) {
      form.setFieldsValue({
        departmentName: props.department.name,
        description: props.department.description
      });
    }
  }, [props.department]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleFormChange = () => {
    const hasErrors =
      !form.isFieldsTouched([ "departmentName","description"], true) ||
      form.getFieldsError().some((form: any) => form.errors.length);
    setDisabledCreate(hasErrors);
  };

  useImperativeHandle(props.parentRef, () => { 
    return{
      resetFormFields() {
      form.resetFields();
    }
  };
  },[]);

  return (
    <UpsertUserUserInfoCard>
      <Row align="middle" justify="center">
        <UpsertUserUserInfoHeaderText>
          <FormattedMessage id="um.departmentsInfoForm.title"/>
        </UpsertUserUserInfoHeaderText>
      </Row>
      <UpsertUserUserInfoWrapper align="middle" justify="center">
        <UpsertUserUserInfoHintText>
        <FormattedMessage id="um.departmentsInfoForm.subTitle"/>
        </UpsertUserUserInfoHintText>
      </UpsertUserUserInfoWrapper>
      <FormWrapper
        name="UpsertDepartmentForm"
        onFieldsChange={handleFormChange}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormRowWrapper>
          <FormLeftColWrapper xs={24} sm={24} lg={24} xl={24}>
            <Form.Item
              name="departmentName"
              rules={[
                {
                  required: true,
                  message: "",
                },
                {
                  validator: (_, value) =>
                    value && value.trim().length === 0
                      ? Promise.reject(new Error("No spaces allowed"))
                      : Promise.resolve(),
                },
              ]}
            >
              <TextInput
                required={true}
                type="block"
                placeholder = {intl.formatMessage({ id: "um.departmentName.placeHolder" })}
                label={intl.formatMessage({ id: "common.departmentName" })}
                maxLength={100}
                onKeyPress={handleStringKeyPress}
              />
            </Form.Item>
          </FormLeftColWrapper>
          <FormLeftColWrapper xs={24} sm={24} lg={24} xl={24}>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "",
                },
                {
                  validator: (_, value) =>
                    value && value.trim().length === 0
                      ? Promise.reject(new Error("No spaces allowed"))
                      : Promise.resolve(),
                },
              ]}
            >
              <TextAreaInput
                type="block"
                placeholder = {intl.formatMessage({ id: "um.roles.roleInfoForm.descriptionField.placeHolder" })}
                label={intl.formatMessage({ id: "common.description" })}
                span={[24, 24]}
                maxLength={200}
              />
            </Form.Item>
          </FormLeftColWrapper>
        </FormRowWrapper>
        <UpsertUserUserInfoActionsWrapper>
          <SubmitDemoButtonWrapper
            block
            htmlType="submit"
            disabled={disabledCreate}
            id="saveDepartmentBtn"
          >
            <FormattedMessage id="saveButton.text"/>
          </SubmitDemoButtonWrapper>
        </UpsertUserUserInfoActionsWrapper>
      </FormWrapper>
    </UpsertUserUserInfoCard>
  );
});

export default UpsertDepartmentForm;
