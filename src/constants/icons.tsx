import { FaReact } from "react-icons/fa";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";

export const LANGUAGE_ICONS = ({
  size = 30,
  color,
  strokeWidth,
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) => [
  {
    component: (
      <FaReact
        size={size}
        {...(color && { color })}
        {...(strokeWidth && { strokeWidth })}
      />
    ),
  },
  {
    component: (
      <SiNextDotJs
        size={size}
        {...(color && { color })}
        {...(strokeWidth && { strokeWidth })}
      />
    ),
  },
  {
    component: (
      <SiTypescript
        size={size}
        {...(color && { color })}
        {...(strokeWidth && { strokeWidth })}
      />
    ),
  },
  {
    component: (
      <DiJavascript1
        size={size}
        {...(color && { color })}
        {...(strokeWidth && { strokeWidth })}
      />
    ),
  },
];
