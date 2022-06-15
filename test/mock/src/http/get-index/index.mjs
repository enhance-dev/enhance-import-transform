import arc from '@architect/functions'
// what a path
import importTransform from '../../../../../index.mjs'

export async function handler (req) {
  const raw = `import yolo from '/_static/bundles/yolo.mjs'`
  const transform = importTransform({ lookup: arc.static })
  const output = transform({ raw })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: output
  }
}