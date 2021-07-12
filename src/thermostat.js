 class Thermostat{
    constructor(){
     this.temperature = 20;
    }
    up(number){
        return this.temperature += number; 
    }
    down(number){
        return this.temperature -= number;
    }

}