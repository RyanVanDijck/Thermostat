// thermostat starts at 20

describe('temperature tests', function(){
    it('initial test', function(){
        //SETUP
        const thermostat = new Thermostat();
        
        //EXECUTE and VERIFY
        expect(thermostat.temperature).toEqual(20);
    });
    it('add function', () => {
        //SETUP
        const thermostat = new Thermostat(); 

        //EXECUTE and VERIFY
        expect(thermostat.add(2)).toEqual(22); 
    }); 
})