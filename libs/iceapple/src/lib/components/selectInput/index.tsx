import { Select } from "antd";
import {
  SelectInputContainer,
  SelectInputLabel,
  SelectInputWrapper,
  SelectInputRequired,
} from "./style";
const { Option } = Select;

interface ISelectInput {
  placeholder?: string;
  value?: string;
  onChange?: any;
  label: string;
  required?: boolean;
  type?: string;
  options: any[];
  defaultValue?: string;
  hiddenLabel?: boolean;
  mode?: any;
  allowClear?: boolean;
  currentApplication?: string | undefined;
  disabled?: boolean;
  optionFilterProp?: string;
}

const SelectInput = ({
  required,
  label,
  placeholder,
  onChange,
  value,
  type,
  options,
  defaultValue,
  hiddenLabel,
  mode,
  allowClear,
  currentApplication,
  disabled,
  optionFilterProp,
}: ISelectInput) => {
  const requiredMark = required ? (
    <SelectInputRequired>*</SelectInputRequired>
  ) : null;
  return (
    <SelectInputContainer type={type || ""}>
      {!hiddenLabel && (
        <SelectInputLabel currentapplication={currentApplication}>
          {requiredMark}
          {label}
        </SelectInputLabel>
      )}
      <SelectInputWrapper
        disabled={disabled}
        currentapplication={currentApplication}
        mode={mode || undefined}
        allowClear={allowClear}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        options={options}
        id={label.toLowerCase()}
        optionFilterProp={optionFilterProp}
      />
    </SelectInputContainer>
  );
};

export { SelectInput };
