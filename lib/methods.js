Meteor.methods({
	"insertPlace": function(trip) {
		Places.insert(trip);
	},
	"sayhilib": function(){
		console.log("hi!");
	},
	"removeAll": function(pw){
		if(pw == zz9911) {
			console.log("remove");
			Places.remove();
		}
	}
})