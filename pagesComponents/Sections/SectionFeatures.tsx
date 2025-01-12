import FeatureCard from "../../pagesComponents/Cards/FeatureCard";
import { Typography } from "../../packages/material-tailwind-react/src";

export default function SectionFeatures() {
  return (
    <section className="py-10 lg:py-20">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-center mb-24">
        <Typography
          variant="h2"
          className="!font-sans text-[#1A237E] font-semibold mb-2 tracking-normal"
        >
          Tailwind CSS-Based Framework
        </Typography>
        <Typography className="text-[#1A237E]/60 text-lg font-light mb-2">
          Horizon UI features multiple React and HTML components, all written with
          Tailwind CSS classes and Material Design guidelines.
        </Typography>
      </div>
      <div className="flex flex-row flex-wrap content-center">
        <div className="w-full max-w-full px-3 mb-12 lg:mb-0 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <FeatureCard icon="dashboard" title="Tailwind CSS Components">
            Horizon UI comes with a huge number of Fully Coded Tailwind CSS
            components.
          </FeatureCard>
        </div>
        <div className="w-full max-w-full px-3 mb-12 lg:mb-0 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <FeatureCard icon="terminal" title="JavaScript Components">
            Horizon UI only features React and HTML components, but in the near
            future it will future more.
          </FeatureCard>
        </div>
        <div className="w-full max-w-full px-3 mb-12 lg:mb-0 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <FeatureCard icon="description" title="Documentation">
            This extension comes a lot of fully coded examples that help you get
            started faster.
          </FeatureCard>
        </div>
        <div className="w-full max-w-full px-3 mb-12 lg:mb-0 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <FeatureCard icon="view_carousel" title="Templates (soon)">
            Horizon UI will come with fully coded sample pages so you
            could start working instantly.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
