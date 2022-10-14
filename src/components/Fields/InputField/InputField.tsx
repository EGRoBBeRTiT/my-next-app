import React from "react";
import { Field } from "react-final-form";
import { Input } from "../../Input";

import { InputFieldProps } from "./InputField.types";

export const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <Field {...props}>
      {({ input, meta: { error, touched } }) => (
        <Input withError={error && touched} {...props} {...input} />
      )}
    </Field>
  );
};
