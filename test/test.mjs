import test from 'tape'
import importTransform from '../index.mjs'

test('should exist', t => {
  t.ok(importTransform)
  t.end()
})

test('should transform import', t => {
  const raw = `import thing from '/_bundles/thing.mjs'`
  const expected = `import thing from '/_bundles/thing-454fe88.mjs'`
  const actual = importTransform({ raw })
  t.equal(actual, expected, 'Import transformed')
  t.end()
})