/* eslint-disable no-console */
import type { Models } from 'appwrite'
import { Account, Client, Databases, Permission, Query, Role } from 'appwrite'
import { Server } from './appwrite-config'

const credentails = {
  email: import.meta.env.VITE_APP_U,
  password: import.meta.env.VITE_APP_P,
}

const id_databases = {
  items: '64fb25af4b283bddfb96',
}

const id_collections = {
  items: '64fb25af4b283bddfb96',
  categories: '64fb28bf827ec63dda38',
  clients: '64fb259388cc897a9831',
  projects: '64fb25b61f2eb5919a85',
  estimates: '64fb25a49c63848a90c0',
  invoices: '64fb25aa8de31a9bf0e0',
  packages: '64fb25b2f01f57062d00',
  team: '64fb25b8a9c3d63399bd',
  expenses: '64fb25ca5f3b366c94f1',
  payments: '64fb25cde07bef13b734',
  times: '64fb25d53f9987a982e6',
  tasks: '64fb25d824fb34afc90c',
}

interface Sdk {
  database: Databases
  account: Account
}

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

  createAccount: (email: string, password: string, name: string) => {
    return api.provider().account.create('unique()', email, password, name)
  },

  getAccount: () => {
    const account = api.provider().account
    return account.get()
  },

  createSession: (email: string, password: string) => {
    return api.provider().account.createEmailSession(email, password)
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession('current')
  },

  createDocument: (collectionId: string, data: any, userId?: string) => {
    const permissions = userId
      ? [
          Permission.read(Role.user(userId)),
          Permission.update(Role.user(userId)),
          Permission.delete(Role.user(userId)),
        ]
      : []
    return api
      .provider()
      .database.createDocument(
        Server.database,
        collectionId,
        'unique()',
        data,
        permissions,
      )
  },

  listDocuments: (collectionId: string) => {
    return api.provider().database.listDocuments(
      Server.database,
      collectionId,
    )
  },

  listDocumentsLimit: (collectionId: string, searchObject: any) => {
    return api.provider().database.listDocuments(
      Server.database,
      collectionId,
      [
        // Query.limit(limit),
        Query.select(['clients', searchObject]),
      ],

    )
  },

  // ! Not yet possible in Appwrite
  // listCollections: (database_id: string) => {
  //   return api.provider().database.client.call()
  // },

  updateDocument: (collectionId: string, documentId: string, data: any) => {
    return api
      .provider()
      .database.updateDocument(Server.database, collectionId, documentId, data)
  },

  deleteDocument: (collectionId: string, documentId: string) => {
    return api.provider().database.deleteDocument(Server.database, collectionId, documentId)
  },
}

async function checkSession() {
  console.log('checking session')
  try {
    await api.getAccount().then((response: any) => {
      console.log('session loaded succesfully', response)
      return 'success'
    })
  }
  catch (error) {
    console.log('no active session, logging in')
    await api.createSession(
      credentails.email,
      credentails.password,
    ).then(() => {
      console.log('session created succesfully, logged in')
    })
  }
}

async function getCollectionDocuments(collectionID: string) {
  return await api.listDocuments(collectionID).then((response: Models.DocumentList<Models.Document>) => {
    console.log('documents loaded succesfully', response.documents)
    return response.documents
  })
}

export {
  api,
  checkSession,
  getCollectionDocuments,
  id_collections,
  id_databases,
}
