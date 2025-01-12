import SectionSubscribe from "pagesComponents/Sections/SectionSubscribe";
import { Typography } from "../../packages/material-tailwind-react/src";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-6 text-[#1A237E] bg-grey-100 relative z-50">
      <SectionSubscribe />
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <Typography
              variant="h3"
              color="inherit"
              className="!font-sans mb-2"
            >
              Horizon UI
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              className="font-normal text-lg mt-0 mb-2 opacity-60"
            >
              Easy to use React components for Tailwind CSS and Material Design.
            </Typography>
            <div className="mt-6">
              <a
                href="https://www.twitter.com/creativetim?ref=horizon-ui.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter bg-white text-light-blue-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
              </a>
              <a
                href="https://www.facebook.com/creativetim?ref=horizon-ui.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-square bg-white text-light-blue-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
              </a>
              <a
                href="https://www.dribbble.com/creativetim?ref=horizon-ui.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-dribbble bg-white text-primary-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
              </a>
              <a
                href="https://www.github.com/creativetimofficial?ref=horizon-ui.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github bg-white text-grey-900 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
              </a>
              <a
                href="https://discord.com/invite/gxtg2rJa?ref=horizon-ui.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-discord bg-white text-blue-700 shadow-lg font-lg py-3 px-2.5 items-center justify-center align-center rounded-full outline-none focus:outline-none inline-block text-center"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 md:ml-auto">
                <span className="block text-[#1A237E] text-lg font-bold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=horizon-ui.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://www.creative-tim.com/blog?ref=horizon-ui.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://github.com/creativetimofficial?ref=horizon-ui.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://www.creative-tim.com/templates/free?ref=horizon-ui.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block text-[#1A237E] text-lg font-bold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=horizon-ui.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=horizon-ui.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contribute
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=horizon-ui.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code of Conduct
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://www.creative-tim.com/contact-us?ref=horizon-ui.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-grey-300" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
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
          <div className="!font-medium !text-sm !text-blue-grey-500 text-center lg:text-left">
            <div className="text-sm font-medium py-1">
            &copy; {year} Horizon UI - based on {" "}
                  <a
                    href="https://github.com/creativetimofficial/material-tailwind"
                    target="_blank"
                    rel="noreferrer"
                    className="text-current hover:text-blue-grey-900 transition-colors"
                  >
                    Material Tailwind
                  </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
