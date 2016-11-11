var Hapi = require('hapi')
var PouchDB = require('pouchdb')
var memdown = require('memdown')
var inert = require('inert')
var path = require('path')
var EventEmitter = require('events').EventEmitter
var hapiAccount = require('../server')

PouchDB.plugin(require('pouchdb-users'))

var browserify = require('browserify')([], {
  standalone: 'hoodie'
})

browserify.require(path.join(__dirname, 'client.js'))

var bundleEE = new EventEmitter()
var ACCOUNTJS = null

bundleEE.on('done', function (error, buffer) {
  if (error) throw error
  ACCOUNTJS = buffer
})
browserify.bundle(bundleEE.emit.bind(bundleEE, 'done'))

var server = new Hapi.Server({})

var db = new PouchDB('_users', {db: memdown})

db.installUsersBehavior().then(function () {
  server.connection({
    port: 4663
  })

  server.register({
    register: hapiAccount,
    options: {
      usersDb: db,
      secret: 'NOT SO SECRET'
    },
    routes: {
      prefix: '/hoodie/account/api'
    }
  }, function (err) {
    if (err) throw err
  })

  server.route({
    method: 'GET',
    path: '/hoodie/client.js',
    handler: function (request, reply) {
      if (!ACCOUNTJS) {
        return bundleEE.once('done', function (error, buffer) {
          if (!error) reply(buffer).type('application/javascript')
        })
      }
      reply(ACCOUNTJS).type('application/javascript')
    }
  })

  server.register(inert, function (err) {
    if (err) throw err
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file(path.join(__dirname, '..', 'public', 'index.html'))
    }
  })

  server.start(function (err) {
    if (err) throw err
    console.log('Server running at %s', server.info.uri)
  })
})

.catch(function (error) {
  throw error
})
