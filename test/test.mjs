import test from 'tape'
import importTransform from '../index.mjs'

const map = { '/_bundles/thing.mjs': '/_bundles/thing-454fe88.mjs' }

test('should exist', t => {
  t.ok(importTransform)
  t.end()
})

test('should transform import', t => {
  const raw = `import thing from '/_bundles/thing.mjs'`
  const expected = `import thing from '/_bundles/thing-454fe88.mjs'`
  const transform = importTransform({ map })
  const actual = transform({ raw })
  t.equal(actual, expected, 'Import transformed')
  t.end()
})