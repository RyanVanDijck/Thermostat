Object|Properties|Message|Context|Output
---|---|---|---|---
Thermostat|temperature @Number|down()|Result higher than or equal to 10|@Number
||powerSaving @boolean||Result lower than 10|@String 'Minimum temperature is 10'|
|||up()|Result lower or equal to maximum|@Number
||||Result higher than maximum|@String 'Maximum temperature is {maxTemp}
|||turnPowerSavingOn()|Power Saving is off||
||||Power saving is on  
|||turnPowerSavingoff()|Power Saving is on||
||||Power saving is off
|||reset()||return @Number
|||getUsage()|temperature less than 18|return @String 'low-usage'
||||temperature less than or equal to 25|return @String 'medium-usage'
||||otherwise|return @String 'high-usage' 
