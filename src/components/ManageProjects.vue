<!-- eslint-disable no-console -->
<script setup lang="ts">
import { api, id_collections } from '~/data/api'
import { newObjPlaceholder } from '~/logic/placeholderObj'

// import DisableAutocomplete from '@eric-ds/vue-effective-autocomplete-off'

const projects = ref()

const project_labels: Record<string, { label: string; type: string; updated: boolean; defaultValue?: any; options?: string[]; show?: boolean }> = {
  invoices: { label: 'Facturen', type: 'array', show: false, updated: false },
  name: { label: 'Name', type: 'string', show: true, updated: false },
  addr_street: { label: 'Street Address', type: 'string', show: true, updated: false },
  addr_city: { label: 'City', type: 'string', show: true, updated: false },
  addr_no: { label: 'Address Number', type: 'number', show: true, updated: false },
  addr_postalcode: { label: 'Postal Code', type: 'number', show: true, updated: false },
  size_code: { label: 'Size Code', type: 'number', show: false, updated: false },
  size_project: { label: 'Project Size', type: 'number', show: false, updated: false },
  size_site: { label: 'Site Size', type: 'number', show: false, updated: false },
  size_context: { label: 'Context Size', type: 'number', show: false, updated: false },
  date_start: { label: 'Start Date', type: 'date', show: false, updated: false },
  date_briefing: { label: 'Briefing Date', type: 'date', show: false, updated: false },
  date_briefing_received: { label: 'Briefing Received Date', type: 'date', show: false, updated: false },
  date_deadline: { label: 'Deadline Date', type: 'date', show: false, updated: false },
  deadline_type: { label: 'Deadline Type', type: 'date', show: false, updated: false },
  state: { label: 'State', type: 'string', show: false, updated: false },
  files: { label: 'Files', type: 'array', show: false, updated: false },
  billing_method: { label: 'Billing Method', type: 'string', show: false, updated: false },
  budget: { label: 'Budget', type: 'string', show: false, updated: false },
  budget_notes: { label: 'Budget Notes', type: 'string', show: false, updated: false },
  clients: { label: 'Clients', type: 'array', show: true, updated: false },
  estimates: { label: 'Estimates', type: 'array', show: false, updated: false },
}

const newProject = newObjPlaceholder(project_labels)

api.listDocuments(id_collections.projects).then((res: any) => {
  projects.value = res.documents
  console.log('documents loaded', res.documents)
}).finally(() => {
  console.log('newProject', newProject.value)
})

const allProperties = ref(false)
function filterProject(element: [string, any]): boolean {
  const [key] = element
  return allProperties.value ? true : (!key.startsWith('$') && (project_labels[key].show || false))
}

const showAllLabels = ref(true)

async function addNewProject() {
  const projSubset = Object.fromEntries(Object.entries(newProject.value).filter(([key, _U_value]: [string, any]) => {
    // const [key] = element
    return [
      // 'invoices',
      'name',
      'addr_street',
      'addr_city',
      'addr_no',
      // 'addr_postalcode',
      // 'size_code',
      // 'size_project',
      // 'size_site',
      // 'size_context',
      // 'date_start',
      // 'date_briefing',
      // 'date_briefing_received',
      // 'date_deadline',
      // 'deadline_type',
      // 'state',
      // 'files',
      // 'billing_method',
      // 'budget',
      // 'budget_notes',
      // 'clients',
      // 'estimates',
    ].includes(key)
  }))
  try {
    api.createDocument(id_collections.projects, projSubset)
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="mt-12 portal-gradient-text-header text-center">
    Manage Projects
  </div>
  <div id="create_wrapper" class="w-min">
    <div id="head_edit" class="mb-4 w-full flex flex-row rounded-md bg-gray-700 p-2 align-middle font-bold font-sans uppercase text-white">
      <button class="btn-accent btn">
        new
      </button>
      <h1 class="h-full w-full flex self-center justify-center">
        Create Project
      </h1>
    </div>

    <h1 class="w-full py-4 text-center font-bold uppercase text-true-gray-800">
      Create Project
    </h1>

    <div id="create" class="">
      <div v-for="([key]) in Object.entries(newProject).filter(filterProject)" :key="key" class="">
        <div
          v-if="project_labels[key].type === 'string' || project_labels[key].type === 'number' || showAllLabels"
          class="grid grid-cols-2 w-100 space-y-1"
        >
          <div id="key" class="flex items-center justify-end pr-4">
            {{ project_labels[key].label }}
          </div>
          <div id="key" class="x">
            <input
              v-model="newProject[key]"
              type="text"
              :placeholder="project_labels[key].label"
              class="input h-10 max-w-xs w-full border-1 border-gray-300 bg-white"
              autocomplete="browser-off"
            >
          </div>
        </div>
      </div>
      <div id="buttons" class="mt-2 flex flex-row justify-end space-x-1">
        <button class="btn-neutral btn" type="submit">
          Create
        </button>
        <button class="btn-neutral btn" @click="addNewProject">
          Log
        </button>
      </div>
    </div>
  </div>

  <!-- ! FOOTER -->
  <div class="mt-8 h-[1px] w-full bg-true-gray-900" />
  <h1>List of Projects</h1>
  <div>
    {{ newProject }}
  </div>
</template>

<style scoped>

</style>
