import React from "react";
import PropTypes from "prop-types";

// framer-motion
import { AnimatePresence, motion, MotionProps } from "framer-motion";

// utils
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import merge from "deepmerge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { NewAnimatePresenceProps } from "../../types/generic";
import type {
  variant,
  color,
  icon,
  show,
  dismissible,
  animate,
  className,
  value,
} from "../../types/components/badge";
import {
  propTypesVariant,
  propTypesColor,
  propTypesIcon,
  propTypesShow,
  propTypesDismissible,
  propTypesAnimate,
  propTypesClassName,
  propTypesValue,
} from "../../types/components/badge";

export interface BadgeProps extends Omit<MotionProps, "animate"> {
  variant?: variant;
  color?: color;
  icon?: icon;
  show?: show;
  dismissible?: dismissible;
  animate?: animate;
  className?: className;
  value: value;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant, color, icon, show, dismissible, animate, className, value, ...rest }, ref) => {
    // 1. init
    const { badge } = useTheme();
    const { defaultProps, valid, styles } = badge;
    const { base, variants, closeButtonColor } = styles;
    const rippleEffect = new Ripple();

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    className = className ?? defaultProps.className;
    animate = animate ?? defaultProps.animate;
    show = show ?? defaultProps.show;

    // 3. set styles
    const badgeVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "primary")
      ],
    );
    const badgeCloseButton = objectsToString(
      closeButtonColor[findMatch(valid.colors, color, "primary")],
    );
    const classes = classnames(objectsToString(base), badgeVariant, className);
    const badgeCloseButtonClasses = classnames(
      "absolute top-1 right-1 mt-[0.5px] mx-px w-max rounded-md",
      badgeCloseButton,
      "transition-colors",
    );

    // 4. set animation
    const mainAnimation = {
      unmount: {
        opacity: 0,
      },
      mount: {
        opacity: 1,
      },
    };

    const appliedAnimation = merge(mainAnimation, animate);

    // 5. icon template
    const iconTemplate = (
      <div className="w-5 h-5 absolute top-2/4 left-1 -translate-y-2/4">{icon}</div>
    );

    // 6. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 7. return
    return (
      <NewAnimatePresence>
        {show && (
          <motion.div
            {...rest}
            ref={ref}
            className={classes}
            initial="unmount"
            exit="unmount"
            animate={show ? "mount" : "unmount"}
            variants={appliedAnimation}
          >
            {icon && iconTemplate}
            <div className={`${icon ? "ml-4" : ""} ${dismissible ? "mr-5" : ""} mt-px`}>
              {value}
            </div>
            {dismissible && (
              <div className={badgeCloseButtonClasses}>
                <div
                  role="button"
                  onClick={dismissible.onClose}
                  onMouseDown={(e) => !dismissible.action && rippleEffect.create(e, "light")}
                  className={`w-5 h-5 ${dismissible.action ? "" : "p-1"}`}
                >
                  {dismissible.action || (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </NewAnimatePresence>
    );
  },
);

Badge.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  color: PropTypes.oneOf(propTypesColor),
  icon: propTypesIcon,
  show: propTypesShow,
  dismissible: propTypesDismissible,
  animate: propTypesAnimate,
  className: propTypesClassName,
  value: propTypesValue,
};

Badge.displayName = "MaterialTailwind.Badge";

export default Badge;
