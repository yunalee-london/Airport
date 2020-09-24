class Plane {
    constructor(destination){
        this.destination = destination
        this.passengers = []
    }
    addPassengers(passenger){
        this.passengers.push(passenger)
    }
}
module.exports = Plane