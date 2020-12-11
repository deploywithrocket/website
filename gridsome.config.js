// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteUrl: process.env.SITE_URL,
    siteName: 'Rocket',
    siteDescription: 'The last project you will deploy',
    longDescription: '-',

    icon: {
        favicon: './src/assets/favicon.png',
        touchicon: './src/assets/favicon.png',
    },

    templates: {
        MarkdownPage: [
            {
                // Removes the digits in the urls, used to order stuff in the source code
                path: (node) => node.path.replace(/(\d{2}-)/g, ''),
            },
        ],
    },

    settings: {
        links: [
            {
                id: 'docs',
                name: 'Documentation',
                title: 'Read the documentation',
                url: '/docs/',
                icon: 'book',
            },
            {
                id: 'twitter',
                name: 'Twitter',
                title: 'Visit my Twitter',
                url: process.env.TWITTER_URL || false,
                icon: 'twitter',
            },
            {
                id: 'github',
                name: 'Github',
                title: 'Visit the repository',
                url: process.env.GITHUB_URL || false,
                icon: 'github',
            }
        ],
    },

    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                baseDir: './content',
                path: '**/*.md',
                typeName: 'MarkdownPage',
                remark: {
                    externalLinksTarget: '_blank',
                    externalLinksRel: ['noopener', 'noreferrer'],
                    plugins: ['@gridsome/remark-prismjs', 'remark-hint'],
                },
            },
        },

        {
            use: '@gridsome/plugin-sitemap',
            options: {},
        },
    ],

    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    //
                    require('tailwindcss'),
                    require('postcss-nested'),
                    require('postcss-font-magician'),
                ],
            },
        },
    },
};
