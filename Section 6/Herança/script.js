class EletronicDispositive {
    constructor(name) {
        this.name = name
        this.connected = false
    }

    toConnected() {
        if(this.connected) {
            console.log(this.name + ' already connected')
            return
        }

        this.connected = true
    }

    off() {
        if(!this.connected) {
            console.log(this.name + 'Already off')
            return
        }

        this.connected = false 
    }
}

class Smartphone extends EletronicDispositive {
    constructor(name, color, model) {
        super(name)

        this.color = color
        this.model = model
    }
}

class Tablet extends EletronicDispositive {
    constructor(name, haveWifi) {
        super(name)

        this.haveWifi = haveWifi 
    }
}

const s1 = new Smartphone('iPhone', "Black", "14 Pro Max")
const s2 = new Tablet('Samsung', "Yes")
s1.toConnected()
console.log(s1)
console.log(s2)