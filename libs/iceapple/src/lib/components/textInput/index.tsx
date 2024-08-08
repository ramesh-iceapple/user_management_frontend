import { Input } from 'antd';
import { TextInputContainer, TextInputLabel, TextInputRequired, TextInputWrapper } from './style';

interface ITextInput {
  placeholder?: string;
  value?: string;
  onChange?: any;
  label: string;
  required?: boolean;
  type?: string;
  textType?: string;
  hiddenLabel?: boolean;
  disabled?: boolean;
  height?: number;
  maxLength?: number;
  pattern?: any;
  onKeyPress?: any;
  onClick?: any;
}

const TextInput = ({
  required,
  label,
  placeholder,
  onChange,
  value,
  type,
  textType,
  hiddenLabel,
  disabled,
  height,
  maxLength,
  pattern,
  onKeyPress,
  onClick
}: ITextInput) => {
  const requiredMark = required ? <TextInputRequired>*</TextInputRequired> : null;
  return (
    <TextInputContainer type={type || ''}>
      {!hiddenLabel && (
        <TextInputLabel>
          {requiredMark}
          {label}
        </TextInputLabel>
      )}
      <TextInputWrapper
        height={height || 48}
        type={textType}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        id={label.toLowerCase()}
        maxLength={maxLength}
        pattern={pattern}
        onKeyPress={onKeyPress}
        onClick={onClick}
      />
    </TextInputContainer>
  );
};

export { TextInput };
