const config = {
  gatsby: {
    pathPrefix: '/udon-extra-menu-kit',
    siteUrl: 'https://docs.konoe.studio/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/logo.png',
    logoLink: 'https://konoe.studio/',
    title: '',
    githubUrl: 'https://github.com/18konoe/',
    helpUrl: '',
    tweetText: '',
    social: `<li>
        <a href="https://twitter.com/18konoe" target="_blank" rel="noopener">
          <div class="twitterBtn">
            <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
          </div>
        </a>
      </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: ['/requirement', '/introduction', '/setup', '/license', '/release'],
    collapsedNav: ['/introduction', '/setup'],
    links: [{ text: 'Booth', link: 'https://18konoe.booth.pm' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://docs.konoe.studio/'>Docs</a><div class='greenCircle'></div><a href='https://docs.konoe.studio/udon-extra-menu-kit/'>Udon Extra Menu Kit</a>",
  },
  siteMetadata: {
    title: 'Udon Extra Menu Kit',
    description: 'Documentation for Udon Extra Menu Kit',
    ogImage: null,
    docsLocation:
      'https://github.com/18konoe/KonoeStudio.Docs.UdonExtraMenuKit/tree/master/content',
    favicon: 'https://konoe.studio/icons/icon-512x512.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
