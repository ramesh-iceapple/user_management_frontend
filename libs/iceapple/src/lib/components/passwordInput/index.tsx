import {
  PasswordInputContainer,
  PasswordInputLabel,
  PasswordInputWrapper,
} from './style';

interface ITextInput {
  placeholder?: string;
  value?: string;
  onChange?: any;
  label: string;
  required?: boolean;
  type?: string;
  height?: string;
}

const PasswordInput = ({
  required,
  label,
  placeholder,
  onChange,
  value,
  type,
  height

}: ITextInput) => {
  const requiredMark = required ? <span>*</span> : null;
  return (
    <PasswordInputContainer type={type || ''}>
      <PasswordInputLabel>
        {requiredMark}
        {label}
      </PasswordInputLabel>
      <PasswordInputWrapper
        id={label}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        height={height || ''}
        onPaste={(e: any) => {
          e.preventDefault();
          return false;
        }}
        onCopy={(e: any) => {
          e.preventDefault();
          return false;
        }}
      />
    </PasswordInputContainer>
  );
};

export { PasswordInput };
