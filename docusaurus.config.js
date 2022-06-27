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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CREATIVE',
        logo: {
          alt: 'Creative Logo',
          src: 'img/Creative_logo-200.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Documentation',
          // },
          {
            href: "https://blog.creativeplatform.xyz",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://events.creativeplatform.xyz",
            label: "Creative Events",
            position: "left",
          },
          {
            href:"https://urbanuprisecrew.com/",
            label: "Mint UUC NFT",
            position: "left",
          },
          {
            href: "https://creative-newsletter.eo.page/sign-up",
            label: "Sign Up",
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
              // {
              //   label: 'Get Started',
              //   to: '/docs/intro',
              // },
              {
                label: 'Get Started',
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
                href: 'https://discord.gg/QxBrFmYwhA',
                label: 'Discord',
              },
              {
                href: 'https://twitter.com/creativecrtv',
                label: 'Twitter',
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                href: 'https://urbanuprisecrew.com/',
                label: "Mint UUC NFT",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Creative Organization DAO LLC.  Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
