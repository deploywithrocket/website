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
        button: '#FEE5EF',
        background: '#FFFFFF',
        navigation: {
            default: '#F7EDF1',
            hover: new TinyColor('#F7EDF1').setAlpha(0.75),
        },
        sidebar: {
            active: '#FFE5EF',
        },
        'on-background': {
            default: '#2F0515',
            code: '#FFF1F6',
            blockquote: '#9A828B',
            figcaption: '#9A828B',
            list: '#9A828B',
            muted: '#F0E2E7',
        },
        'on-navigation': {
            default: '#2F0515',
            icon: new TinyColor('#2F0515').setAlpha(0.75),
            muted: new TinyColor('#2F0515').setAlpha(0.1),
        },
        'on-sidebar': {
            default: '#6F4E5B',
            active: '#B94571',
            header: '#C0A0AC',
            hover: '#B94571',
        },
        'on-brand': '#FFFFFF',
        'on-button': {
            default: '#B07A8F',
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
        button: '#32252A',
        background: '#261C20',
        navigation: {
            default: '#472D37',
            hover: new TinyColor('#472D37').setAlpha(0.75),
        },
        sidebar: {
            active: '#2D2126',
        },
        'on-background': {
            default: '#EFEFEF',
            code: '#2F2328',
            blockquote: '#84626F',
            figcaption: '#84626F',
            list: '#84626F',
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
            default: '#AF8293',
            hover: '#FFCBDF',
        },
    })
    .setVariable('focus', '0 0 0 3px rgba(66, 153, 225, 0.5)', 'boxShadow', 'shadow')
    .addOpacityVariant('hover', 0.75, 'navigation');

module.exports = new ThemeManager() //
    .setDefaultTheme(main)
    .setDefaultDarkTheme(dark);
