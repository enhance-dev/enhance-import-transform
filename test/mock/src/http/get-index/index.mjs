import arc from '@architect/functions'
// what a path
import importTransform from '../../../../../index.mjs'

export async function handler (req) {
  const raw = `
  import yolo from '/_static/bundles/yolo.mjs'
  const workerURL = '__API_WORKER__'
  `
  const transform = importTransform({
    lookup: arc.static,
    workers: [{ label: '__API_WORKER__', path: '/_static/worker.mjs' }]
  })
  const output = transform({ raw })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: output
  }
}