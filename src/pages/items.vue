<!-- eslint-disable no-console -->
<script setup lang="ts">
import { api, id_collections } from '~/data/api'

const products = ref()

api.listDocuments(id_collections.items).then((res: any) => {
  products.value = res.documents
  // console.log('documents loaded', res)
})

const selectedProduct = ref()
const updateProduct = ref()
watch(updateProduct, () => {
  setTimeout(() => {
    updateProduct.value = null
  }, 1500)
})
</script>

<template>
  <div class="h-full w-full bg-white p-12">
    <!-- ! DEBUG -->
    <div class="absolute left-0 top-0 p-4 text-black">
      <div v-show="selectedProduct">
        {{ selectedProduct ? `${selectedProduct.name} : ${selectedProduct.available}` : '' }}
      </div>
      <div :class="updateProduct !== null ? 'text-red-600' : ''">
        Product to update : {{ updateProduct }}
      </div>
    </div>

    <!-- ! HEADER -->
    <div class="portal-gradient-text-header text-center">
      Product Items
    </div>

    <!-- ! TABLE -->
    <div class="h-full overflow-x-hidden overflow-y-scroll py-12 scrollbar-hide">
      <DataTable
        v-model="selectedProduct"
        selection-mode="single"
        data-key="$id"
        :value="products"
        table-style="min-width: 50rem"
        class="hover:(cursor-pointer bg-gray-400)"
        @row-select="selectedProduct = $event.data"
      >
        <Column field="categories" header="CATEGORY">
          <template #body="{ data }">
            <Tag v-for="cat in data.categories.map((cat: any) => cat.name)" :key="cat" :value="cat" class="m-0.5 flex flex-row" />
          </template>
        </Column>

        <Column field="name" header="NAME" />
        <Column field="description" header="DESCRIPTION" />
        <Column field="available" header="AVAILABLE">
          <template #body="{ data }">
            <InputSwitch
              v-model="data.available"
              @update:model-value="updateProduct = $event"
            />
          </template>
        </Column>
        <Column field="price_default" header="PRICE" class="w-24">
          <template #body="{ data }">
            <div class="grid w-full">
              <Tag :key="data" :value="data.price_default.toLocaleString('en-BE', { minimumFractionDigits: 2 })" class="m-0.5 aspect-square h-7 bg-true-gray-200 text-true-gray-800" />
            </div>
          </template>
        </Column>
        <Column field="count_default" header="QTY">
          <template #body="{ data }">
            <div class="grid w-full place-content-start">
              <Tag :key="data" :value="data.count_default" class="m-0.5 aspect-square h-7 flex flex-row bg-true-gray-200 text-true-gray-800" />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: home
</route>
