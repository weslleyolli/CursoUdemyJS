function Product( name, price, stock) {
    this.name = name
    this.price = price
    this.stock = stock
    
    let privateStock = stock

    Object.defineProperty(this, "stock", {
        enumerable: true, // show Key
        configurable:true, // reconfigurar
        get : function() {
            return privateStock
        },
        set: function(value) {
            if (typeof value !== 'number') {
                throw new TypeError('Mensagem')
            }
            privateStock = value
        }
    })
}

const p1 = new Product('Camiseta', 20, 3)
p1.stock = 50000
console.log(p1)
console.log(p1.stock)