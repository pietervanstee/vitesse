# Installation & Setup management portal for `portal`

## Installation

`package.json`

``` json
// Add under scripts
{
  "scripts": {
    "go": "npx vite --port 4000 --host"
  }
}
```

`vite.config.ts`

``` ts
export default defineConfig({
  // Optional additions

  // If the SPA is not hosted in the root dir
  publicDir: './webdev/-CNVS',
  base: '/webdev/-CNVS/',
  build: {
    outDir: './webdev/-CNVS',
  },

  // Force these assets to be included in the build
  assetsInclude: [
    '**/*.woff2',
    '**/*.png',
    '**/*.ico',
    '**/*.svg',
    '**/*.glb',
    // './../src/assets/**/*',
    // '**/*.jpg',
    // '**/*.jpeg',
    // '**/*.gif',
    // '**/*.webp',
    // '**/*.ogg',
    // '**/*.wav',
  ],

  // Optionally comment out
  // - Markdown
  // - VueI18n
  // - VueDevTools
  // - WebfontDownload

  // Also add the outDir here
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
    onFinished() { generateSitemap({ outDir: './webdev/-CNVS/' }) },
  },

})
```

`uno.config.ts`

``` ts
export default defineConfig({
  shortcuts: [
    ['center', 'left-50% top-50% transform -translate-50%'],
    ['divfull', 'absolute w-full h-screen select-none'],
    ['divfull-select', 'absolute w-full h-screen'],
    ['divfill', 'absolute w-full h-full select-none'],
    ['divtrans', 'transition-all duration-800 ease-in-out'],

    ['dev-border', 'border-1 border-dashed border-dark-mid'],
    ['info-main', 'bg-dark-pure'],
    ['btn-m-navinfo', 'grid m-4 aspect-square w-10 rounded-full place-content-center bg-none border-1 border-black opacity-80 text-xl text-xl text-black opacity-60 divtrans hover:(cursor-pointer bg-wado-greendark text-white)'],
  ],

  // Setup fonts from google fonts https://fonts.google.com/
  // Serif        Noto Serif Display - Newsreader - Playfair Display - Noto Serif Display
  // SansSerif    Comfortaa - Dosis - Abel - Lato - Montserrat
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
  ],

  // Setup main theme colors applied globally
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
})
```

`tsconfig.json`

``` json
{
  // changes here
}
```

`index.html`

``` html
<!-- Issue with icons to be resolved -->
  <link rel="apple-touch-icon" href="/pwa-192x192.png">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff">

<!-- META TAGS: Theme colors & full width on ios -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no, viewport-fit=cover">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="msapplication-TileColor" content="#121212">
```

`.gitignore`

``` bash
# ADD
webdev
```

`.env`

``` bash
VITE_APP_DB_URL=...
...

# Passwords
# Database url
# ...
```

`settings.json`

``` json
// cSpell.words
[
  "ANIMATIONLOOPMODE",
  "antfu",
  "axios",
  "babylonjs",
  "Btns",
  "cameratransition",
  "camorbit",
  "canvassettings",
  "claar",
  "clickables",
  "cnvs",
  "cnvsdb",
  "cnvsid",
  "cnvssett",
  "cnvssettings",
  "colortools",
  "Comfortaa",
  "composables",
  "configtype",
  "Custombuild",
  "demi",
  "denormalize",
  "divfill",
  "divfull",
  "divtrans",
  "Dosis",
  "EASEINOUT",
  "easingcurves",
  "EASINGMODE",
  "EPSI",
  "extralight",
  "favico",
  "Fraunces",
  "gltf",
  "gotoframe",
  "greendark",
  "greenlight",
  "GSAP",
  "hovercolor",
  "Icones",
  "iconify",
  "iface",
  "intlify",
  "Keymap",
  "Lato",
  "lerp",
  "Lightmix",
  "moveup",
  "noopener",
  "Noto",
  "nprogress",
  "orbitcam",
  "Pann",
  "Pieter",
  "pingpong",
  "pinia",
  "Playfair",
  "pnpm",
  "pocketbase",
  "precached",
  "Prefiltered",
  "projectpelt",
  "projectsettings",
  "projectstory",
  "Pylance",
  "RENDERLOOP",
  "Roboto",
  "scenesetup",
  "settcnvs",
  "settproj",
  "setupmain",
  "shiki",
  "showthis",
  "sizecheck",
  "Skybox",
  "smootherstep",
  "Spinup",
  "subsett",
  "taze",
  "TONEMAPPING",
  "transitionwipe",
  "tweakpane",
  "typecheck",
  "typeorm",
  "unocss",
  "unplugin",
  "vanstee",
  "Verdana",
  "Vite",
  "vitejs",
  "Vitesse",
  "vitest",
  "vshow",
  "Vuesax",
  "Vuetify",
  "vueuse",
  "wado",
  "webdev",
  "webfont"
]
```

