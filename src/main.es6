import {Quote} from './Quote'

let quote = new Quote("TEST")

console.info(`Quote: ${quote.name}`)
quote.setPrice(100)
console.info(`  Close: ${quote.close} Baht`)
console.info(`  Price: ${quote.price} Baht`)
console.info(`  Change: +5 Baht`)
quote.up(5)
console.info(`  Price: ${quote.price} Baht`)
console.info(`  Percent change: ${quote.change().toFixed(2)}%`)
