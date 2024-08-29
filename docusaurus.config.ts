import {themes as prismThemes} from 'prism-react-renderer';

const config: import('@docusaurus/types').Config = {
  // SEO & Metadata
  title: 'WASI.dev',
  favicon: 'img/favicon.ico',
  titleDelimiter: '·',
  tagline: 'WebAssembly System Interface',

  // URLs
  url: 'https://wasi.dev/',
  baseUrl: '/',
  trailingSlash: false,

  // GitHub Configuration
  organizationName: 'bytecodealliance',
  projectName: 'wasi.dev',
  deploymentBranch: 'main',

  // Build Checks
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/bytecodealliance/wasi.dev/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        pages: {
          path: './pages',
        }
      } satisfies import('@docusaurus/preset-classic').Options,
    ],
  ],

  themeConfig:
    {
      // TODO: Add social image
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'WASI.dev',
        logo: {
          alt: 'WASI logo',
          src: 'img/wasi.png',
        },
        items: [
          {
            href: 'https://github.com/bytecodealliance/wasi.dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Zulip',
                href: 'https://bytecodealliance.zulipchat.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/bytecodealliance/wasi.dev',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies import('@docusaurus/preset-classic').ThemeConfig,
};

export default config;
