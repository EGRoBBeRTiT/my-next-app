import { FieldProps, FieldRenderProps, UseFieldConfig } from "react-final-form";
import { InputProps } from "../../Input/Input.types";

export type InputFieldProps = Omit<InputProps, "value" | "defaultValue"> &
  Omit<
    FieldProps<
      string,
      FieldRenderProps<string, HTMLInputElement, string>,
      HTMLInputElement,
      string
    >,
    "children"
  > & {
    name: string;
    parse?: (value: string, name: string) => string;
  };
