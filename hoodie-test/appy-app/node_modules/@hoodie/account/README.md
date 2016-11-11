# hoodie-account

> Hoodie Account core module

[![Build Status](https://travis-ci.org/hoodiehq/hoodie-account.svg?branch=master)](https://travis-ci.org/hoodiehq/hoodie-account)
[![Dependency Status](https://david-dm.org/hoodiehq/hoodie-account.svg)](https://david-dm.org/hoodiehq/hoodie-account)
[![devDependency Status](https://david-dm.org/hoodiehq/hoodie-account/dev-status.svg)](https://david-dm.org/hoodiehq/hoodie-account#info=devDependencies)

`hoodie-account` combines [account-client](https://github.com/hoodiehq/hoodie-account-client),
[account-server](https://github.com/hoodiehq/hoodie-account-server) and
exposes a generic account UI.

## Usage

Start the demo server

```
npm start
```

If you want to use the account module as plugin of your [Hapi](http://hapijs.com/)
server, check out [example/index.js](exmaple/index.js) to see how to register
the [account-server](https://github.com/hoodiehq/hoodie-account-server) and how
to bundle and server the [account-client](https://github.com/hoodiehq/hoodie-account-client)

## Testing

Local setup

```
git clone https://github.com/hoodiehq/hoodie-account.git
cd hoodie-account
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
