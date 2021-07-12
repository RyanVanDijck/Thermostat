 class Thermostat{
    constructor(){
     this.temperature = 20;
    }
    up(number){
        return this.temperature += number; 
    }
    down(number){
        return this.temperature - number >= 10 ? this.temperature -= number
        : 'Minimum temperature is 10'; 
    }

}