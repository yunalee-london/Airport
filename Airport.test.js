const { TestScheduler } = require('jest')
const Bag = require('./Bag')
const Passenger = require('./Passenger')
const Airport = require('./Airport')
const Plane = require('./Plane')

describe('Airport', function(){
    test('has an airport name', () => {
        const airport = new Airport("London Heathrow airport")
        expect(airport.name).toEqual("London Heathrow airport")
    })
    test ('has a plane', () => {
        const plane = new Plane("London")
        expect(plane.destination).toEqual("London")

    })
})