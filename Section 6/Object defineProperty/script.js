function Product( name, price, stock) {
    this.name = name
    this.price = price
    this.stock = stock

    Object.defineProperty(this, "stock", {
        enumerable: true, // show Key
        value: stock,
        writable:true, // change value
        configurable:false // reconfigurar
    })
}

const p1 = new Product('Camiseta', 20, 3)
p1.stock = 50000
console.log(p1)