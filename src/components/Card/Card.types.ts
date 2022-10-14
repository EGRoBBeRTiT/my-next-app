import { ReactNode } from "react";

export type CardProps = {
  title?: string;
  description?: string;
  iconComponent?: ReactNode;
  onClick?: () => void;
};
