import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturesOne from '../components/FeaturesOne';
import FeaturesTwo from '../components/FeaturesTwo';
import Video from '../components/Video';
import Testimonial from '../components/Testimonial';
import Brands from '../components/Brands';
import Faq from '../components/Faq';
import CallToAction from '../components/CallToAction';

import 'bootstrap/dist/css/bootstrap.min.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <Banner />
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The stage is yours">
      <HomepageHeader />
      <main>
        <Services />
        <FeaturesOne />
        <FeaturesTwo />
        <Video />
        <Testimonial />
        <Brands />
        <Faq />
        <CallToAction />
      </main>
    </Layout>
  );
}
