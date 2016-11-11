# hoodie-store

> Hoodie Store core module

[![Build Status](https://travis-ci.org/hoodiehq/hoodie-store.svg?branch=master)](https://travis-ci.org/hoodiehq/hoodie-store)
[![Dependency Status](https://david-dm.org/hoodiehq/hoodie-store.svg)](https://david-dm.org/hoodiehq/hoodie-store)
[![devDependency Status](https://david-dm.org/hoodiehq/hoodie-store/dev-status.svg)](https://david-dm.org/hoodiehq/hoodie-store#info=devDependencies)

`hoodie-store` combines [store-client](https://github.com/hoodiehq/hoodie-store-client),
[store-server](https://github.com/hoodiehq/hoodie-store-server) and exposes a
generic store UI.

## Usage

Start the demo server

```
npm start
```

If you want to use the store module as plugin of your [Hapi](http://hapijs.com/)
server, check out [example/index.js](exmaple/index.js) to see how to register
the [store-server](https://github.com/hoodiehq/hoodie-store-server) and how
to bundle and server the [store-client](https://github.com/hoodiehq/hoodie-store-client)

## Testing

Local setup

```
git clone https://github.com/hoodiehq/hoodie-store.git
cd hoodie-store
npm install
```

Run end-to-end tests with selenium

```
npm test
```

## Contributing

Have a look at the Hoodie project's [contribution guidelines](https://github.com/hoodiehq/hoodie/blob/master/CONTRIBUTING.md).
If you want to hang out you can join our [Hoodie Community Chat](http://hood.ie/chat/).

## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
