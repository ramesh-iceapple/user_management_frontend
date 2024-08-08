import { Col, Form, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useEffect, useState } from 'react';
import { ISignUpDetailsForm } from '../../../interfaces';
import {
  FormLeftColWrapper,
  FormRightColWrapper,
  FormRowWrapper,
  FormWrapper,
  SelectInputLabel,
  SignUpUserInfoActionsWrapper,
  SignUpUserInfoCard,
  SignUpUserInfoHeaderText,
  SignUpUserInfoHintText,
  SignUpUserInfoWrapper,
  SubmitDemoButtonWrapper,
} from './index.style';
import { SelectInput, TextInput } from '@users-platform/iceapple';

const SignUpUserInfoForm = ({ onNext }: ISignUpDetailsForm) => {
  const [form] = useForm();
  const [disabledCreate, setDisabledCreate] = useState(true);
  const onFinish = (values: any) => {
    onNext({
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      countryCode: values.countryCode.trim(),
      phoneNumber: values.phoneNumber ? values.phoneNumber.trim() : '',
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleFormChange = () => {
    const hasErrors =
      !form.isFieldsTouched(
        ['firstName', 'lastName', 'email', 'phoneNumber'],
        true
      ) || form.getFieldsError().some((form: any) => form.errors.length);
    setDisabledCreate(hasErrors);
  };

  useEffect(() => {
    if (form) form.setFieldValue('countryCode', '+91');
  }, [form]);

  return (
    <SignUpUserInfoCard>
      <Row align="middle" justify="center">
        <SignUpUserInfoHeaderText>Your Details</SignUpUserInfoHeaderText>
      </Row>
      <SignUpUserInfoWrapper align="middle" justify="center">
        <SignUpUserInfoHintText>
          Please provide your personal information. Fields marked with an
          asterisk (*) are required.
        </SignUpUserInfoHintText>
      </SignUpUserInfoWrapper>
      <FormWrapper
        name="signUpEmail"
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
                {
                  required: true,
                  message: '',
                },
                {
                  validator: (_, value) =>
                    value && value.trim().length === 0
                      ? Promise.reject(new Error('No spaces allowed'))
                      : Promise.resolve(),
                },
              ]}
            >
              <TextInput
                required={true}
                type="block"
                placeholder="Enter First Name"
                label="First Name"
              />
            </Form.Item>
          </FormLeftColWrapper>
          <FormRightColWrapper xs={24} sm={24} lg={12} xl={12}>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: '',
                },
                {
                  validator: (_, value) =>
                    value && value.trim().length === 0
                      ? Promise.reject(new Error('No spaces allowed'))
                      : Promise.resolve(),
                },
              ]}
            >
              <TextInput
                required={true}
                type="block"
                placeholder="Enter Last Name"
                label="Last Name"
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
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: '',
                },
              ]}
            >
              <TextInput
                required={true}
                type="block"
                placeholder="Enter Email"
                label="Email"
              />
            </Form.Item>
          </FormLeftColWrapper>
          <FormRightColWrapper xs={24} sm={24} lg={12} xl={12}>
            <SelectInputLabel>*Phone Number</SelectInputLabel>
            <Row wrap={false}>
              <Col flex={'none'}>
                <Form.Item
                  name="countryCode"
                  rules={[
                    {
                      validator: (_, value) =>
                        value && value.trim().length === 0
                          ? Promise.reject(new Error('No spaces allowed'))
                          : Promise.resolve(),
                    },
                  ]}
                >
                  <SelectInput
                    required={true}
                    label="Country Code"
                    placeholder="Select Country Code"
                    hiddenLabel={true}
                    options={[
                      { key: '+91', value: '+91' },
                      { key: '+989', value: '+989' },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col flex={'auto'}>
                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      validator: (_, value) =>
                        value && value.trim().length === 0
                          ? Promise.reject(new Error('No spaces allowed'))
                          : Promise.resolve(),
                    },
                  ]}
                >
                  <TextInput
                    textType="tel"
                    type="block"
                    hiddenLabel={true}
                    placeholder="Enter Phone Number"
                    label="Phone Number"
                  />
                </Form.Item>
              </Col>
            </Row>
          </FormRightColWrapper>
        </FormRowWrapper>
        <SignUpUserInfoActionsWrapper>
          <SubmitDemoButtonWrapper
            block
            htmlType="submit"
            disabled={disabledCreate}
          >
            Next
          </SubmitDemoButtonWrapper>
        </SignUpUserInfoActionsWrapper>
      </FormWrapper>
    </SignUpUserInfoCard>
  );
};

export default SignUpUserInfoForm;
