import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { State, Observe } from "mdx-observable";

// page components
import MainNavbar from "components/layout/navbar";
import ComponentDemo from "components/cards/component-demo";
import Code from "components/code";
import Pre from "components/pre";
import CodeSandbox from "components/code-sandbox";
import StackBlitz from "components/stack-blitz";

// components
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Avatar,
  Breadcrumbs,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Badge,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Navbar,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Progress,
  Radio,
  Select,
  Switch,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Textarea,
  Tooltip,
  Typography
} from "../../../packages/material-tailwind-react/src";

// routes
import { routes } from "../../../routes/react.routes";

// rehype-pretty-code configurations
const options = {
  theme: "github-dark",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  }
};

const components = {
  h1: (props: any) => (
    <Typography
      as="h1"
      variant="h3"
      color="blue-grey"
      className="!font-sans !mb-4 lg:!text-4xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <Typography
      as="h2"
      variant="h4"
      color="blue-grey"
      className="!font-sans !mb-2"
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography
      as="h3"
      variant="h5"
      color="blue-grey"
      className="!font-sans !mb-2"
      {...props}
    />
  ),
  h6: (props: any) => (
    <Typography
      as="p"
      variant="h5"
      className="!text-blue-grey-500 !font-normal !mb-12"
      {...props}
    />
  ),
  p: (props: any) => (
    <Typography className="!text-blue-grey-500 !font-normal !mb-4" {...props} />
  ),
  hr: () => <hr className="!mt-24 !mb-20 !border-blue-grey-50" />,
  a: (props: any) => (
    <a
      className="!font-sans !font-medium !text-blue-grey-900 hover:!text-blue-500 !transition-colors"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="!overflow-scroll">
      <table className="!min-w-[700px] lg:!min-w-full !w-full" {...props} />
    </div>
  ),
  thead: (props: any) => <thead {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr {...props} />,
  th: (props: any) => (
    <th
      className="min-w-[120px] font-medium text-blue-grey-900 text-left py-3 border-b border-blue-grey-100"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="min-w-[120px] text-sm text-blue-grey-500 text-left py-3 border-b border-blue-grey-50"
      {...props}
    />
  ),
  pre: (props: any) => <Pre {...props} />,
  State,
  Observe,
  Image,
  ComponentDemo,
  CodeSandbox,
  StackBlitz,
  Code,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Avatar,
  Breadcrumbs,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Badge,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Navbar,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Progress,
  Radio,
  Select,
  Switch,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Textarea,
  Tooltip,
  Typography
};

export default function Page({ frontMatter, mdxSource, slug }) {
  const [hash, setHash] = useState(frontMatter[0]);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      const hashLink = window.location.hash.replace("#", "");

      setHash(hashLink);
    });
  }, []);

  const date = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <div className="relative w-full h-full bg-white">
        <MainNavbar
          container="mt-0 max-w-full px-0 border-b border-blue-grey-50"
          className="!max-w-[1440px] mx-auto !text-blue-grey-900"
          list="text-blue-grey-900"
          fullWidth
          shadow={false}
          sidenavMenu={
            <div className="flex items-center mt-2 pt-4 pb-2 border-t border-blue-grey-50 lg:hidden">
              <button
                type="button"
                className="text-blue-grey-900"
                onClick={() => setMobileNav(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </button>
              <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0 text-blue-grey-700">
                <li className="flex items-center">
                  <span>React</span>
                  <svg
                    width="3"
                    height="6"
                    aria-hidden="true"
                    className="mx-3 overflow-visible text-blue-grey-300"
                  >
                    <path
                      d="M0 0L3 3L0 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </li>
                <li className="capitalize font-semibold text-blue-grey-900 truncate">
                  {slug.includes("-") ? slug.split("-").join(" ") : slug}
                </li>
              </ol>
            </div>
          }
        />
        <div className="px-6">
          <div className="max-w-[1440px] mx-auto flex">
            <aside
              className={`fixed z-[999] lg:relative lg:z-10 w-80 lg:w-64 h-screen lg:pt-16 pb-4 pr-4 transition-all duration-300 lg:left-0 ${
                mobileNav ? "left-0" : "-left-96"
              }`}
            >
              <div
                className={`fixed top-0 left-0 w-screen h-screen bg-grey-900/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
                  mobileNav
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              />
              <div className="fixed overflow-y-scroll bg-white lg:bg-transparent w-80 lg:w-64 h-screen pb-48 pt-6 pl-6 lg:pt-0 lg:pl-0">
                <div className="flex items-center justify-between">
                  <Typography
                    variant="h5"
                    className="lg:hidden p-2 mr-3 mt-px !text-blue-grey-500 hover:!text-blue-grey-900 cursor-pointer transition-colors"
                    onClick={() => setMobileNav(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Typography>
                </div>
                <div>
                  {routes.map(({ name, icon, pages }, key): any => (
                    <div key={key}>
                      <div className="flex items-center mt-16">
                        <div className="grid place-items-center w-7 h-7 text-xs rounded-lg bg-gradient-to-tr from-blue-400 to-blue-600 text-white mr-3">
                          <i className={icon} />
                        </div>
                        <Typography
                          color="blue-grey"
                          className="font-bold capitalize"
                        >
                          <span>{name}</span>
                        </Typography>
                      </div>
                      <ul className="space-y-1 py-2 pr-2 pl-9">
                        {pages.map((page, key) => (
                          <li key={key}>
                            <Link href={`/docs/react/${page}`}>
                              <a>
                                <Typography
                                  color="grey"
                                  className={`capitalize relative w-full list-item py-1 px-1 before:content-[' '] before:absolute before:-left-[25px] before:top-2/4 before:-translate-y-2/4 before:w-1.5 before:h-1.5 before:rounded-full hover:text-blue-grey-900 hover:before:bg-blue-grey-900 transition-colors before:transition-colors ${
                                    page === slug
                                      ? "font-medium text-blue-grey-900 before:bg-blue-grey-900"
                                      : "font-normal text-blue-grey-400 before:bg-blue-grey-300"
                                  }`}
                                  onClick={() => setMobileNav(false)}
                                >
                                  {page.includes("-")
                                    ? page.split("-").join(" ")
                                    : page}
                                </Typography>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
            <div className="mt-36 lg:mt-32 lg:px-6 w-full lg:w-[60%]">
              <MDXRemote {...mdxSource} components={components} />

              <div className="w-full mt-32 flex justify-between items-center">
                {frontMatter.prev && (
                  <Link href={`/docs/react/${frontMatter.prev}`}>
                    <a>
                      <Typography className="py-2 capitalize !font-medium !text-blue-grey-500 hover:!text-blue-grey-900 !transition-colors">
                        <i className="fas fa-caret-left mr-2 mt-px" />
                        {frontMatter.prev.replace("-", " ")}
                      </Typography>
                    </a>
                  </Link>
                )}
                {frontMatter.next && (
                  <Link href={`/docs/react/${frontMatter.next}`}>
                    <a>
                      <Typography className="py-2 capitalize !font-medium !text-blue-grey-500 hover:!text-blue-grey-900 !transition-colors">
                        {frontMatter.next.replace("-", " ")}
                        <i className="fas fa-caret-right ml-2 mt-px" />
                      </Typography>
                    </a>
                  </Link>
                )}
              </div>
              <Typography
                as="a"
                href={`https://www.github.com/creativetimofficial/material-tailwind/blob/main/documentation/react/${frontMatter.github}.mdx`}
                target="_blank"
                rel="noreferrer"
                className="!font-normal mt-14 mb-6 text-right !text-blue-grey-500 hover:!text-blue-grey-900 transition-colors"
              >
                <span>Edit this page on Github</span>
              </Typography>
                <footer className="py-6 border-t border-blue-grey-50 flex flex-col lg:flex-row justify-between items-center gap-4">
                <a
                  href="https://vercel.com/?utm_source=ct-tailwind-team&utm_campaign=oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center no-underline text-dark font-semibold">
                    <span>
                    <svg width="20" height="20" viewBox="0 0 1155 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="black"/></svg>
                  </span>

                  <span className="border-[0.5px] h-4 rounded-full mr-2 ml-2"></span>
                  <span className="mr-1 !text-sm">Powered by <span className="font-bold">Vercel</span></span>
                  
                </a>
                <Typography className="!font-medium !text-sm !text-blue-grey-500 text-center lg:text-left">
                 <span>&copy; {date} Horizon UI - based on {" "}</span>
                  <a
                    href="https://github.com/creativetimofficial/material-tailwind"
                    target="_blank"
                    rel="noreferrer"
                    className="text-current hover:text-blue-grey-900 transition-colors"
                  >
                   <span>Material Tailwind</span> 
                  </a>
                  .
                </Typography>
              </footer>
            </div>
            <aside className="hidden lg:block relative w-64 h-screen pt-32 pb-4 pl-16">
              <div className="fixed w-64 h-screen">
                <Typography
                  variant="h6"
                  color="blue-grey"
                  className="capitalize"
                >
                  <span>On This Page</span>
                </Typography>
                <ul className="list-none pl-4 pt-2">
                  {frontMatter.navigation &&
                    frontMatter.navigation.map((el, key) => (
                      <li key={key}>
                        <a
                          href={`#${el}`}
                          className={`relative w-full list-item py-1 px-1 before:content-[' '] before:absolute before:-left-3 before:top-2/4 before:-translate-y-2/4 before:w-1 before:h-1 before:rounded-full text-sm capitalize hover:before:bg-blue-grey-900 hover:text-blue-grey-900 focus:before:bg-blue-grey-900 focus:text-blue-grey-900 transition-colors before:transition-colors ${
                            hash === el
                              ? "font-semibold text-blue-grey-900 before:bg-blue-grey-900"
                              : "font-normal text-blue-grey-500 before:bg-blue-grey-300"
                          }`}
                        >
                          {el.includes("-") ? el.split("-").join(" ") : el}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("documentation/react"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", "")
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("documentation/react", slug + ".mdx")
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, options]],
      remarkPlugins: [remarkGfm]
    }
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  };
};
