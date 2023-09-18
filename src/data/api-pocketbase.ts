import PocketBase from 'pocketbase'

export interface ProductType {
  id: string
  name: string
  order: number
}

export interface ProductItem {
  id: string
  order: number
  product_type: string | ProductType
  name: string
  title: string
  description: string
  available: boolean
  price_default: number
  count_default: number
  count_type: 'piece' | 'hour' | 'bundle' | 'minute' | 'second' | 'year'
  expand: {
    product_type: ProductType
  }
}

// const pb_url = 'https://pocket-management.vanstee.be/'
const pb_url = import.meta.env.VITE_APP_POCKETBASE_URL
const pb_login_email = import.meta.env.VITE_APP_POCKETBASE_LOGIN_EMAIL
const pb_login_password = import.meta.env.VITE_APP_POCKETBASE_LOGIN_PASSWORD
const pb = new PocketBase(pb_url)

await pb.admins.authWithPassword(
  pb_login_email,
  pb_login_password,
)

export {
  pb,
}
