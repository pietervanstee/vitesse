<!-- eslint-disable no-console -->
<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
import { api } from '~/data/api'

import svg_estimate from '~/assets/graphic/Offerte.svg?url'
import svg_portal from '~/assets/graphic/PortalLogo.svg?url'

const details_business = ref()
// const details_client = ref()
// const details_estimate = ref()

const config = {
  qr: {
    // color: '#A6ADBA',
    color: '#000',
  },
}

async function getInvoiceDetails() {
  await api.provider().database.listDocuments(
    '64fb250378ce23dcd5d2',
    '6500d3b9bc1904ac6a5e',
  ).then((res: any) => {
    console.log(res)
    const business = res.documents[0]

    const company = {
      label: 'Van',
      content: {
        name: business.company_name,
        address: business.company_street_no,
        city: `${business.company_postal} ${business.company_city}`,
      },
    }

    const company_vat = {
      label: 'VAT',
      content: {
        vat: business.vat_no,
      },
    }

    const company_bank = {
      label: 'Bank',
      content: {
        name: business.bank_name,
        account_nr: business.bank_account,
      },
    }

    const client = {
      label: 'Aan',
      content: {
        name: 'Bankers Woonprojecten',
        address: 'Leopoldlaan 21',
        city: '3900 Pelt',
        vat: 'BE 0680.860.717',
      },
    }

    const data = {
      company,
      company_vat,
      company_bank,
      client,
    }

    details_business.value = data
  })
}

const details_head = ref({
  to: {
    label: 'Aan',
    content: {
      name: 'Bankers Woonprojecten',
      address: 'Leopoldlaan 21',
      city: '3900 Pelt',
      vat: 'BE 0680.860.717',
    },
  },
  number: {
    label: 'Offerte n°',
    content: {
      number_estimate: '00023045',
    },
  },
  date: {
    label: 'Datum',
    content: {
      date_sent: '2023-09-07',
    },
  },
})

const portalBusinessDetails = ref({
  name: 'BV Pieter van Stee',
  address: 'Festraetsstraat 52 / 201',
  city: '3800 Sint Truiden',
})

const portalBankDetails = ref({
  title: 'Bank',
  name: 'BNP Paribas Fortis',
  account_nr: 'BE 0000.0000.0000',
})

const portalAccountantDetails = ref({
  title: 'VAT',
  vat: 'BE 0715.783.883',
  email: 'pieter@vanstee.be',
})

const items = ref({
  items: [
    {
      category: 'Management',
      about: {
        tagline: 'Communicatie & Administratie',
        description: '-',
      },
      quantity: 1,
      price: 275,
    },
    {
      category: 'Scene',
      about: {
        tagline: 'Algemene uitwerking van het model',
        description: 'Om het project op een mooie manier in beeld te kunnen brengen starten we met de opmaak van de scene. Hierin wordt de omgeving van het project opgebouwd en de belichting ingesteld. Dit is een belangrijke stap om het project op een realistische manier in beeld te brengen.',
      },
      quantity: 18,
      price: 70,
    },
    {
      category: 'Visual',
      about: {
        tagline: 'Exterieur',
        description: 'Exterieur visualisaties volgens de afgesproken cameraposities.',
      },
      quantity: 1,
      price: 650,
    },
    {
      category: 'Visual',
      about: {
        tagline: 'Gevelbeeld',
        description: 'Van de 4 gevels wordt een frontaal beeld gemaakt. Dit kan worden ingezet in de verkoopbrochure, alsook de website.',
      },
      quantity: 4,
      price: 200,
    },
    {
      category: 'Visual',
      about: {
        tagline: 'Interieurbeeld',
        description: 'Voor de geselecteerde ruimten van het project worden interieurbeelden gemaakt. De stijl van de interieurs zal worden afgestemd op de stijl van het project, en wordt ingericht met meubels en materialen die in het project worden toegepast. Indien hier specifieke wensen zijn, kan dit worden aangegeven, bij het aanleveren van de initiele briefing.',
      },
      quantity: 2,
      price: 650,
    },
    {
      category: 'Visual',
      about: {
        tagline: 'Luchtbeeld',
        description: 'In het luchtbeeld wordt het project vanuit de lucht in beeld gebracht. Dit kan potentiele kopers een goed beeld geven van de omgeving van het project. Hiervoor is het aangeraden om een drone in te zetten. Dit kan worden voorzien door de klant, of door ons worden voorzien.',
      },
      quantity: 1,
      price: 750,
    },
    {
      category: 'Fotografie',
      about: {
        tagline: 'Luchtbeelden drone',
        description: 'We werken voor de luchtbeelden samen met een gespecialiseerde drone piloot. Deze zal de luchtbeelden maken, en deze aanleveren in hoge resolutie. Dit om de een mooie visualisatie vanuit de lucht te kunnen maken.',
      },
      quantity: 1,
      price: 550,
    },
    {
      category: 'Fotografie',
      about: {
        tagline: 'Fotos ter plaatse',
        description: 'Om het project op een mooie manier te kunnen inpassen in de context, werken we me een fotograaf samen. Deze zal ter plaatse de nodige foto\'s maken.',
      },
      quantity: 1,
      price: 550,
    },
  ],
  options: {
    vat: 21,
    payment: '30 dagen',
    delivery: '30 dagen',
    notes: 'Notes',
    signature: 'Signature',
  },
})

