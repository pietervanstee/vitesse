<!-- eslint-disable no-console -->
<script setup lang="ts">
import { api, id_collections } from '~/data/api'

const table_labels: Record<string, string> = {
  name_first: 'Voornaam',
  name_last: 'Achternaam',
  company: 'Bedrijf',
  email: 'Email',
  website: 'Website',
  phone: 'Telefoon',
  address: 'Adres',
  postalcode: 'Postcode',
  city: 'Stad',
  country: 'Land',
  vat: 'BTW',
  projects: 'Projecten',
  estimates: 'Offertes',
  invoices: 'Facturen',
  notes: 'Notities',
  active: 'Actief',
  discount: 'Korting %',
}

const clients = ref()
const estimates = ref()
const clientSelected = ref()
api.listDocuments(id_collections.clients).then((res: any) => {
  clients.value = res.documents
  console.log('documents loaded', res.documents)
})

// function getEstimates() {
//   api.listDocuments(id_collections.estimates).then((res: any) => {
//     estimates.value = res.documents
//   })
// }

function filterClients(element: [string, unknown]): boolean {
  const [key] = element
  return !key.startsWith('$')
}

const DropdownOptions = ref([
  { name: 'Project 1', code: 'NY' },
  { name: 'Pelt', code: 'RM' },
  { name: 'Neerbeek', code: 'LDN' },
  { name: 'Villa Z', code: 'IST' },
  { name: 'Project 5', code: 'PRS' },
])

function clientUpdate() {
  console.log('client update called')
}
</script>

<template>
  <div class="h-full w-full overflow-hidden bg-white p-12">
    <div id="debug" class="absolute left-0 top-0 p-4">
      {{ estimates }}
    </div>
    <div class="portal-gradient-text-header text-center">
      Clients
    </div>

    <!-- ! TABLE -->
    <DataTable
      v-model="clientSelected"
      selection-mode="single"
      data-key="$id"
      :value="clients"
      table-style="min-width: 50rem"
      class="my-12 hover:(cursor-pointer bg-gray-400)"
      @row-select="clientSelected = $event.data"
    >
      <Column field="company" header="Company" class="" />
      <Column field="name_first" header="Voornaam" class="" />
      <Column field="name_last" header="Achternaam" class="" />
      <Column field="estimates" header="Estimates" style="min-width: 12rem">
        <template #body="{ data }">
          <button class="btn-info btn" @click="estimates = data.estimates">
            {{ data.estimates.length }}
          </button>
        </template>
      </Column>
    </DataTable>

    <!-- ! SELECTED -->
    <div
      v-if="clientSelected"
      class="w-min overflow-x-hidden overflow-y-scroll scrollbar-hide"
    >
      <div id="head_edit" class="mb-4 w-full flex flex-row rounded-md bg-gray-700 p-2 align-middle font-bold font-sans uppercase text-white">
        <button class="btn-accent btn" @click="clientSelected = null">
          new
        </button>
        <h1 class="h-full w-full flex self-center justify-center">
          Update client
        </h1>
        <button class="btn-accent w-8 px-1 btn" @click="clientUpdate()">
          <div i-ion-md-save class="text-xl" />
        </button>
      </div>
      <div v-for="([key, value]) in Object.entries(clientSelected).filter(filterClients)" :key="key" class="grid grid-cols-2 w-100 space-y-1">
        <div id="key" class="h-full flex items-center justify-end pr-4">
          {{ table_labels[key] }}
        </div>
        <div id="key" class="x">
          <input
            v-if="typeof value === 'string' || typeof value === 'number'"
            v-model="clientSelected[key]"
            type="text"
            :placeholder="(value as any).toString()"
            class="input h-10 max-w-xs w-full border-1 border-gray-300 bg-white"
          >
          <input
            v-if="typeof value === 'boolean'"
            type="checkbox"
            :placeholder="(value as boolean).toString()"
            :value="value"
            class="toggle"
            :checked="value"
          >
          <Dropdown
            v-if="typeof value === 'object'"
            v-model="clientSelected[key]"
            :options="DropdownOptions"
            option-label="name"
            placeholder="Select here"
            class="w-full"
          />
        </div>
      </div>

      <div id="buttons" class="w-full flex flex-row justify-end pt-4 space-x-1">
        <button
          class="btn-ghost border-1 border-gray-300 bg-green-100 text-gray-700 btn"
          @click="console.log('click: Save')"
        >
          Save
        </button>
        <button
          class="btn-ghost border-1 border-gray-300 bg-green-100 text-gray-700 btn"
          @click="console.log(clientSelected)"
        >
          Submit
        </button>
        <button
          class="btn-ghost border-1 border-gray-300 bg-gray-100 text-gray-700 btn"
          @click="console.log('click: Cancel')"
        >
          Cancel
        </button>
        <button
          class="btn-ghost border-1 border-gray-300 bg-red-100 text-gray-700 btn"
          @click="clientSelected = null"
        >
          Delete
        </button>
      </div>
    </div>

    <!-- ! TABLE -->
    <div v-else id="create_new" class="x">
      <div id="head_edit" class="mb-4 w-[400px] flex flex-row rounded-md bg-gray-700 p-2 align-middle font-bold font-sans uppercase text-white">
        <h1 class="h-full w-full flex self-center justify-center">
          New client
        </h1>
        <button class="btn-accent w-8 px-1 btn" @click="clientSelected = null">
          <div i-material-symbols-close class="text-xl" />
        </button>
      </div>
      <!-- <div id="test" class="">
        {{ clientSelected }}
      </div> -->
    </div>

    <ManageProjects />

    <!-- ? LIST CLIENTS -->
    <!-- ? UPDATE CLIENTS -->
    <!-- ? CREATE CLIENTS -->
    <!-- ? DELETE CLIENTS -->
  </div>
</template>

<style scoped>

</style>
