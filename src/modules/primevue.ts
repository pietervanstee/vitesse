import PrimeVue from 'primevue/config'
import { type UserModule } from '~/types'

import 'primevue/resources/themes/viva-light/theme.css'

export const install: UserModule = ({ app }) => {
  app.use(PrimeVue)
}
