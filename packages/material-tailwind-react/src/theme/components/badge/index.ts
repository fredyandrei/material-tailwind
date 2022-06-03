import badgeFilled from "./badgeFilled";
import badgeGradient from "./badgeGradient";
import badgeCloseButtonColors from "./badgeCloseButtonColors";

// types
import type {
  variant,
  color,
  icon,
  show,
  dismissible,
  animate,
  className,
} from "../../../types/components/badge";
import { propTypesVariant, propTypesColor } from "../../../types/components/badge";

export interface BadgeStylesType {
  defaultProps?: {
    variant?: variant;
    color?: color;
    icon?: icon;
    show?: show;
    dismissble?: dismissible;
    animate?: animate;
    className?: className;
  };
  valid?: {
    variants?: string[];
    colors?: string[];
  };
  styles?: {
    base?: object;
    variants?: {
      filled?: typeof badgeFilled;
      gradient?: typeof badgeGradient;
    };
    closeButtonColor?: typeof badgeCloseButtonColors;
  };
}

export const badge: BadgeStylesType = {
  defaultProps: {
    variant: "filled",
    color: "blue",
    icon: undefined,
    show: true,
    dismissble: {
      action: "",
      onClose: () => {},
    },
    animate: {
      unmount: {},
      mount: {},
    },
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    colors: propTypesColor,
  },
  styles: {
    base: {
      position: "relative",
      display: "inline-block",
      align: "align-baseline",
      fontFamily: "font-sans",
      fontSize: "text-xs",
      fontWeight: "font-bold",
      textTransform: "none",
      textAlign: "center",
      lineHeight: "leading-none",
      whiteSpace: "whitespace-nowrap",
      py: "py-2",
      px: "px-3.5",
      borderRadius: "rounded-lg",
      userSelect: "select-none",
    },
    variants: {
      filled: badgeFilled,
      gradient: badgeGradient,
    },
    closeButtonColor: badgeCloseButtonColors,
  },
};

export default badge;
