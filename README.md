# enhance-import-transform
Transform that rerwrites import paths

## Install
`npm i @enhance/import-transform`

## Usage
```js
import arc from '@architect/functions'
import enhance from '@enhance/ssr'
import { importTransform } from '@enhance/import-transform'

const html = enhance({
  scriptTransforms: [
    importTransform({
      lookup: arc.static,
      workers: [{ label: '__API_WORKER__', path: '/_static/worker.mjs' }]
    })
  ]
})

const myDoc = html`<my-app></my-app>`
```