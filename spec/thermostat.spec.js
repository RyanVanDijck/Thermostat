const Thermostat = require('./src/thermostat.js')

// thermostat starts at 20

describe('temperature tests', function(){
    it('initial test', function(){

        //SETUP
        const thermostat = new Thermostat();

        //EXECUTE and VERIFY
        expect(thermostat.temperature).toEqual(20);
   });
})