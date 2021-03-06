const { EventEmitter } = require('events')

const { makeId, makeNode, flatten } = require('./utils')

class Transformer extends EventEmitter {
    makeId(...args) {
        return makeId(...args)
    }

    makeNode(...args) {
        return makeNode(...args)
    }

    flatten(...args) {
        return flatten(...args)
    }

    info(...args) {
        this.emit('info', ...args)
    }

    warn(...args) {
        this.emit('warn', ...args)
    }

    error(...args) {
        this.emit('error', ...args)
    }

    async handle() {}

    async run(items, options) {
        const results = await Promise.all(items.map(async(item) => {
            return this.handle(item, options)
        }))

        return this.flatten(results, 2)
    }
}

module.exports = { Transformer }
