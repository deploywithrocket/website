const { Theme, ThemeManager } = require('tailwindcss-theming/api');
const { TinyColor } = require('@ctrl/tinycolor');

const main = new Theme()
    .setName('light')
    .targetable()
    .addColors({
        transparent: 'transparent',
        selection: '#B94571',
        brand: {
            default: '#FD3A84',
            muted: '#BA4572',
        },
        button: '#EEEEEE',
        background: '#FFFFFF',
        navigation: {
            default: '#F0F0F0',
            hover: new TinyColor('#F0F0F0').setAlpha(0.75),
        },
        sidebar: {
            active: '#FFE5EF',
        },
        'on-background': {
            default: '#2F0515',
            code: '#FFF1F6',
            blockquote: '#8E8E8E',
            figcaption: '#8E8E8E',
            list: '#8E8E8E',
            muted: '#F0E2E7',
        },
        'on-navigation': {
            default: '#4F4F4F',
            icon: new TinyColor('#4F4F4F').setAlpha(0.75),
            muted: new TinyColor('#4F4F4F').setAlpha(0.1),
        },
        'on-sidebar': {
            default: '#6F4E5B',
            active: '#B94571',
            header: '#ABABAB',
            hover: '#B94571',
        },
        'on-brand': '#FFFFFF',
        'on-button': {
            default: '#8D8D8D',
            hover: '#B94571',
        },
    })
    .setVariable('focus', '0 0 0 3px rgba(66, 153, 225, 0.5)', 'boxShadow', 'shadow')
    .addOpacityVariant('hover', 0.75, 'navigation');

const dark = new Theme()
    .setName('dark')
    .targetable()
    .addColors({
        transparent: 'transparent',
        selection: '#B94571',
        brand: {
            default: '#FD3A84',
            muted: '#BA4572',
        },
        button: '#292929',
        background: '#1F1F1F',
        navigation: {
            default: '#363636',
            hover: new TinyColor('#363636').setAlpha(0.75),
        },
        sidebar: {
            active: '#2D2126',
        },
        'on-background': {
            default: '#EFEFEF',
            code: '#2F2328',
            blockquote: '#8C8C8C',
            figcaption: '#8C8C8C',
            list: '#8C8C8C',
            muted: '#32252A',
        },
        'on-navigation': {
            default: '#FFFFFF',
            icon: new TinyColor('#FFFFFF').setAlpha(0.75),
            muted: new TinyColor('#FFFFFF').setAlpha(0.1),
        },
        'on-sidebar': {
            default: '#A7ACBE',
            active: '#FFFFFF',
            header: '#755763',
            hover: '#FFFFFF',
        },
        'on-brand': '#860C3B',
        'on-button': {
            default: '#919191',
            hover: '#FFCBDF',
        },
    })
    .setVariable('focus', '0 0 0 3px rgba(66, 153, 225, 0.5)', 'boxShadow', 'shadow')
    .addOpacityVariant('hover', 0.75, 'navigation');

module.exports = new ThemeManager() //
    .setDefaultTheme(main)
    .setDefaultDarkTheme(dark);
