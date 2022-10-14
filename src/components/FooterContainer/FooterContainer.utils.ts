import { FooterFormValues, FooterFormErrors } from "./FooterContainer.types";

export const validateFooterForm = ({
  phone,
}: FooterFormValues): FooterFormErrors => ({
  phone: phone ? undefined : "error",
});
