import React from 'react';
import Layout from '@theme/Layout';
/* COMPONENTS */
import Markdown from '@site/src/components/utilities/Markdown';
import HeroHeader from '@site/src/components/layout/HeroHeader';
import SectionHeader from '@site/src/components/layout/SectionHeader';
import InfoBanner from '@site/src/components/ui/InfoBanner';
import ThumbCard from '@site/src/components/ui/ThumbCard';
import LiteratureCarousel from '@site/src/components/content/LiteratureCarousel';
import TestimonialSection from '@site/src/components/content/TestimonialSection';
import BlogArticlesList from '@site/src/components/content/BlogArticlesList';
import { Icon } from '@iconify/react';
/* PAGE DATA */
import { header, featureList, kubernetesBanner, compatibleTools } from '@site/static/data/home';

const FEATURE_ICONS: Record<string, string> = {
  'Fast and light.': 'material-symbols:bolt-rounded',
  'Secure.': 'material-symbols:shield-lock-rounded',
  'Open.': 'material-symbols:lock-open-right-rounded',
  'Compatible.': 'material-symbols:layers-rounded',
};

/* PAGE COMPONENTS */
const FeatureItem = ({ title, description }: { title: string; description: string }) => {
  const icon = FEATURE_ICONS[title] || 'material-symbols:check-circle-rounded';

  return (
    <div className="group relative flex h-full flex-col items-center justify-start rounded-2xl border border-purple-100/60 bg-white p-7 text-center shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[#232326] dark:shadow-none dark:hover:border-white/20 sm:p-8">
      {/* Icon */}
      <div className="dark:text-purple-400 mb-5 flex items-center justify-center text-[#892CA0] transition-transform duration-300 group-hover:scale-110">
        <Icon icon={icon} className="text-6xl sm:text-7xl" />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-[#892CA0] dark:text-white dark:group-hover:text-white">
        {title}
      </h3>

      {/* Body description */}
      <Markdown
        text={description}
        styles="w-full text-justify text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 [&_a]:font-semibold [&_a]:text-[#892CA0] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[#77218d] dark:[&_a]:text-purple-400 dark:hover:[&_a]:text-purple-300"
      />
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {featureList.map(feature => {
            return <FeatureItem key={feature.title} title={feature.title} description={feature.description} />;
          })}
        </div>
      </div>
    </section>
  );
};

const CompatibleToolSection = () => {
  return (
    <section>
      <SectionHeader title={compatibleTools.title} fontWeight="font-light" />
      <div className="mx-auto flex flex-wrap justify-center gap-4">
        {compatibleTools.tools.map(tool => {
          return <ThumbCard key={tool.title} subtitle={tool.description} image={tool.image} />;
        })}
      </div>
    </section>
  );
};

/* PAGE CONTENT */
function IndexPage() {
  return (
    <Layout>
      <HeroHeader {...header} />
      <FeatureSection />
      <InfoBanner {...kubernetesBanner} />
      <CompatibleToolSection />
      <TestimonialSection />
      <BlogArticlesList
        limit={4}
        title="Latest Podman News"
        titleColor="text-purple-700 dark:text-white"
        containerLayout="grid"
      />
      <LiteratureCarousel />
    </Layout>
  );
}

export default IndexPage;
