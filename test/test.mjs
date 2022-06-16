import { join } from 'path'
import test from 'tape'
import { get } from 'tiny-json-http'
import sandbox from '@architect/sandbox'
const workingDirectory = join(process.cwd(), 'test', 'mock')
const port = 6661
const url = (path, port) => `http://localhost:${port}${path}`

test('Start sandbox', async t => {
  t.plan(1)
  await sandbox.start({
    cwd: workingDirectory,
    port
  })
  t.pass('Sandbox started')
})

test('Get file via fingerprinted url', async t => {
  t.plan(1)
  const fileReq = await get({
    url: url('/', port),
    port
  })
  const filePath = fileReq.body
  t.ok(filePath, `Got fingerprinted url ${filePath}` )
})


test('should look up worker', async t => {
  t.plan(1)
  const fileReq = await get({
    url: url('/', port),
    port
  })
  const filePath = fileReq.body
  t.ok(filePath, `Got fingerprinted url ${filePath}` )
})

test('Shut down Sandbox', async t => {
  t.plan(1)
  await sandbox.end()
  t.pass('Shut down Sandbox')
})