interface Item {
  category: string
  about: {
    tagline: string
    description: string
  }
  quantity: number
  price: number
}

function filterItemsByCategory() {
  const categories: Record<string, Item[]> = {}

  Object.values(items.value.items).forEach((item: any) => {
    if (!categories[item.category])
      categories[item.category] = []

    categories[item.category].push(item)
  })

  return categories
}

const sortedItems = computed(() => {
  return filterItemsByCategory()
})

function asCurrency(amount: number) {
  const currency = amount.toLocaleString('en-BE', { maximumFractionDigits: 2 })
  return currency
}

const show_head = ref(false)
const show_infolabels = ref(true)
function get_qr_width() {
  return document.getElementById('head_qr')?.clientHeight // clientWidth
}
const qr_width = ref(get_qr_width())

onMounted(() => {
  qr_width.value = get_qr_width()
  getInvoiceDetails().then(() => console.log(details_business.value))
})
window.addEventListener('resize', () => {
  qr_width.value = get_qr_width()
})

const amount_discount_percentaate = ref(0.1)
const amount_vat_percentage = ref(0.21)
const amount_subtot = computed(() => {
  let amount = 0
  Object.values(items.value.items).forEach((item: any) => {
    amount += item.price * item.quantity
  })
  return (amount * (1 - amount_discount_percentaate.value))
})
const amount_discount = computed(() => {
  return -amount_subtot.value * amount_discount_percentaate.value
})
</script>

