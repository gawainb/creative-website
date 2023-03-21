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
          trackingID: 'G-8G7Y5SMJZ0',
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
          'Our Community NFT Collection <strong>Urban Uprise Crew</strong> is available now... <strong><a target="_blank" rel="noopener noreferrer" href="https://mint.urbanuprisecrew.com">CLAIM YOURS TODAY 💀</a></strong>',
        backgroundColor: '#2B1A20',
        textColor: '#52F761',
        isCloseable: false,
      },
      image: "img/Creative_logo-200.svg",
      metadata: [
        { name: "og:type", content: "website" },
        { name: "og:site_name", content: "Creative platform" },
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
            type: 'dropdown',
            label: 'Our Products',
            position: 'left',
            items: [
              {
                href: "https://open.spotify.com/show/4zAsBnJwZKquxvI7oPqRam?si=3bcceebea4614195",
                label: "The CREATIVE Podcast"
              },
              {
                href: "https://nouns.build/dao/0x5da6ae3d2cce42dd0b805b0bc3befeab0e0b9cca",
                label: "CREATIVE KIDZ ⌐◨-◨",
              },
              {
                href: "https://creative-monorepo.vercel.app",
                label:"CREATIVE TV",
              },
              {
                href:"https://urbanuprisecrew.com",
                label: "Urban Uprise Crew",
              },
              {
                href: "https://events.creativeplatform.xyz",
                label: "CREATIVE Events",
              },
            ]
          },
          {
            href: "https://blog.creativeplatform.xyz",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://crtvnews.beehiiv.com/subscribe",
            label: "Sign Up",
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
            title: 'Resources',
            items: [
              {
                label: 'Guide',
                to: '/docs/intro',
              },
              {
                href: 'https://blog.creativeplatform.xyz',
                label: "Blog",
              },
              {
                href: 'https://github.com/creativeplatform',
                label: 'GitHub',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/QxBrFmYwhA",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/creativecrtv",
              },
            ],
          },
          {
            title: 'Our Products',
            items: [
              {
                label: "The CREATIVE Podcast 🔊"
                href: "https://open.spotify.com/show/4zAsBnJwZKquxvI7oPqRam?si=3bcceebea4614195",
              },
              {
                label: "CREATIVE KIDZ ⌐◨-◨",
                href: "https://nouns.build/dao/0x5da6ae3d2cce42dd0b805b0bc3befeab0e0b9cca",
              },
              {
                label:"CREATIVE TV 📺",
                href: "https://creative-monorepo.vercel.app",
              },
              {
                label: "Urban Uprise Crew 💀",
                href: "https://urbanuprisecrew.com/",
              },
              {
                label: "Creative Events",
                href: "https://events.creativeplatform.xyz",
              },
            ],
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
