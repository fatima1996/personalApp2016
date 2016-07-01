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
	"entersetting" : function(setting) {
		if(Settings.find({user: Meteor.userId()}).count()==0){
			Settings.insert(setting);
			
		}else{
			console.log("yes!")
			Settings.update({_id:Settings.findOne({user:Meteor.userId()})._id},{$set:setting});
		}
	},
	"removeAll": function(pw){
		if(pw == zz9911) {
			Places.remove();
		}
	},
})