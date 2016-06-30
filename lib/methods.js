Meteor.methods({
	"insertPlace": function(trip) {
		Places.insert(trip);
	},
	"sayhilib": function(){
		console.log("hi!");
	},
	"updateReview": function(rev, city) {
		Reviews.update({location : city }, {$set : {"two" : rev}});
	},
	"removeAll": function(pw){
		if(pw == zz9911) {
			Places.remove();
		}
	},
})