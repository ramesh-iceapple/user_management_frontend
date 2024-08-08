import { Col, Form, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { IUserUpsertFormValues } from "../../../interfaces";
import {
  FormLeftColWrapper,
  FormRightColWrapper,
  FormRowWrapper,
  FormWrapper,
  SelectInputLabel,
  UpsertUserUserInfoActionsWrapper,
  UpsertUserUserInfoCard,
  UpsertUserUserInfoHeaderText,
  UpsertUserUserInfoHintText,
  UpsertUserUserInfoWrapper,
  SubmitDemoButtonWrapper,
  SelectInputRequired,
} from "./index.style";
import { SelectInput, TextInput } from "@users-platform/iceapple";
import { useAppSelector } from "../../../store";
import {  getRolesWithPermissions } from "../../../redux-modules/selectors/role";
import validation from "libs/iceapple/src/lib/utils/validation";
import { getSitesInfoSelector } from "../../../redux-modules/selectors/site";
import { FormattedMessage, useIntl } from "react-intl";
import { getDepartmentsInfoSelector } from "../../../redux-modules/selectors/department";

export interface IUpsertUserInfoForm {
  onNext: any;
  user?: IUserUpsertFormValues | null;
  onPasswordNext?: any;
  childRef?: any;
  editUser?: boolean;
  isBackStep?: boolean;
}

const UpsertUserInfoForm = forwardRef(({
  onNext,
  user,
  onPasswordNext,
  childRef,
  editUser,
  isBackStep
}: IUpsertUserInfoForm) => {
  const [form] = useForm();
  const [disabledCreate, setDisabledCreate] = useState(false);
  const roles = useAppSelector(getRolesWithPermissions);
  const sites = useAppSelector(getSitesInfoSelector);
  const departments = useAppSelector(getDepartmentsInfoSelector)
  const intl = useIntl();

  useEffect(()=>{
    if(!editUser){
      if(isBackStep){
        setDisabledCreate(false);
      }else{
        setDisabledCreate(true);
      }
    }else{
      setDisabledCreate(false);
    }
  },[editUser,isBackStep])

  const onFinish = (values: any) => {
    onNext({
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      countryCode: values.countryCode,
      mobile: values.mobile.trim(),
      statusCode: values.statusCode,
      gender: values.gender,
      roleIds: values.roleIds,
      siteIds: values.siteIds,
      departmentId: values.departmentId,
      isSitesChanged: !(values.siteIds.length === user?.siteIds.length && values.siteIds.every((value: any, index: number) => value === user?.siteIds[index]))
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
    } else {
      form.setFieldValue("countryCode", "+1");
    }
  }, [user]);

  const handleFormChange = () => {
    const hasErrors =
      !form.isFieldsTouched(
        [
          "firstName",
          "lastName",
          "email",
          "mobile",
          "gender",
          "statusCode",
          "roleIds",
          "siteIds",
          "departmentId"
        ],
        true
      ) || form.getFieldsError().some((form: any) => form.errors.length);
    setDisabledCreate(hasErrors);
  };

  useImperativeHandle(childRef, () => {
    return {
      resetFormFields() {
        form.resetFields();
      }
    };
  }, []);

  return (
    <UpsertUserUserInfoCard>
      <Row align="middle" justify="center">
        <UpsertUserUserInfoHeaderText>
          <FormattedMessage id="um.userDetails" />
        </UpsertUserUserInfoHeaderText>
      </Row>
      <UpsertUserUserInfoWrapper align="middle" justify="center">
        <UpsertUserUserInfoHintText>
          <FormattedMessage id="um.users.userInfoForm.subTitle" />
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
          <FormLeftColWrapper xs={24} sm={24} lg={12} xl={12}>
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      value &&
                      validation.validateName(value)
                    ) {
                      return Promise.resolve();
                    } else if (
                      value &&
                      !validation.validateName(value)
                    ) {
                      return Promise.reject(
                        new Error(intl.formatMessage({ id: "validation.nameField.error" }))
                      );
                    } else if (value && value.trim().length === 0) {
                      return Promise.reject(new Error(intl.formatMessage({ id: "validation.noSpaces.error" })));
                    }
                  },
                }),
              ]}
            >
              <TextInput
                required={true}
                type="block"
                placeholder={intl.formatMessage({ id: "um.users.userInfoForm.firstNameField.placeHolder" })}
                label={intl.formatMessage({ id: "common.firstName" })}
              />
            </Form.Item>
          </FormLeftColWrapper>
          <FormRightColWrapper xs={24} sm={24} lg={12} xl={12}>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      value &&
                      validation.validateName(value)
                    ) {
                      return Promise.resolve();
                    } else if (
                      value &&
                      !validation.validateName(value)
                    ) {
                      return Promise.reject(
                        new Error(intl.formatMessage({ id: "validation.nameField.error" }))
                      );
                    } else if (value && value.trim().length === 0) {
                      return Promise.reject(new Error(intl.formatMessage({ id: "validation.noSpaces.error" })));
                    }
                  },
                }),
              ]}
            >
              <TextInput
                required={true}
                type="block"
                placeholder={intl.formatMessage({ id: "um.users.userInfoForm.lastNameField.placeHolder" })}
                label={intl.formatMessage({ id: "common.lastName" })}
              />
            </Form.Item>
          </FormRightColWrapper>
        </FormRowWrapper>
        <FormRowWrapper>
          <FormLeftColWrapper xs={24} sm={24} lg={12} xl={12}>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: intl.formatMessage({ id: "validation.email.error" }),
                },
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <TextInput
                required={true}
                type="block"
                placeholder={intl.formatMessage({ id: "um.users.userInfoForm.emailField.placeHolder" })}
                label={intl.formatMessage({ id: "common.email" })}
              />
            </Form.Item>
          </FormLeftColWrapper>
          <FormRightColWrapper xs={24} sm={24} lg={12} xl={12}>
            <SelectInputLabel>
              <SelectInputRequired>*</SelectInputRequired><FormattedMessage id="common.phoneNumber" />
            </SelectInputLabel>
            <Row wrap={false} >
              <Col xs={7} sm={7} lg={8} xl={8} id="countryCode">
                <Form.Item
                  name="countryCode"
                  rules={[
                    {
                      validator: (_, value) =>
                        value && value.trim().length === 0
                          ? Promise.reject(new Error(intl.formatMessage({ id: "validation.noSpaces.error" })))
                          : Promise.resolve(),
                    },
                  ]}
                >
                  <SelectInput
                    required={true}
                    label={intl.formatMessage({ id: "common.countryCode" })}
                    placeholder={intl.formatMessage({ id: "common.countryCode.placeHolder" })}
                    hiddenLabel={true}
                    defaultValue="+91"
                    options={[
                      { value: "+1", label: "+1", id: "+1" },
                      { value: "+91", label: "+91", id: "+91" },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col xs={17} sm={17} lg={16} xl={16}>
                <Form.Item
                  name="mobile"
                  rules={[
                    { required: true, message: "" },
                    () => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.resolve();
                        }
                        else if (value &&
                          validation.validateMobile(value)) {
                          return Promise.resolve();
                        } else {
                          return Promise.reject(
                            new Error(intl.formatMessage({ id: "validation.mobile.error" }))
                          );
                        }
                      },
                    }),
                  ]}
                >
                  <TextInput
                    textType="tel"
                    type="block"
                    hiddenLabel={true}
                    placeholder={intl.formatMessage({ id: "um.users.userInfoForm.phoneNumberField.placeHolder" })}
                    label={intl.formatMessage({ id: "common.phoneNumber" })}
                  />
                </Form.Item>
              </Col>
            </Row>
          </FormRightColWrapper>
        </FormRowWrapper>
        <FormRowWrapper>
          <FormLeftColWrapper xs={24} sm={24} lg={12} xl={12}>
            <Form.Item
              name="gender"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <SelectInput
                required={true}
                label={intl.formatMessage({ id: "common.gender" })}
                placeholder={intl.formatMessage({ id: "um.users.userInfoForm.genderField.placeHolder" })}
                options={[
                  { value: 0, label: <FormattedMessage id="common.gender.male" />, id: "male" },
                  { value: 1, label: <FormattedMessage id="common.gender.female" />, id: "female" },
                ]}
              />
            </Form.Item>
          </FormLeftColWrapper>
          <FormRightColWrapper xs={24} sm={24} lg={12} xl={12}>
            <Form.Item
              name="statusCode"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <SelectInput
                required={true}
                label={intl.formatMessage({ id: "common.status" })}
                placeholder={intl.formatMessage({ id: "um.users.userInfoForm.statusField.placeHolder" })}
                options={[
                  { value: 1, label: <FormattedMessage id="um.users.filtersBy.statusFilter.option1" />, id: "active" },
                  { value: 0, label: <FormattedMessage id="um.users.filtersBy.statusFilter.option2" />, id: "deleted" },
                ]}
              />
            </Form.Item>
          </FormRightColWrapper>
        </FormRowWrapper>
        <FormRowWrapper>
          <FormLeftColWrapper xs={24} sm={24} lg={12} xl={12}>
            <Form.Item
              name="roleIds"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <SelectInput
                mode="multiple"
                required={true}
                allowClear
                label={intl.formatMessage({ id: "common.roles" })}
                placeholder={intl.formatMessage({ id: "um.users.userInfoForm.rolesField.placeHolder" })}
                options={roles.map((x) => ({ value: x.id, label: x.name, id: x.id }))}
                optionFilterProp="label"
              />
            </Form.Item>
          </FormLeftColWrapper>
          <FormRightColWrapper xs={24} sm={24} lg={12} xl={12}>
            <Form.Item
              name="siteIds"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <SelectInput
                mode="multiple"
                required={true}
                allowClear
                label={intl.formatMessage({ id: "common.sites" })}
                placeholder={intl.formatMessage({ id: "um.users.userInfoForm.sitesField.placeHolder" })}
                options={sites.map((x) => ({ value: x.id, label: x.name, id: x.id }))}
                optionFilterProp="label"
              />
            </Form.Item>
          </FormRightColWrapper>
        </FormRowWrapper>
        <FormRowWrapper>
          <FormLeftColWrapper xs={24} sm={24} lg={12} xl={12}>
            <Form.Item
              name="departmentId"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <SelectInput
                required={true}
                allowClear
                label={intl.formatMessage({ id: "common.department" })}
                placeholder={intl.formatMessage({ id: "um.userInfoForm.departmetsField.placeHolder" })}
                options={departments.map((x) => ({ value: x.id, label: x.name, id: x.id }))}
              />
            </Form.Item>
          </FormLeftColWrapper>
        </FormRowWrapper>
        <UpsertUserUserInfoActionsWrapper>
          <Row gutter={[20, 0]}>
            <Col>
              <SubmitDemoButtonWrapper
                block
                htmlType="submit"
                disabled={disabledCreate}
                id={editUser ? "saveUserEdit" : "nextBtn"}
              >
                {editUser ? <FormattedMessage id="saveButton.text" /> : <FormattedMessage id="nextButton.text" />}
              </SubmitDemoButtonWrapper>
            </Col>
            {editUser && onPasswordNext && (
              <Col>
                <SubmitDemoButtonWrapper
                  block
                  htmlType="button"
                  onClick={onPasswordNext}
                  id="changePasswordBtn"
                >
                  <FormattedMessage id="ChangePasswordButton.text" />
                </SubmitDemoButtonWrapper>
              </Col>
            )}
          </Row>
        </UpsertUserUserInfoActionsWrapper>
      </FormWrapper>
    </UpsertUserUserInfoCard>
  );
});

export default UpsertUserInfoForm;
