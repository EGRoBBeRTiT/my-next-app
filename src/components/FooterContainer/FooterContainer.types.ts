export type FooterContainerProps = {};

export type FooterFormValues = {
  phone: string;
};

export type FooterFormErrors = Record<
  keyof FooterFormValues,
  string | undefined
>;
