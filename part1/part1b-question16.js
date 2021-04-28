let statistics = {
	redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2,
};
for(let property in statistics){
    var str = `${property}`;
    if(statistics[property] % 2 == 1 || str.charAt[0] == 'r'){
        console.log(statistics[property]);
  }
}
