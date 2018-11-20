const test = require('ava')
const fs = require('fs')

const parse = require('./parse')

test('parses externals', t => {
  const pkgmeta = fs.readFileSync('./pkgmeta.yaml')

  const parsed = parse(pkgmeta)

  t.deepEqual(parsed.externals['libs/LibStub'], {
    path: 'libs/LibStub',
    tag: 'latest',
    url: 'svn://svn.wowace.com/wow/libstub/mainline/trunk',
  })
})
