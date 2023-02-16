class RemoteControl {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    increaseVolume() {
        this.volume += 2
    }

    decreaseVolume() {
        this.volume -= 2 
    }

    //static method
    static changeBattery() {
        console.log('Ok I will change the battery')
    }
}

const control = new RemoteControl('Samsung')
control.increaseVolume()
control.increaseVolume()

console.log(control)