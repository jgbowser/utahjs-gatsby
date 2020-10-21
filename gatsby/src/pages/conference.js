/* eslint-disable prettier/prettier */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ConferenceHero from '../components/ConferenceHero';

const conferencePage = () => (
  <Layout>
    <SEO title='Conference' />
    <ConferenceHero />
    <h1>Conference Page</h1>
  </Layout>
);

export default conferencePage;