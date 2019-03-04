var worldMap, focus_plus_context, points;

d3.csv("./Database/real_estate_db.csv", function(data) {
  return {
   	latitude: +data.lat,
   	longitude: +data.lng,
   	state: data.state,
   	city: data.city,
   	pop: +data.pop,
   	male_pop: +data.male_pop,
   	female_pop: +data.female_pop,
   	dept: +data.dept,
   	hs_degree: +data.hs_degree,
	hs_degree_male: +data.hs_degree_male,
	hs_degree_female: +data.hs_degree_female,
	rent_mean: +data.rent_mean,
	hc_mortgage_mean: +data.hc_mortgage_mean,
	hc_mortgage_stdev: +data.hc_mortgage_stdev,
	hi_mean: +data.hi_mean,
	hi_samples: +data.hi_samples,
	hi_stdev: +data.hi_stdev,
  };	
}).then(function(data){
    //points = new Points();
    
  
    
    worldMap = new worldMap(data);
    //focus_plus_context = new focusPlusContext(data);
    
}); 




/*
d3.csv("./Database/complete.csv", function(data) {
  return {
    datetime: data.datetime,
   	city: data.city,
   	country: data.country,
    state: data.state,
   	shape: data.shape,
   	duration: +data.durationSeconds,
   	comments: data.comments,
   	latitude: +data.latitude,
   	longitude: +data.longitude
  };	
}).then(function(data){
    //points = new Points();
    
  /*
    for(var i = 0; i < data.length; i++)
    {
    	//if(!Number.isInteger(data[i].longitude))
    	//	console.log("not int");
    	if(!Number.isInteger(data[i].latitude))
    		console.log("nope not int");
    	else
    		console.log(i)
    }
    console.log(data.length)
    
    worldMap = new worldMap(data);
    //focus_plus_context = new focusPlusContext(data);
    
}); 
*/

/*
var worldMap, focus_plus_context, points;

d3.csv("./Database/earthquake.csv", function(data) {
  return {
   latitude: +data.lat,
   longitude: +data.long,
  };
  }).then(function(data){
  //console.log(data[1].latitude);
  //points = new Points();

  worldMap = new worldMap(data);
    //focus_plus_context = new focusPlusContext(data);

});
*/