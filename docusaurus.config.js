// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Creative',
  tagline: 'The Stage is YOURS',
  url: 'https://creativeplatform.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/creative-icon-header.ico',
  organizationName: 'g2entgroup', // Usually your GitHub org/user name.
  projectName: 'creative-website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/g2entgroup/creative-website/',
        },
        blog: {

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        googleAnalytics: {
          trackingID: 'G-JYLMMFQ9L0',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      algolia: {
        // The application ID provided by Algolia
        appId: 'L057IAF2ES',
  
        // Public API key: it is safe to commit it
        apiKey: '2b26fab9cd7ce56b126b883282923890',
  
        indexName: 'creative',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.xyz|domain\\.xyz',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      announcementBar: {
        id: 'support_us',
        content:
          'Introducing our brand new decentralized notification channels, <strong>The Creative Notifications</strong> and <strong>The Creative</strong> using <strong><a target="_blank" rel="noopener noreferrer" href="https://push.org">push.org</a></strong>!',
        backgroundColor: '#2B1A20',
        textColor: '#52F761',
        isCloseable: false,
      },
      image: "img/Creative_logo-200.svg",
      metadata: [
        { name: "og:type", content: "website" },
        { name: "og:site_name", content: "The Creative" },
        { name: "twitter:site", content: "@creativecrtv" },
        { name: "twitter:title", content:"theCREATIVE.eth"},
        { name: "twitter:description", content: "A collective of developers and creatives contributing to the Creative Platform, with a common goal of blockchain technology & making the entertainment industry a better workspace for creativity."},
        { name: "twitter:image", content: "/img/mocs/Creative_Concert.png"}
      ],
      navbar: {
        title: 'CREATIVE',
        logo: {
          alt: 'Creative Logo',
          src: 'img/Creative_logo-200.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'blog', 
            label: 'Pricing', 
            position: 'left',
          },
          {
            href:"https://app.creativeplatform.xyz",
            label: 'Access Software',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Collections',
            position: 'left',
            items: [
              {
                href: "https://kidz.creativeplatform.xyz",
                label: "CREATIVE KIDZ ⌐◨-◨",
              },
              {
                href:"https://urbanuprisecrew.com",
                label: "Urban Uprise Crew",
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Media',
            position: 'left',
            items: [
              {
                href: "https://news.creativeplatform.xyz",
                label: "News",
              },
              {
                href: "https://blog.creativeplatform.xyz",
                label: "Blog",
              },
            ],
          },
          {
            href: "https://vote.creativeplatform.xyz",
            label: 'Vote',
            position: 'left', 
          },
          {
            href: "https://open.spotify.com/show/4zAsBnJwZKquxvI7oPqRam?si=3bcceebea4614195",
            label: "Podcast",
            position: "right",
          },
          {
            href: "https://news.creativeplatform.xyz/subscribe",
            label: "Get Updates",
            position: "right",
          },
          {
            type: 'docsVersionDropdown',
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/creativecrtv",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/creativecrtv",
              },
              {
                label: "Discord",
                href: "https://discord.com/servers/creative-779364937503604777",
              },
              {
                label: "Telegram",
                href: "https://t.me/+PaiZoO2ojAAyOGRh"
              },
            ]
          },
          {
            title: 'Collections',
            items: [
              {
                href: "https://memberships.creativeplatform.xyz",
                label: "CREATIVE Membership",
                
              },
              {
                href: "https://kidz.creativeplatform.xyz",
                label: "CREATIVE KIDZ ⌐◨-◨",
              },
              {
                href: "https://urbanuprisecrew.com/",
                label: "Urban Uprise Crew",
              },
            ]
          },
          {
            title: 'Partner Solutions',
            items: [
              {
                label:"T-Mobile for Business",
                href: "https://mdm.creativeplatform.xyz",
              },
            ]
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Guide',
                to: '/docs/intro',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/legal/privacy-policy',
              },
              {
                label: 'Terms & Conditions',
                to: 'docs/legal/terms-conditions',
              },
              {
                href: 'https://github.com/creativeplatform',
                label: 'GitHub',
              },
            ]
          },
        ],
        logo: {
          alt: "Creative logo",
          src: "img/Creative_logo-200.svg",
          width: 60,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Creative Organization DAO LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
