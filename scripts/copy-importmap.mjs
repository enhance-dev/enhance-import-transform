#! /usr/bin/env node
import fs from 'fs-extra'
const copySync = fs.copySync
const removeSync = fs.removeSync

async function setup() {
  try {
    await removeSync('./node_modules/@architect/importmap.mjs')
    copySync(
      './test/fixtures/node_modules/@architect',
      './node_modules/@architect'
    )
  }
  catch(error) {
    console.error(error)
  }
}

setup()