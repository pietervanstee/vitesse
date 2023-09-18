import { acceptHMRUpdate, defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const settings = ref({
  })

  return {
    settings,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMainStore as any, import.meta.hot))