### Install dependencies globally

``` bash
# Example with primevue
# To be verified
import PrimeVue from 'primevue/config'
import { type UserModule } from '~/types'
import 'primevue/resources/themes/viva-light/theme.css'

export const install: UserModule = ({ app }) => {
  app.use(PrimeVue)
}
```

### Dependencies

- vue3-lottie
- primevue
- quill
- unocss-preset-scrollbar-hide
- pocketbase
- appwrite
- jspdf
- qrcode.vue
- mobile-device-detect
- iconify-json/carbon
- iconify/json
- iconify/utils
- iconify/vue
- moment
- vue-inline-svg

- three
- three-stdlib
- uuid
- tweakpane
- babylonjs-gltf2interface
- animejs
- d3-interpolate
- lodash-es
- lodash
- vue-gtm

- @babylonjs/core
- @babylonjs/loaders
- @babylonjs/gui

---

#### New Repo

Github | NPM | Web | Docs | Demo

> Description here

``` bash
# Installation
pnpm i -S 
```

Usage

``` ts
// Import

// Usage
```

``` html
<!-- Component -->
```

---

#### vue3-lottie

[Github](https://github.com/megasanjay/vue3-lottie) | [NPM](https://www.npmjs.com/package/vue3-lottie) | [Install](https://vue3-lottie.vercel.app/introduction/vue-3) | [Web](https://vue3-lottie.vercel.app/) | [Docs](https://vue3-lottie.vercel.app/introduction/installation) | Demo

> Add Lottie animations to your Vue 3 or Nuxt 3 application.

``` bash
pnpm i -S vue3-lottie@latest
```

Usage

``` ts
// Import
import { Vue3Lottie } from 'vue3-lottie'

// Usage
import AstronautJSON from './astronaut.json'
```

``` html
<Vue3Lottie
  :animationData="AstronautJSON"
  :height="200"
  :width="200" 
/>
```

---

#### primevue

[Github](https://github.com/primefaces/primevue) | [NPM](https://www.npmjs.com/package/primevue) | [Web](https://primevue.org/) | [Docs](https://primevue.org/installation/) | [Demo](https://primevue.org/autocomplete/)

> Set of open source UI Components for Vue.

``` bash
# Installation
pnpm i -S primevue@latest
```

Usage

``` ts
// Import > no import needed due to `vite.config.ts` see below
```

``` html
<Dialog :showHeader="false" />
```

Make all components available globally - update `vite.config.ts` > add dirs

``` ts
// ADD: dirs: ['src/**/*', 'node_modules/primevue/**/*'],
export default defineConfig({
  plugins: [
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      dirs: ['src/**/*', 'node_modules/primevue/**/*'],
    }),
  ]
})
```

---

#### daisyui

[Github](https://github.com/saadeghi/daisyui) | [NPM](https://www.npmjs.com/package/daisyui) | [Web](https://daisyui.com/) | Docs | [Demo](https://daisyui.com/components/)

> The most popular component library component library for Tailwind CSS.

``` bash
# Installation
pnpm i -D daisyui@latest
```

Config

``` ts
// .
```

---

#### unocss-preset-daisy

[Github](https://github.com/kidonng/unocss-preset-daisy) | NPM | Web | Docs | Demo

> The most popular component library component library for Tailwind CSS.

``` bash
# Installation
pnpm i -D unocss-preset-daisy
```

Config `vite.config.ts`

``` ts
// ADD
import { presetUno } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  plugins: [
    unocss({
      presets: [presetUno(), presetDaisy()],
    }),
  ],
})
```

Config `main.ts`

``` ts
// CHECK > SHOULD BE ALREADY PRESENT IN `main.ts`
import '@unocss/reset/tailwind.css'
import 'uno.css'
```

``` html
<!-- EXAMPLES -->
<div class="card w-96 bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes"
    />
  </figure>
  <div class="card-body">
    <h3 class="font-bold card-title">Shoes!</h3>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

---

#### quill

Github | NPM | Web | Docs | Demo

> QuillJS is a modern rich text editor built for compatibility and extensibility. Dependency for `primevue` text editor

``` bash
# Installation
pnpm i -S quill
```

Usage

``` ts
// Import
// Use auto import for all primevue components
```

``` html
<Editor v-model="value" editorStyle="height: 320px" />
```

---

#### unocss-preset-scrollbar-hide

[Github](https://github.com/reslear/unocss-preset-scrollbar-hide) | [NPM](https://www.npmjs.com/package/unocss-preset-scrollbar-hide) | Web | Docs | Demo

> Hide scrollbars, although the element can still be scrolled if the element's content overflows, using `unocss` class.

``` bash
# Installation
pnpm i -S unocss-preset-scrollbar-hide
```

Usage

``` ts
// unocss.config.ts
import { presetUno } from 'unocss'
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'

export default defineConfig({
  // ...
  presets: [
    presetUno(),
    // ...
    presetScrollbarHide()
  ],
})
```

``` html
<div class="w-4 scrollbar-hide">...</div>
```

---

#### pocketbase

[Github](https://github.com/pocketbase/js-sdk) | [NPM](https://www.npmjs.com/package/pocketbase) | Web | Docs | Demo

> Simple and powerfull database & file storage all in one

``` bash
# Installation
pnpm i -S pocketbase
```

Usage

``` ts
// Import
import PocketBase from 'pocketbase'

// Usage
function fileUrl(file: string, record: any) {
  const pb = new PocketBase(`https://${import.meta.env.VITE_DB_URL}`)
  const url = pb.files.getUrl(record, file)

  return url
}
```

`pocketbase.ts`

Create object `pb` that is usable in all components

``` ts
import PocketBase from 'pocketbase'

// const project_id = import.meta.env.VITE_PROJECT_ID
const db_url = import.meta.env.VITE_DB_URL
export const pb = new PocketBase(`https://${db_url}`)
```

`store.ts`

``` ts
import { pb } from './pocketbase'

async function getRecords() {
  pb_config.value = await pb.collection(`p_${project_id}_settings`).getFullList({
    sort: '-created',
  })
  canvas_settings_main.value = await pb.collection('cnvs_sett_main').getFullList({
    sort: '-created',
  })
}
```

---

#### appwrite

[Github](https://github.com/appwrite/sdk-for-web) | [NPM](https://www.npmjs.com/package/appwrite) | [Web](https://appwrite.io/) |[Docs](https://appwrite.io/docs)

> Open-source backend as a service server with powerfull database & file storage with auth and functions running in the `cloud`

``` bash
# Installation
pnpm i -S appwrite
```

Usage

``` ts
// Import
import { Account, Client, Databases, Permission, Role } from 'appwrite'

// Usage see full example in `api.ts`
const api = {
  sdk: null as Sdk | null,

  provider: () => {
    if (api.sdk)
      return api.sdk

    const client = new Client()
    const account = new Account(client)

    client
      .setEndpoint('https://appwrite.vanstee.be/v1')
      .setProject('64fb0bd4ec00c35c23da')

    const database = new Databases(client)
    api.sdk = { database, account }
    return api.sdk
  },

  createSession: (email: string, password: string) => {
    return api.provider().account.createEmailSession(email, password)
  }

  // ...
}
```

``` ts
const items = ref()

async function getItems() {
  await api.provider().database.listDocuments(
    Server.database,
    id_collections.items,
    [
      Query.limit(100), // default 25
    ],
  ).then((response: any) => {
    if (response)
      items.value = response.documents
  })
}
```

---

#### jspdf

[Github](https://github.com/MrRio/jsPDF) | [NPM](https://www.npmjs.com/package/jspdf) | [Web](https://github.com/parallax/jsPDF) | [Docs](https://raw.githack.com/MrRio/jsPDF/master/docs/index.html) | [Demo](https://raw.githack.com/MrRio/jsPDF/master/index.html)

> Create pdf files in the browser

``` bash
# Installation
pnpm i -S jspdf
```

Usage

``` ts
// Import
import { jsPDF as JsPDF } from 'jspdf'

// Usage
const doc = new JsPDF()

doc.text('Hello world!', 10, 10)
doc.save('a4.pdf')
```

---

#### qrcode.vue

[Github](https://github.com/scopewu/qrcode.vue) | [NPM](https://www.npmjs.com/package/qrcode.vue) | [Docs](https://github.com/scopewu/qrcode.vue) | [Demo](https://qr-vue.tie.pub/)

> QR Code generator for Vue 3

``` bash
# Installation
pnpm i -S qrcode.vue
```

Usage

``` ts
// Import
import QrcodeVue from 'qrcode.vue'

// Usage
const value = ref('http://www.portal.vanstee.be')
```

``` html
  <qrcode-vue :value="value" :size="size" level="H" />
```

---

#### mobile-device-detect

[Github](https://github.com/duskload/mobile-device-detect) | [NPM](https://www.npmjs.com/package/mobile-device-detect) | Web | Docs | Demo

> Detect the type of device in the browser

``` bash
# Installation
pnpm i -S mobile-device-detect
```

Usage

``` ts
// Import
import { isMobile } from 'mobile-device-detect'
```

``` html
<div> {{ isMobile ? 'Yes you are on mobile' : 'You are not watching this on a mobile browser' }} </div>
```

---

#### iconify/json

[Github](https://github.com/iconify/icon-sets) | [NPM](https://www.npmjs.com/package/@iconify/json) | [Demo](https://icones.js.org/)

> Install all iconify packages at once [@icones](https://icones.js.org/)

``` bash
# Installation
pnpm i -S @iconify/json
# Restart dev server after installation
```

Usage

``` html
<div i-material-symbols-home-outline-rounded />
```

---

#### iconify/utils

[Github](https://github.com/iconify/iconify) | [NPM](https://www.npmjs.com/package/@iconify/utils) | [Docs](https://iconify.design/docs/libraries/utils/)

> Install iconify utilities: transform, rotate, colorize, ...

``` bash
# Installation
pnpm i -S @iconify/utils
```

---

#### iconify/vue

[Github](https://github.com/iconify/iconify) | [NPM](https://www.npmjs.com/package/@iconify/vue) | [Demo](https://icones.js.org/)

> Use iconify in vue 3 directly as component

``` bash
# Installation
pnpm i -S @iconify/vue
```

Usage

``` ts
// Import (not needed in vitesse setup)
import { Icon } from '@iconify/vue'
```

``` html
<Icon icon="mdi-light:home" />
<!-- OR -->
<div mdi-light:home />
```

---

#### vue-disable-autocomplete

[Github](https://github.com/aacassandra/vue-disable-autocomplete) | [NPM](https://www.npmjs.com/package/@aacassandra/vue-disable-autocomplete)

> Use iconify in vue 3 directly as component

``` bash
# Installation: Use only one of the following
pnpm i -S @aacassandra/vue-disable-autocomplete # 4 years
pnpm i -S @eric-ds/vue-effective-autocomplete-off # 4 months
```

Setup

``` ts
import DisableAutocomplete from '@eric-ds/vue-effective-autocomplete-off'

Vue.use(DisableAutocomplete)
```

Usage

``` ts
import DisableAutocomplete from '@eric-ds/vue-effective-autocomplete-off'
```

``` html
<input type="email" name="email" autocomplete="off">
```

---

#### moment

[Github](https://github.com/moment/moment) | [NPM](https://www.npmjs.com/package/moment) | [Web](https://momentjs.com/) | Docs | Demo

> JavaScript date library for parsing, validating, manipulating, and formatting dates.

``` bash
# Installation
pnpm i -S moment
```

Usage

``` ts
// Import
import moment from 'moment'

// Usage
const date_time = moment().format('MMMM Do YYYY, h:mm:ss a') // September 14th 2023, 5:55:22 am

const time_now = moment().format('LT') // 5:55 AM
```

``` html
<p> {{ date_time }} </p>
```

---

#### three

[Github](https://github.com/mrdoob/three.js) | [NPM](https://www.npmjs.com/package/three) | [Web](https://threejs.org/) | [Docs](https://threejs.org/docs/) | [Demo](https://threejs.org/examples/)

> lightweight, cross-browser, general purpose 3D library.

``` bash
# Installation
pnpm i -S three
```

Usage see docs

---

#### three-stdlib

[Github](https://github.com/pmndrs/three-stdlib) | [NPM](https://www.npmjs.com/package/three-stdlib)

> Stand-alone version of threejs/examples/jsm written in Typescript & built for ESM & CJS.

``` bash
# Installation
pnpm i -S three-stdlib
```

Usage

``` ts
// Import
import { OrbitControls } from 'three-stdlib'
```

---

#### uuid

[Github](https://github.com/uuidjs/uuid) | [NPM](https://www.npmjs.com/package/uuid) | Web | Docs | Demo

> creation of RFC4122 UUIDs.

``` bash
# Installation
pnpm i -S uuid
```

Usage

``` ts
// Import
import { v4 as uuidv4 } from 'uuid'

// Usage
uuidv4() // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

---

#### tweakpane

[Github](https://github.com/cocopon/tweakpane) | [NPM](https://www.npmjs.com/package/tweakpane) | [Docs](https://tweakpane.github.io/docs/)

> compact pane for fine-tuning parameters and monitoring value changes.

``` bash
# Installation
pnpm i -S tweakpane
```

Usage

``` ts
// Import

// Usage
const PARAMS = {
  factor: 123,
  title: 'hello',
  color: '#ff0055',
}

const pane = new Pane()

pane.addBinding(PARAMS, 'factor')
pane.addBinding(PARAMS, 'title')
pane.addBinding(PARAMS, 'color')
```

``` html
<!-- Component -->
```

---

#### babylonjs-gltf2interface

[Github](https://github.com/BabylonJS/Babylon.js) | [NPM](https://www.npmjs.com/package/babylonjs-gltf2interface) | [Web](https://www.babylonjs.com/) | Docs | Demo

> A typescript declaration of babylon's gltf2 interface.

``` bash
# Installation
pnpm i -S babylonjs-gltf2interface
```

Usage

``` ts
// Import

// Usage
```

---

#### animejs

[Github](https://github.com/juliangarnier/anime) | [NPM](https://www.npmjs.com/package/animejs) | [Web](http://animejs.com/) | [Docs](https://animejs.com/documentation) | [Demo](https://codepen.io/collection/XLebem/)

> JavaScript animation engine.

``` bash
# Installation
pnpm i -S animejs
```

Usage

``` ts
// Import
import anime from 'animejs'

// Usage
anime({
  targets: { value: time_current },
  value: time_target,
  duration: 1000,
  easing: 'easeOutSine', // ['easeInOutQuart'](https://easings.net/)

  update() {
    // Run on each animation frame
  },

  complete() {
    // Do something after animation
  },
})
```

---

#### d3-interpolate

[Github](https://github.com/d3/d3-interpolate) | [NPM](https://www.npmjs.com/package/d3-interpolate) | [Web](https://d3js.org/d3-interpolate/) | Docs | Demo

> variety of interpolation methods for blending between two values.

``` bash
# Installation
pnpm i -S d3-interpolate
```

Usage

``` ts
// Import
import { interpolateRgb } from 'd3-interpolate'

// Usage > https://d3js.org/d3-interpolate
const i = d3.interpolate({ colors: ['red', 'blue'] }, { colors: ['white', 'black'] })
i(0.0) // {colors: ["rgb(255, 0, 0)", "rgb(0, 0, 255)"]}
i(0.5) // {colors: ["rgb(255, 128, 128)", "rgb(0, 0, 128)"]}
i(1.0) // {colors: ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]}
```

``` html
<!-- Component -->
```

---

#### @babylonjs/core

[Github](https://github.com/BabylonJS/Babylon.js) | [NPM](https://www.npmjs.com/package/@babylonjs/core) | [Web](https://www.babylonjs.com/) | Docs | Demo

> one of the most powerful, beautiful, simple, and open web rendering engines in the world.

``` bash
# Installation
pnpm i -S @babylonjs/core
```

Usage

``` ts
// Import > https://www.npmjs.com/package/@babylonjs/core
import { Engine } from '@babylonjs/core/Engines/engine'
import { Scene } from '@babylonjs/core/scene'
import { Vector3 } from '@babylonjs/core/Maths/math'
import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera'
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight'
import { Mesh } from '@babylonjs/core/Meshes/mesh'

// Usage
import '@babylonjs/core/Materials/standardMaterial'
import '@babylonjs/core/Meshes/Builders/sphereBuilder'
import '@babylonjs/core/Meshes/Builders/boxBuilder'
import '@babylonjs/core/Meshes/Builders/groundBuilder'

const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement
const engine = new Engine(canvas)
const scene = new Scene(engine)

const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene)

camera.setTarget(Vector3.Zero())

camera.attachControl(canvas, true)

const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene)

light.intensity = 0.7

const sphere = Mesh.CreateSphere('sphere1', 16, 2, scene)

sphere.position.y = 2

Mesh.CreateGround('ground1', 6, 6, 2, scene)

engine.runRenderLoop(() => {
  scene.render()
})
```

``` html
<!-- Component @canvas -->
```

---

#### @babylonjs/loaders

[Github](https://github.com/BabylonJS/Babylon.js) | [NPM](https://www.npmjs.com/package/@babylonjs/loaders) | [Web](https://www.babylonjs.com/) | Docs | Demo

> for loading flTF formats.

``` bash
# Installation
pnpm i -S @babylonjs/core @babylonjs/loaders
```

Usage

``` ts
// Import
import '@babylonjs/loaders/glTF'

// Usage
```

---

#### @babylonjs/gui

[Github](https://github.com/BabylonJS/Babylon.js) | [NPM](https://www.npmjs.com/package/@babylonjs/gui) | [Web](https://www.babylonjs.com/) | [Docs](https://doc.babylonjs.com/features/featuresDeepDive/gui/gui)

> extension you can use to generate interactive user interface.

``` bash
# Installation
pnpm i -S @babylonjs/core @babylonjs/gui
```

Usage

``` ts
// Import
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D'

// Usage
// Creates the post process
const postProcess = new AdvancedDynamicTexture('adt', 128, 128, scene)
```

---

#### vue-inline-svg

[Github](https://github.com/shrpne/vue-inline-svg) | [NPM](https://www.npmjs.com/package/vue-inline-svg) | Web | Docs | Demo

> Dynamically loads an SVG source and inline `<svg>` element so you can manipulate the style of it.

``` bash
# Installation
pnpm i -S vue-inline-svg
```

Usage

``` ts
// Import
import InlineSvg from 'vue-inline-svg'

// Usage
function transform(svg) {
  const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  point.setAttributeNS(null, 'cx', '20')
  point.setAttributeNS(null, 'cy', '20')
  point.setAttributeNS(null, 'r', '10')
  point.setAttributeNS(null, 'fill', 'red')
  svg.appendChild(point)
  return svg
}
```

``` html
<inline-svg 
    src="image.svg" 
    transformSource="transformSvg"
    @loaded="transform($event)"
    @unloaded="svgUnloaded()"
    @error="svgLoadError($event)"
    width="150" 
    height="150"
    fill="black"
    aria-label="My image"
></inline-svg>
```

---

#### vue-gtm

[Github](https://github.com/gtm-support/vue-gtm) | [NPM](https://www.npmjs.com/package/@gtm-support/vue-gtm) | Web | Docs | Demo

> extension you can use to generate interactive user interface.

``` bash
# Installation
pnpm i -S @gtm-support/vue-gtm
```

Usage

``` ts
// example configuration > https://www.npmjs.com/package/@gtm-support/vue-gtm
import { createApp } from 'vue'
import { createGtm } from '@gtm-support/vue-gtm'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(
  createGtm({
    id: 'GTM-xxxxxx',
    queryParams: {

      gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
      gtm_preview: 'env-4',
      gtm_cookies_win: 'x',
    },
    source: 'https://customurl.com/gtm.js',
    defer: false,
    compatibility: false,
    nonce: '2726c7f26c',
    enabled: true,
    debug: true,
    loadScript: true,
    vueRouter: router,
    ignoredViews: ['homepage'],
    trackOnNextTick: false,
  }),
)
```

``` ts
// Passing custom properties with page view events
const myRoute = {
  path: 'myRoute',
  name: 'myRouteName',
  component: SomeComponent,
  meta: { gtmAdditionalEventData: { routeCategory: 'INFO' } },
}
```

``` ts
// Passing dynamic properties with page view events
createGtm({
  // ...other options
  vueRouter: router,
  vueRouterAdditionalEventData: () => ({
    someComputedProperty: computeProperty(),
  }),
})
```

``` ts
import { useGtm } from '@gtm-support/vue-gtm'

// Passing dynamic properties with page view events
const gtm = useGtm()

function triggerEvent() {
  gtm.trackEvent({
    event: 'event name',
    category: 'category',
    action: 'click',
    label: 'My custom component trigger',
    value: 5000,
    noninteraction: false,
  })
}
```

``` html
  <button @click="triggerEvent">Trigger event!</button>
```

---

#### lodash

[Github](https://github.com/lodash/lodash) | [NPM](https://www.npmjs.com/package/lodash-es) | [Web](https://lodash.com/) | [Docs](https://lodash.com/docs) | Demo

> extension you can use to generate interactive user interface.
> The Lodash library exported as ES modules.

``` bash
# Installation
pnpm i -S lodash-es
pnpm i -D @types/lodash

# pnpm i -S lodash @types/lodash
```

Usage

``` ts
// Import
import { capitalize } from 'lodash'

// Usage
function capitalizeFirstName(name) {
  const result = capitalize(name)
  console.log(response)
}
```

**Dependencies (typically in `dependencies`):**

1. vue3-lottie
2. primevue (appears twice, but should be in dependencies)
3. quill
4. jspdf
5. qrcode.vue
6. iconify-json/carbon
7. iconify/json
8. iconify/utils
9. iconify/vue
10. moment
11. three
12. three-stdlib
13. babylonjs-gltf2interface
14. @babylonjs/core
15. @babylonjs/loaders
16. @babylonjs/gui

**DevDependencies (typically in `devDependencies`):**

1. unocss-preset-scrollbar-hide
2. pocketbase
3. appwrite
4. mobile-device-detect
5. uuid
6. tweakpane
7. animejs
8. d3-interpolate
