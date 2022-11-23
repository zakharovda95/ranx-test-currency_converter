import colors from 'vuetify/es5/util/colors';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ranx-test-currency_converter',
    title: 'ranx-test-currency_converter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/pwa', '@nuxtjs/i18n'],
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          currencyListTitle: 'Currency list',
          chooseBaseCurrency: 'Select main currency',

          links: {
            toList: 'Currency list',
            toConverter: 'Currency converter',
          },

          date: {
            date: 'Date:',
            updated: 'Updated:',
          },

          converter: {
            converter: 'Currency converter',
            enterVal: 'Enter value to convert',
            result: 'Result',
            selected: 'Selected:',
            placeholder: 'Enter value',
          },

          list: {
            AUD: 'Australian dollar',
            AZN: 'Azerbaijani manat',
            GBP: 'British Pound Sterling',
            AMD: 'Armenian Dram',
            BYN: 'Belarusian ruble',
            BGN: 'Bulgarian lev',
            BRL: 'Brazilian real',
            HUF: 'Hungarian Forint',
            HKD: 'Hong Kong dollar',
            DKK: 'Danish krone',
            USD: 'US Dollar',
            EUR: 'Euro',
            INR: 'Indian rupees',
            KZT: 'Kazakhstan tenge',
            CAD: 'Canadian dollar',
            KGS: 'Kyrgyzstani som',
            CHY: 'Chinese Yuan',
            MDL: 'Moldovan lei',
            NOK: 'NOK',
            PLN: 'Polish zloty',
            RON: 'Romanian ley',
            XDR: 'SDR (Special Drawing Rights)',
            SGD: 'Singapore dollar',
            TJS: 'Tajikistani somoni',
            TRY: 'Turkish Lira',
            TMT: 'New Turkmen manat',
            UZS: 'Uzbek sum',
            UAH: 'Ukrainian hryvnia',
            CZK: 'Czech crowns',
            SEK: 'Swedish krona',
            CHF: 'Swiss franc',
            ZAR: 'South African rand',
            KRW: 'Korean Won',
            JPY: 'Japanese yen',
          },
        },

        ru: {
          currencyListTitle: 'Список валют',
          chooseBaseCurrency: 'Выберите основную валюту',

          links: {
            toList: 'Список валют',
            toConverter: 'Конвертер валют',
          },

          date: {
            date: 'Дата:',
            updated: 'Обновлено:',
          },

          converter: {
            converter: 'Конвертер валют',
            enterVal: 'Введите значение для конвертации',
            result: 'Результат',
            selected: 'Выбрано:',
            placeholder: 'Введите значение',
          },

          list: {
            AUD: 'Австралийский доллар',
            AZN: 'Азербайджанский манат',
            GBP: 'Фунт стерлингов СК',
            AMD: 'Армянский драм',
            BYN: 'Белорусский рубль',
            BGN: 'Болгарский лев',
            BRL: 'Бразильский реал',
            HUF: 'Венгерский форинт',
            HKD: 'Гонконгский доллар',
            DKK: 'Датская крона',
            USD: 'Доллар США',
            EUR: 'Евро',
            INR: 'Индийская рупия',
            KZT: 'Казахстанский тенге',
            CAD: 'Канадский доллар',
            KGS: 'Киргизский сом',
            CHY: 'Китайский юань',
            MDL: 'Молдавская лея',
            NOK: 'Норвежская крона',
            PLN: 'Польский злотый',
            RON: 'Румынский лей',
            XDR: 'СДР',
            SGD: 'Сингапурский доллар',
            TJS: 'Таджикский сомони',
            TRY: 'Турецкая лира',
            TMT: 'Новый туркменский манат',
            UZS: 'Узбекская сума',
            UAH: 'Украинская гривна',
            CZK: 'Чешская крона',
            SEK: 'Шведская крона',
            CHF: 'Швейцарский франк',
            ZAR: 'Южноафриканский рэнд',
            KRW: 'Вон республики Корея',
            JPY: 'Японский йен',
          },
        },
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
