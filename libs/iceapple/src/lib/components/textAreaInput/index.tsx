import { Col, Row } from 'antd';
import {
  TextInputRequired,
  TextInputLabel,
  TextInputWrapper,
  RightTextInputLabel,
} from './style';

interface ITextAreaInput {
  placeholder?: string;
  value?: string;
  onChange?: any;
  label: string;
  required?: boolean;
  type?: string;
  span: number[];
  align?: string;
  disabled?: boolean;
  maxLength?: number;
}

const TextAreaInput = ({
  required,
  label,
  placeholder,
  onChange,
  value,
  span,
  align,
  disabled,
  maxLength
}: ITextAreaInput) => {
  const requiredMark = required ? (
    <TextInputRequired> *</TextInputRequired>
  ) : null;

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    let code;

    if (e.key !== undefined) {
      code = e.key;
    } else {
      code = e.which || e.charCode || e.keyCode || 0;
    }
    const regex = new RegExp(/^[A-Za-z0-9. ]+$/);
    if (!regex.test(code.toString())) {
      e.preventDefault();
      return false;
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      e.preventDefault();
      onChange(
        e.target.value
          ? e.target.value
              .replace(new RegExp(/\\[xX][0-9a-fA-F]+/), '')
              .replace(/[^a-zA-Z0-9. ]/g, '')
          : e.target.value
      );
    }
  };

  return (
    <Row align={'middle'}>
      <Col span={span[0]}>
        {align === 'right' ? (
          <>
            {requiredMark}
            <RightTextInputLabel>{label}</RightTextInputLabel>
          </>
        ) : (
          <>
            {requiredMark}
            <TextInputLabel>{label}</TextInputLabel>
          </>
        )}
      </Col>
      <Col span={span[1]}>
        <TextInputWrapper
          onKeyDown={onKeyDown}
          disabled={disabled}
          rows={4}
          placeholder={placeholder}
          onChange={onInputChange}
          value={value}
          id={label.toLowerCase()}
          maxLength={maxLength}
        />
      </Col>
    </Row>
  );
};

export { TextAreaInput };
