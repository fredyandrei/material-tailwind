import navbarFilled from "./navbarFilled";
import navbarGradient from "./navbarGradient";

// types
import type {
  variant,
  color,
  shadow,
  blurred,
  fullWidth,
  className,
} from "../../../types/components/navbar";
import { propTypesVariant, propTypesColor } from "../../../types/components/navbar";

export interface NavbarStylesType {
  defaultProps?: {
    variant?: variant;
    color?: color;
    shadow?: shadow;
    blurred?: blurred;
    fullWidth?: fullWidth;
    className?: className;
  };
  valid: {
    variants?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      initial?: object;
      shadow?: object;
      blurred?: object;
      fullWidth?: object;
    };
    variants?: {
      filled?: typeof navbarFilled;
      gradient?: typeof navbarGradient;
    };
  };
}

export const navbar: NavbarStylesType = {
  defaultProps: {
    variant: "filled",
    color: "white",
    shadow: true,
    blurred: true,
    fullWidth: false,
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    colors: propTypesColor,
  },
  styles: {
    base: {
      initial: {
        display: "flex",
        flexWrap: "flex-nowrap",
        justifyContent: "justify-start",
        width: "w-full",
        maxWidth: "max-w-screen-2xl",
        borderRadius: "rounded-xl",
        py: "py-4",
        px: "px-8",
      },
      shadow: {
        boxShadow: "shadow-md",
      },
      blurred: {
        backdropFilter: "backdrop-saturate-200 backdrop-blur-md",
        bgOpacity: "bg-opacity-80",
        borderWidth: "border",
        borderColor: "border-white/80",
      },
      fullWidth: {
        width: "w-full",
        maxWidth: "max-w-full",
        rounded: "rounded-none",
        px: "px-4",
      },
    },
    variants: {
      filled: navbarFilled,
      gradient: navbarGradient,
    },
  },
};

export default navbar;
