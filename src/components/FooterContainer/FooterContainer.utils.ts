import { isPhone } from "../../utils";
import { FooterFormValues, FooterFormErrors } from "./FooterContainer.types";

export const validateFooterForm = ({
  phone,
}: FooterFormValues): FooterFormErrors => ({
  phone: isPhone(phone) ? undefined : "error",
});