<template>
  <div class="overflow-y-scroll bg-white p-2 md:(h-screen p-24)">
    <div id="inv_body" class="h-full w-full flex flex-col justify-between">
      <!-- ! HEAD -->
      <div id="inv_head" class="w-ful mb-8">
        <div id="inv_logo" class="grid grid-cols-5 pb-12">
          <img :src="svg_estimate" alt="" srcset="" class="w-full">
        </div>

        <div id="head_info" class="grid grid-cols-5">
          <div id="head_qr" class="col-span-2 flex justify-end pr-6">
            <QrcodeVue
              value="https://management.vanstee.be/estimate"
              :size="qr_width"
              class="col-span-1"
              :foreground="config.qr.color"
            />
          </div>

          <div v-for="(detail_head, index) in details_head" id="head_info_details" :key="index">
            <h1 id="mini_title" class="text-head-mini mb-2 text-dark-700">
              {{ detail_head.label }}
            </h1>
            <div v-for="line in detail_head.content" id="inv_details" :key="line" class="text-tagline pr-2 leading-5 text-true-gray-400">
              {{ line }}
            </div>
          </div>
        </div>
      </div>

      <!-- ! TABLE -->
      <div id="table_main" class="relative h-auto w-full pt-12 scrollbar-hide">
        <!-- ! HEADER -->
        <div v-if="show_head" id="inv_table_head" class="text-head-mini grid grid-cols-5">
          <div class="col-span-2 mr-8 flex flex-row justify-end">
            <p>
              Price
            </p>
            <div class="w-8" />
            <p class="ml-4">
              Info
            </p>
          </div>

          <div class="col-span-3">
            Item
          </div>
        </div>

        <!-- ! BODY TABLE -->
        <div v-for="(value, key) in sortedItems" :key="key" class="grid grid-cols-5 pt-8">
          <div id="null" class="col-span-2" />
          <div class="col-span-3">
            <h1 id="cat_title" class="text-xl font-semibold">
              {{ key }}
            </h1>
          </div>

          <div v-for="(subitem_val, subitem_key) in value" :key="subitem_key" class="grid col-span-5 grid-cols-5 pb-8 pt-1">
            <div class="grid col-span-2 grid-cols-2 text-base font-normal text-true-gray-500">
              <div class="col-span-2 w-full flex flex-row justify-end pr-8 space-x-4">
                <p id="item_price_total">
                  € {{ asCurrency(subitem_val.price * subitem_val.quantity) }}
                </p>

                <div
                  v-if="show_infolabels"
                  id="item_more_info"
                  class="grid aspect-square h-6 select-none place-content-center border-1 border-blue-600 rounded-lg p-1 font-bold leading-3 text-blue-600 hover:(cursor-pointer bg-blue-600 text-white)"
                  @click="console.log(subitem_val)"
                >
                  <div i-mdi-information-variant class="" />
                </div>
              </div>
            </div>
            <div class="col-span-3">
              <h2 class="text-tagline">
                <div class="flex flex-row spacex2">
                  <p>{{ subitem_val.about.tagline }}</p>
                  <p class="font-light">
                    {{ subitem_val.quantity > 1 ? ` (${subitem_val.quantity} x €${subitem_val.price})` : '' }}
                  </p>
                </div>
              </h2>
              <p class="pr-8 text-sm font-light text-black">
                {{ subitem_val.about.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- ! TOTALS -->
        <div id="totals_line" class="grid grid-cols-5 w-full">
          <div class="col-span-2">
            <div id="totals_discount" class="text-tagline col-span-2 flex flex-row justify-end pr-8 space-x-4">
              <div id="label" class="x">
                {{ amount_discount_percentaate * 100 }}% Korting
              </div>
              <div id="amount" class="w-32 flex justify-end">
                € {{ asCurrency(amount_discount) }}
              </div>
            </div>

            <div id="totals_sub" class="text-tagline col-span-2 flex flex-row justify-end pr-8 space-x-4">
              <div id="label" class="x">
                Subtot
              </div>
              <div id="amount" class="w-32 flex justify-end">
                € {{ asCurrency(amount_subtot) }}
              </div>
            </div>

            <div id="totals_vat" class="text-tagline col-span-2 flex flex-row justify-end pr-8 space-x-4">
              <div id="label" class="x">
                BTW
              </div>
              <div id="amount" class="w-32 flex justify-end">
                € {{ asCurrency(amount_subtot * amount_vat_percentage) }}
              </div>
            </div>

            <div id="totals_final" class="text-tagline col-span-2 flex flex-row justify-end pr-8 pt-4 text-2xl text-black space-x-4">
              <div id="label" class="x">
                Totaal
              </div>
              <div id="amount" class="w-32 flex justify-end">
                € {{ asCurrency(amount_subtot * (1 + amount_vat_percentage)) }}
              </div>
            </div>
          </div>
          <div class="col-span-3" />
        </div>
      </div>

      <div id="inv_footer" class="grid grid-cols-5 mt-8 h-10 pt-12 text-xs leading-4 text-black -translate-y-1 md:(pb-32 text-sm)">
        <img :src="svg_portal" alt="" srcset="" class="col-span-2 h-full place-self-start justify-start py-0.8">
        <!-- <div id="null" /> -->
        <div id="1" class="w-ful grid place-content-start whitespace-nowrap">
          <div v-for="business_detail in portalBusinessDetails" :key="business_detail">
            {{ business_detail }}
          </div>
        </div>
        <div id="2" class="w-ful grid place-content-start whitespace-nowrap">
          <div v-for="business_detail in portalBankDetails" :key="business_detail">
            {{ business_detail }}
          </div>
        </div>
        <div id="3" class="w-ful grid place-content-start whitespace-nowrap">
          <div v-for="business_detail in portalAccountantDetails" :key="business_detail">
            {{ business_detail }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
