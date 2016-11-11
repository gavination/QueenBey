var Store = require('../client')
var humbleLocalStorage = require('humble-localstorage')
var randomString = require('random-string')

var storeId = humbleLocalStorage.getItem('_storeId')
if (!storeId) {
  storeId = 'store-' + randomString({length: 7}).toLowerCase()
  humbleLocalStorage.setItem('_storeId', storeId)
}

var hoodie = {
  store: Store.defaults({remoteBaseUrl: '/hoodie/store/api'})('mydb')
}

module.exports = hoodie
