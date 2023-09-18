<!-- eslint-disable no-console -->
<script setup lang="ts">
import { api, id_collections } from '~/data/api'

interface MenuItem {
  label: string
  icon: string
  command?: (event: any) => void
  items?: MenuItem[]
}

interface EstimateItem {
  item_original: any
  price: number
  count: number
  name: string
  description?: string
}

const products = ref()
const selectedProduct = ref()
const categories = ref()
const clients = ref()
const items: Ref<MenuItem[]> = ref([])

const estimateItemList: Ref<EstimateItem[]> = ref([])

Promise.all([
  api.listDocuments(id_collections.categories),
  api.listDocuments(id_collections.items),
  api.listDocuments(id_collections.clients),
]).then(([categoriesRes, productsRes, clientsRes]) => {
  console.log('all loaded')

  categories.value = categoriesRes.documents
  products.value = productsRes.documents
  clients.value = clientsRes.documents

  Object.values(categories.value).forEach((val) => {
    items.value.push(
      {
        label: ((val as any).name as string),
        icon: '',
        items: [],
      },
    )
  })

  Object.values(products.value).forEach((val) => {
    Object.values((val as any).categories).forEach((cat: any) => {
      items.value.find((item: any) => item.label === cat.name)?.items?.push({
        label: (val as any).name,
        icon: '',
        command: (event: any) => {
          console.log(event)
          selectedProduct.value = val
          const estimateItem: EstimateItem = {
            item_original: val,
            price: (val as any).price_default,
            count: (val as any).count_default,
            name: (val as any).name,
          }
          estimateItemList.value.push(estimateItem)
        },
      })
    })
  })
})

function removeItem(index: any) {
  estimateItemList.value.splice(index, 1)
  console.log(index)
}

function resetItem(index: number) {
  estimateItemList.value[index].price = (estimateItemList.value[index].item_original as any).price_default
  estimateItemList.value[index].count = (estimateItemList.value[index].item_original as any).count_default
}

const estimateTotal = computed(() => {
  return (estimateItemList.value as any[]).reduce((total: any, item: any) => {
    return total + item.price * item.count
  }, 0)
})
</script>

<template>
  <div class="p-12">
    <!-- ! HEADER -->
    <div class="portal-gradient-text-header pb-12 text-center">
      Estimate editor
    </div>

    <div class="flex flex-col space-y-1">
      <div id="menu" class="flex flex-row space-x-8">
        <!-- ! TIERED MENU -->
        <TieredMenu
          :model="items"
          class="h-min"
        />
        <div id="estimateList" class="font-light font-sans">
          <!-- ! ESTIMATE LIST -->
          <div v-for="(item, index) in estimateItemList" :key="index">
            <div class="estimate-item grid grid-cols-6 h-auto gap-4">
              <div class="estimate-item-name col-span-2 flex translate-y-1 items-center justify-end text-right">
                {{ (item as any).name }}
              </div>
              <div class="estimate-item-count relative col-span-1">
                <p class="absolute h-full flex translate-x-4 select-none items-center opacity-30">
                  €
                </p>
                <input
                  id=""
                  v-model="(item as any).price"
                  type="text"
                  name="item_price"
                  class="input m-0 w-26 pl-8"
                  placeholder="€0"
                >
              </div>
              <div class="estimate-item-count relative col-span-1">
                <p class="absolute right-0 h-full flex select-none items-center uppercase opacity-30 -translate-x-10">
                  st
                </p>
                <input
                  id=""
                  v-model="(item as any).count"
                  type="text"
                  name="count"
                  class="input w-20"
                >
              </div>
              <div class="estimate-item-count relative col-span-1 h-full flex items-center">
                € {{ (item as any).price * (item as any).count }}
              </div>
              <div class="estimate-item-count col-span-1 h-full flex flex-row items-center justify-end py-1 space-x-4">
                <button class="btn-warning bg-white p-2 btn" @click="removeItem(index)">
                  <div i-ph-trash />
                </button>
                <button class="btn-warning bg-white p-2 btn" @click="resetItem(index)">
                  <div i-fluent-arrow-reset-32-filled />
                </button>
              </div>
            </div>
          </div>

          <!-- ! TOTAL -->
          <div class="estimate-item grid grid-cols-6 h-auto gap-4 space-y-2">
            <div class="col-span-2" />
            <div class="col-span-1" />
            <div class="col-span-1" />
            <div class="col-span-1 font-extrabold">
              <div class="w-min whitespace-nowrap border-t pt-2">
                € {{ estimateTotal }}
              </div>
            </div>
            <div class="" />
          </div>

          <!-- ! CONVERT ESTIMATE -->
          <div id="convertEstimate" class="w-full flex justify-end pt-12">
            <button
              class="flex flex-row items-center bg-blue-600 px-3 uppercase btn space-x-2 hover:(bg-blue-800)"
              @click="console.log(estimateItemList)"
            >
              <p>Estimate</p>
              <div i-solar-alt-arrow-right-line-duotone />
            </button>
          </div>
        </div>
      </div>

      <!-- ! ESTIMATE KEYS -->
      <!-- <div class="py-8">
        Price selected product: {{ selectedProduct ? selectedProduct.price_default : '' }}
        <br>
        Price selected product: {{ selectedProduct ? selectedProduct.count_default : '' }}
        <br>
        <li v-for="key in (selectedProduct ? Object.keys(selectedProduct) : [])" :key="key">
          {{ key }}
        </li>
      </div> -->

      <!-- <div id="test" class="pt-12">
        <div v-if="selectedClient">
          <div>{{ `Name: ${selectedClient.name_first} ${selectedClient.name_last}` }}</div>
          <div>{{ `Email: ${selectedClient.email}` }}</div>
          <div>{{ `Phone: ${selectedClient.phone}` }}</div>
        </div>
      </div> -->

      <!-- <div class="dropdown dropdown-hover">
        <label tabindex="0" class="m-1 btn">Clients</label>
        <ul tabindex="0" class="bg-base-100 dropdown-content rounded-box menu z-[1] w-52 p-2 shadow">
          <li
            v-for="client in clients"
            :key="client.id"
            class="h-8 hover:(cursor-pointer font-bold)"
            @click="selectedClient = client"
          >
            {{ client.name_first }}
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<style scoped>

</style>
