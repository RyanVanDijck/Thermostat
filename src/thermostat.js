 class Thermostat{
    constructor(){
     this.temperature = 20;
     this.powerSaving = true;

    }
    up(number){
        if(number + this.temperature <= this.getMaximumTemperature()){
            return number + this.temperature
        }
        else{
            return 'Maximum temperature is ' +this.getMaximumTemperature()
        }
    }
    down(number){
        return this.temperature - number >= 10 ? this.temperature -= number
        : 'Minimum temperature is 10'; 
    }
    getMaximumTemperature(){
        return this.powerSaving ? 25: 32
    }

}