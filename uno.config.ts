import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],

    // PORTAL PRESETS
    // https://tailwindcomponents.com/gradient-generator/
    ['portal-gradient', 'bg-gradient-to-r from-slate-900 to-slate-700'],
    ['portal-gradient-text-header', 'bg-gradient-to-r from-violet-400 to-rose-600 bg-clip-text text-transparent font-pop text-3xl uppercase font-black'],

    // DEV PRESETS
    ['dev-edge', 'border-1 border-true-gray-600 border-dashed hover:(bg-gray-100)'],
  ],

  theme: {
    colors: {
      dark: {
        pure: '#000',
        dark: '#080808',
      },
      light: {
        pure: '#fff',
        mid: '#e6e6e6',
      },
      accent: {
        main: '#debc57',
        sub: '#6bc5e8',
      },
    },
  },

  presets: [
    presetWebFonts({
      //
      provider: 'bunny',
      fonts: {
        title:
          {
            name: 'Playfair Display',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
            italic: false,
          },

        pop:
          {
            name: 'Poppins',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
            italic: false,
          },

        sans:
          {
            name: 'Noto Sans',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
            italic: false,
          },
      },

      // ### SANS
      // Montserrat
      // Roboto
      // Poppins
      // Noto Sans

      // ### SERIF
      // Noto Serif Display
      // Playfair Display
      // Aboreto
      // El Messiri
      // Cormorant Garamond
      // ZCOOL XiaoWei
    }),

    presetUno(),
    presetScrollbarHide(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
