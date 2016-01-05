export class Quote {
  constructor(name = '') {
    this.name = name
    this.price = 0
    this.close = 0
  }

  setPrice(price) {
    this.price = price
    this.close = price
  }

  up(spread) {
    this.price += spread ? spread : this._spread()
  }

  down(spread) {
    this.price -= spread ? spread : this._spread()
  }

  change() {
    return ((this.price - this.close) * 100) / this.close
  }

  _spread() {
    let spread

    if(this.price < 2) {
      spread = 0.01
    }
    else if(this.price >= 2 && this.price < 5) {
      spread = 0.02
    }
    else if(this.price >= 5 && this.price < 10) {
      spread = 0.05
    }
    else if(this.price >= 10 && this.price < 25) {
      spread = 0.10
    }
    else if(this.price >= 25 && this.price < 100) {
      spread = 0.25
    }
    else if(this.price >= 100 && this.price < 200) {
      spread = 0.50
    }
    else if(this.price >= 200 && this.price < 400) {
      spread = 1
    }
    else if(this.price >= 400){
      spread = 2
    }
    else {
      spread = 0
    }

    return spread
  }
}
