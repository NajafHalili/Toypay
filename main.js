const car = {
    name :"BMW" ,
    model : "E60",
    engine: "V10",
    color: "Black",
    horsePower: 1000, // hp
    maxSpeed: 300 , // km per hour
    maxFuel: 90, // lt
    fuelConsumption: 15 ,//Per 100 km 

}

// question is : How many hours it would take for car to burn all fuel on max. speed?
function formula(){
    result = ((car.maxFuel / car.fuelConsumption ) *100)/ car.maxSpeed;
    console.log(car)
    console.log(result+ " " + "Hours car will go on max speed" )
}
formula ()