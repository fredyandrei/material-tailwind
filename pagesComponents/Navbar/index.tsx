import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, AnimatePresenceProps, motion } from "framer-motion";
import {
  Navbar as MTNavbar,
  IconButton,
  Tooltip,
  Badge,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "../../packages/material-tailwind-react/src";

interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, "children"> {
  children: React.ReactNode;
}

interface NavbarProps {
  container?: string;
  className?: string;
  shadow?: boolean;
  sidenavMenu?: any;
  list?: string;
  [key: string]: any;
}

export default function Navbar({
  container,
  className,
  shadow,
  sidenavMenu,
  list = "text-[#1A237E]",
  ...rest
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const mobileListRef = useRef(null);
  const navbarItemClasses =
    "flex items-center px-1 py-4 font-normal transition-all duration-250 text-size-sm text-current font-light lg:px-2 cursor-pointer";

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 960 && setOpen(false);
    });
  }, []);

  const heightAnimation = {
    unmount: {
      height: "0px",
      opacity: 0,
      transition: { duration: 0.3, times: "[0.4, 0, 0.2, 1]" }
    },
    mount: {
      height: `${mobileListRef.current?.scrollHeight}px`,
      opacity: 1,
      transition: { duration: 0.3, times: "[0.4, 0, 0.2, 1]" }
    }
  };

  const menuOpenIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const menuCloseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const navbarMenu = (
    <ul className="flex flex-col pl-0 mb-0 list-none text-inherit lg:flex-row gap-2 lg:gap-4 lg:ml-auto">
      <Menu placement="bottom" offset={-2.5}>
        <MenuHandler>
          <li>
            <span className={navbarItemClasses}>
              <span className="font-semibold">Documentation</span>
            </span>
          </li>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link href="/docs/html/quick-start">
              <a className={`${navbarItemClasses} lg:px-0 px-0 py-0`}>HTML</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/docs/react/quick-start">
              <a className={`${navbarItemClasses} lg:px-0 px-0 py-0`}>
                ReactJS
              </a>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu placement="bottom" offset={-2.5}>
        <MenuHandler>
          <li>
            <span className={navbarItemClasses}>
              <span className="font-semibold">Tailwind Components</span>
            </span>
          </li>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link href="/docs/html/alert">
              <a className={`${navbarItemClasses} lg:px-0 px-0 py-0`}>HTML</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/docs/react/alert">
              <a className={`${navbarItemClasses} lg:px-0 px-0 py-0`}>
                ReactJS
              </a>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Tooltip content="Coming Soon" placement="bottom" offset={-2.5}>
        <li className="flex">
          <span className={navbarItemClasses}>
            <span className="font-semibold">Templates</span>
          </span>
        </li>
      </Tooltip>
      <Tooltip content="Help with a star" placement="bottom" offset={-2.5}>
      <li className="bg-white drop-shadow-[0px_18px_40px_rgba(112,144,176,0.30)] rounded-2xl w-14">
          <a
          className="flex items-center justify-center px-2 py-2 font-normal h-full w-auto  transition-all duration-250 text-size-sm text-current font-light cursor-pointer"
            href="https://github.com/creativetimofficial/material-tailwind?ref=horizon-ui.com"
            target="_blank"
            rel="noreferrer">
            <i aria-hidden className="fab fa-github opacity-100 text-base"></i>
          </a>
        </li>
      </Tooltip>
      <li className="bg-white drop-shadow-[0px_18px_40px_rgba(112,144,176,0.30)] rounded-2xl w-14">
        <a
          className="flex items-center justify-center px-2 py-2 font-normal h-full w-auto  transition-all duration-250 text-size-sm text-current font-light cursor-pointer"
          href="https://discord.gg/f6tEKFBd4m"
          target="_blank"
          rel="noreferrer">
          <i aria-hidden className="fab fa-discord opacity-100 text-base"></i>
        </a>
      </li>
    </ul>
  );

  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

  return (
    <div
      className={`w-full max-w-screen-2xl absolute lg:fixed left-2/4 -translate-x-2/4 z-[999] flex flex-wrap items-center my-4 px-4 ${container}`}
    >
      <MTNavbar
        {...rest}
        className={`!block py-4 pl-6 pr-5 ${
          shadow ? "shadow-2xl shadow-blue-grey-500/10" : ""
        }`}
        shadow={shadow}
      >
        <div
          className={`w-full flex !justify-between items-center text-[#1A237E] ${className}`}
        >
          <Link href="/">
          <svg width="138" height="25" fill="none" viewBox="0 0 138 25" xmlns="http://www.w3.org/2000/svg"><path d="M126.079 6.395v7.452c0 1.5-.986 2.5-2.464 2.5-1.479 0-2.464-1-2.464-2.5V6.395h-2.547v7.452c0 2.693 2.004 4.758 5.011 4.758 3.006 0 5.01-2.065 5.01-4.758V6.395h-2.546Zm4.526 12.016h2.546V6.395h-2.546v12.016Z" fill="#1B2559"/><path fillRule="evenodd" clipRule="evenodd" d="M132.113 2.25h-12.756c-2.032 0-3.68 1.679-3.68 3.75v13c0 2.071 1.648 3.75 3.68 3.75h12.756c2.032 0 3.679-1.679 3.679-3.75V6c0-2.071-1.647-3.75-3.679-3.75ZM119.357 0c-3.251 0-5.887 2.686-5.887 6v13c0 3.314 2.636 6 5.887 6h12.756c3.251 0 5.887-2.686 5.887-6V6c0-3.314-2.636-6-5.887-6h-12.756Z" fill="#1B2559"/><path d="M25.265 18.526h8.446v3.742h-8.446v-3.742Z" fill="#1B2559"/><path d="M34.004 19.311c0-1.23-.476-2.41-1.323-3.281a4.456 4.456 0 0 0-3.193-1.36 4.456 4.456 0 0 0-3.194 1.36 4.706 4.706 0 0 0-1.323 3.281h9.033Z" fill="#1B2559"/><path fillRule="evenodd" clipRule="evenodd" d="M29.506 20.471c2.586 0 4.682-2.136 4.682-4.771s-2.096-4.772-4.682-4.772c-2.586 0-4.682 2.136-4.682 4.772 0 2.635 2.096 4.771 4.682 4.771Zm0 3.743c4.614 0 8.354-3.812 8.354-8.514s-3.74-8.514-8.354-8.514c-4.614 0-8.354 3.812-8.354 8.514s3.74 8.514 8.354 8.514Zm53.32-3.742c2.586 0 4.682-2.137 4.682-4.772 0-2.635-2.096-4.772-4.682-4.772-2.586 0-4.682 2.136-4.682 4.772 0 2.635 2.096 4.771 4.682 4.771Zm0 3.742c4.614 0 8.354-3.812 8.354-8.514s-3.74-8.514-8.354-8.514c-4.614 0-8.354 3.812-8.354 8.514s3.74 8.514 8.354 8.514Z" fill="#1B2559"/><path d="M0 24.212h3.881v-9.418H14.11v9.418h3.912V.823H14.11V11.31H3.88V.823H0v23.389Zm48.974-17.11c-2.033 0-3.634.69-4.497 2.543V7.29h-3.48v16.922h3.696v-9.575c0-2.638 1.54-4.144 3.82-4.144h2.002v-3.39h-1.54Zm3.721-2.04h3.697V.822h-3.697V5.06Zm0 19.15h3.697V7.29h-3.697v16.922Zm5.839 0H72.15v-3.39h-8.626l8.595-10.455V7.29H58.935v3.391h8.317l-8.718 10.454v3.077Zm43.211-17.298c-2.064 0-3.789.847-4.713 2.417v-2.04H93.55v16.92h3.696V14.167c0-2.292 1.418-3.768 3.543-3.768 2.095 0 3.512 1.476 3.512 3.768v10.046h3.696V13.224c0-3.705-2.557-6.31-6.253-6.31Z" fill="#1B2559"/></svg>
          </Link>
          <div className="badge rounded-[100px] ml-[10px] p-[6px] badge-primary mr-2">v1.0.0</div>
          <IconButton
            variant="text"
            className="lg:hidden w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
            ripple={false}
            onClick={() => setOpen(!open)}
          >
            {open ? menuCloseIcon : menuOpenIcon}
          </IconButton>
          <div className="hidden lg:flex lg:base-auto items-center flex-grow lg-max:max-h-0 basis-full">
            {navbarMenu}
          </div>
        </div>
        <NewAnimatePresence>
          <motion.div
            ref={mobileListRef}
            className={`block overflow-hidden basis-full ${list}`}
            initial="unmount"
            exit="unmount"
            animate={open ? "mount" : "unmount"}
            variants={heightAnimation}
          >
            {navbarMenu}
          </motion.div>
        </NewAnimatePresence>
        {sidenavMenu}
      </MTNavbar>
    </div>
  );
}
