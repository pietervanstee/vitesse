<!-- eslint-disable no-console -->
<script setup lang="ts">
import type { ProductItem, ProductType } from '~/data/api-pocketbase'
import { pb } from '~/data/api-pocketbase'

const product_types = ref<ProductType[]>([])
const product_items = ref<ProductItem[]>([])

const productTypeActive = ref<ProductType>()
const productsSelected = ref<productSelected[]>([])
const productItemActive = ref<productSelected>()

interface productSelected {
  product: ProductItem
  price: number
  count: number
  description_local: string
}

pb.collection('product_types').getList<ProductType>().then((res) => {
  product_types.value = res.items
})

pb.collection('product_items').getList<ProductItem>(
  undefined,
  undefined,
  {
    expand: 'product_type',
    // filter: 'product_type = "y8t0xl4737gh9nk"',
  },
).then((res) => {
  product_items.value = res.items
  console.log(res.items)
})

function addProduct(product: ProductItem) {
  productsSelected.value.push({
    product,
    price: product.price_default,
    count: product.count_default,
    description_local: '',
  })

  sortSelectedProducts()
}

function removeProduct(index: number) {
  productsSelected.value.splice(index, 1)
}

function resetProduct(index: number) {
  productsSelected.value[index].price = productsSelected.value[index].product.price_default
  productsSelected.value[index].count = productsSelected.value[index].product.count_default
}

function sortSelectedProducts() {
  productsSelected.value.sort((a, b) => {
    const aType = a.product.expand.product_type.order
    const bType = b.product.expand.product_type.order
    const aOrder = a.product.order
    const bOrder = b.product.order

    if (aType < bType)
      return -1
    if (aType > bType)
      return 1
    if (aOrder < bOrder)
      return -1
    if (aOrder > bOrder)
      return 1
    return 0
  })
}
</script>

<template>
  <div class="h-full p-12">
    <!-- ! HEADER -->
    <div class="portal-gradient-text-header pb-12 text-center">
      Pocketbase test
    </div>

    <div id="selectorwrapper" class="flex flex-row">
      <div class="dropdown dropdown-hover w-40 pr-75">
        <label tabindex="0" class="m-1 btn">
          Click
        </label>
        <ul tabindex="0" class="bg-base-100 dropdown-content rounded-box menu w-32 p-2 shadow">
          <div
            v-for="item in product_types"
            :key="item.id"
            class="h-8 flex items-center rounded-lg pl-2 hover:(cursor-pointer bg-white text-black)"
            @click="productTypeActive = item"
          >
            {{ item.name }}
          </div>
        </ul>
      </div>

      <div
        v-if="productTypeActive"
        class="align-center flex flex-col text-black space-y-1"
      >
        <div
          id="catSelected"
          class="align-center h-8 flex flex-row items-center justify-center rounded-md bg-light-400 px-3 uppercase"
        >
          {{ productTypeActive ? productTypeActive.name : 'No active cat' }}
        </div>
        <div
          v-for="item in product_items.filter((x: ProductItem) => x.product_type === (productTypeActive as ProductType).id)"
          :key="item.id"
          class="align-center h-8 flex flex-row items-center rounded-md bg-gray-400 px-3 hover:(cursor-pointer bg-white text-black) space-x-2 space-y-1"
          @click="addProduct(item)"
        >
          <div i-bi-plus-circle />
          <div class="h-full flex items-center whitespace-nowrap uppercase !my-0">
            {{ item.name }}
          </div>
        </div>
      </div>

      <div id="pickedProducts" class="w-full px-8">
        <div v-for="(item, index) in productsSelected" :key="index" class="grid grid-cols-7 w-full space-y-2">
          <div class="col-span-3 w-full flex flex flex-col justify-start text-left">
            <div id="title">
              {{ item.product.title ? item.product.title : item.product.name }}
            </div>
            <div id="description_local" class="">
              <input v-model="item.description_local" class="input h-24 w-64 items-start" type="text">
            </div>
          </div>
          <div class="col-span-1 flex items-center">
            <div id="sfx" class="translate-x-3 opacity-50">
              €
            </div>
            <input v-model="item.price" class="input w-24" type="text">
            <!-- € {{ item.price }} -->
          </div>
          <div class="col-span-1 flex items-center">
            <input v-model="item.count" class="input w-14" type="text">
            <div id="sfx" class="uppercase opacity-50">
              {{ item.product.count_type[0] }}
            </div>
          </div>
          <div class="col-span-1 flex items-center justify-start space-x-2">
            <div class="aspect-square w-min rounded-full bg-red-600 p-2 text-black hover:(cursor-pointer bg-white)" @click="resetProduct(index)">
              <div i-radix-icons-reset />
            </div>
            <div class="aspect-square w-min rounded-full bg-red-600 p-2 text-black hover:(cursor-pointer bg-white)" @click="removeProduct(index)">
              <div i-solar-trash-bin-2-linear />
            </div>
            <div class="aspect-square w-min rounded-full bg-blue-600 p-2 text-black hover:(cursor-pointer bg-white)" @click="productItemActive = item">
              <div i-clarity-help-info-line />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-12">
      <div class="my-8 w-min whitespace-nowrap rounded-md bg-white p-2 text-black">
        {{ productItemActive?.product.expand.product_type.name }} > {{ productItemActive?.product.name }}
      </div>

      <div
        v-for="(item, key) in productsSelected[0]"
        :key="key"
        class="grid grid-cols-2 w-1/2"
      >
        <div class="x">
          {{ key }}
        </div>
        <div class="x">
          <div v-if="(typeof item === 'object')" id="obj" class="">
            <div v-for="(prod_item, prod_key) in item" :key="prod_key" class="grid grid-cols-2 w-auto">
              <div class="col-span-1">
                {{ prod_key }}
              </div>
              <div class="col-span-1">
                {{ prod_item }}
              </div>
            </div>
          </div>
          <div v-else id="str" class="">
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <div id="spacer" class="h-24" />
  </div>
</template>

<style scoped>

</style>
