// thermostat starts at 20

describe('temperature tests', function(){
    it('initial test', function(){
        //SETUP
        const thermostat = new Thermostat();
        
        //EXECUTE and VERIFY
        expect(thermostat.temperature).toEqual(20);
    });
    it('up function', () => {
        //SETUP
        const thermostat = new Thermostat(); 

        //EXECUTE and VERIFY
        expect(thermostat.up(2)).toEqual(22); 
    }); 
    it('down function', () =>{
        //SETUP
        const thermostat = new Thermostat();

        //EXECUTE and VERIFY
        expect(thermostat.down(10)).toEqual(10);
    })
    it('minimum temp', () => {
        const thermostat = new Thermostat();
        expect(thermostat.down(12)).toEqual('Minimum temperature is 10'); 
    });

    it('reset', () => {
        const thermostat = new Thermostat();
        thermostat.down(3); 
        thermostat.reset(); 
        expect(thermostat.temperature).toEqual(20);
    })
  
})
describe ('power saving', function(){
    it('power saving on' , function(){

        //SETUP
        const thermostat = new Thermostat();

        //EXECUTE AND VERIFY
        expect(thermostat.up(7)).toEqual('Maximum temperature is 25')
    })

    it('power saving off' , function(){

        //SETUP
        const thermostat = new Thermostat();
        thermostat.turnPowerSavingOff(); 

        //EXECUTE AND VERIFY
        expect(thermostat.up(100)).toEqual('Maximum temperature is 32')
    })

    it('turn power saving off', () => {
        const thermostat = new Thermostat();
        thermostat.turnPowerSavingOff(); 

        expect(thermostat.powerSaving).toEqual(false); 
    })




})