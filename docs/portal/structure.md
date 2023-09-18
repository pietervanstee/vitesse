# Name here

## Features

- Invoice overview
  - ...
- Estimates overview
  - ...
  - state
  - viewed
  - amount_total
  - client
  - quick notes
  - signed_state
- Estimate
  - id # computed on creation @db:save
  - state (viewed/signed/accepted/declined/...)
  - viewed
  - changes - git?
  - quick_notes (management)
  - signed_state
  - signed_file - upload, not changeable by client
  - content
    - client details §
      - >name
      - >address
      - >email
      - >phone
      - >vat
      - >id
    - >items § + reset-option
      - >cat *
      - >name
      - >description
      - >price
      - >info @modal
      - >qty + changeable
      - >total § computed > stored in appwrite as a field
    - options
      - ...
      - only in combination with / as an extension to item x
      - linked to
      - pricing options
    - qr code § computed
    - signature / signed + upload from client
    - notes_client + changeable
    - >terms
    - #footer
      - #portal logo
      - #BV Details > link
        - #name
        - #address
        - #email
        - #phone
        - #vat
      - #Bank details
        - #name
        - #account
        - #...
    - #header estimate
    - >valid_duration + selectable (1w/2w/1m) (countdown timer / progress bar)
    - date_sent + update on sent
    - valid_until # computed on change & updated in appwrite @when?:save
  - CRUD
    - add
    - remove
    - update
    - list

- Invoices
- Items
  - add
  - remove
  - updade
  - list
- Info (each item can have info)
  - .
- Estimate

Estimate items

[
  0: {
    item_original: $item_id,
    changes: {
      qty: 15,

    }
  }
]

## Item order

### Defined by

- categories [1] > order designer
- items [2] > order designer

Next index on newly created items # computed
