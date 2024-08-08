import { Col, Form, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
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
import { useAppDispatch } from "../../../store";
import {
  createRole,
  fetchRoles,
  updateRole,
} from "../../../redux-modules/thunks/role";
import { IRole } from "../../../interfaces";
import { FormattedMessage, useIntl } from "react-intl";
import { handleStringKeyPress } from "../../../utils";

export interface IUpsertRoleForm {
  onClose: any;
  role?: IRole;
  childRef: any;
  handlePermissions?: any;
}

const UpsertRoleForm = forwardRef((props: IUpsertRoleForm) => {
  const [form] = useForm();
  const [disabledCreate, setDisabledCreate] = useState(true);
  const dispatch = useAppDispatch();
  const intl = useIntl();
  const onFinish = async (values: any) => {
    if (props.role) {
      updateRoleRequest(values);
      return;
    }
    const result = await dispatch(
      createRole({
        name: values.name.trim(),
        description: values.description.trim(),
      })
    );
    if (createRole.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage(
          { id: "role.create.successMessage" },
          { name: values.name }
        ),
      });
      form.resetFields();
      const roleReult = await dispatch(fetchRoles());
      props.onClose();
      if (fetchRoles.fulfilled.match(roleReult)) {
        props.handlePermissions(roleReult.payload.find((x) => x.id === result.payload));
      }
    } else if (createRole.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message }),
      });
    }
  };

  const updateRoleRequest = async (values: any) => {
    const result = await dispatch(
      updateRole({
        name: values.name.trim(),
        description: values.description.trim(),
        id: props.role?.id,
      })
    );
    if (updateRole.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage(
          { id: "role.update.successMessage" },
          { name: values.name }
        ),
      });
      dispatch(fetchRoles());
      props.onClose();
    } else if (updateRole.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message }),
      });
    }
  };

  useEffect(() => {
    if (props.role) {
      form.setFieldsValue(props.role);
    }
  }, [props.role]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleFormChange = () => {
    const hasErrors =
      !form.isFieldsTouched(["name", "description"], true) ||
      form.getFieldsError().some((form: any) => form.errors.length);
    setDisabledCreate(hasErrors);
  };

  useImperativeHandle(
    props.childRef,
    () => {
      return {
        resetFormFields() {
          form.resetFields();
        },
      };
    },
    []
  );

  return (
    <>
      <UpsertUserUserInfoCard>
        <Row align="middle" justify="center">
          <UpsertUserUserInfoHeaderText>
            <FormattedMessage id="um.roles.roleInfoForm.title" />
          </UpsertUserUserInfoHeaderText>
        </Row>
        <UpsertUserUserInfoWrapper align="middle" justify="center">
          <UpsertUserUserInfoHintText>
            <FormattedMessage id="um.roles.roleInfoForm.subTitle" />
          </UpsertUserUserInfoHintText>
        </UpsertUserUserInfoWrapper>
        <FormWrapper
          name="UpsertUserEmail"
          onFieldsChange={handleFormChange}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <FormRowWrapper>
            <FormLeftColWrapper xs={24} sm={24} lg={24} xl={24}>
              <Form.Item
                name="name"
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
                  maxLength={100}
                  placeholder={intl.formatMessage({
                    id: "um.roles.roleInfoForm.nameField.placeHolder",
                  })}
                  label={intl.formatMessage({ id: "common.name" })}
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
                  required={true}
                  type="block"
                  placeholder={intl.formatMessage({
                    id: "um.roles.roleInfoForm.descriptionField.placeHolder",
                  })}
                  label={intl.formatMessage({ id: "common.description" })}
                  span={[24, 24]}
                  maxLength={200}
                />
              </Form.Item>
            </FormLeftColWrapper>
          </FormRowWrapper>
          <UpsertUserUserInfoActionsWrapper>
            <Row gutter={[16, 16]} align={"middle"} justify={"center"}>
              <Col>
                <SubmitDemoButtonWrapper
                  block
                  htmlType="submit"
                  disabled={disabledCreate}
                  id="saveRole"
                >
                  <FormattedMessage id="saveButton.text" />
                </SubmitDemoButtonWrapper>
              </Col>
              {props.role && props.handlePermissions && (
                <Col>
                  <SubmitDemoButtonWrapper
                    block
                    id="editPermissions"
                    onClick={() => props.handlePermissions(props.role)}
                  >
                    <FormattedMessage id="um.role.permissions.edit" />
                  </SubmitDemoButtonWrapper>
                </Col>
              )}
            </Row>
          </UpsertUserUserInfoActionsWrapper>
        </FormWrapper>
      </UpsertUserUserInfoCard>
    </>
  );
});

export default UpsertRoleForm;
