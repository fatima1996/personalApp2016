Meteor.methods({
	"insertPlace": function(trip) {
		Places.insert(trip);
	},
	"sayhilib": function(){
		console.log("hi!");
	},
	"updateReview": function(rev, city) {
		Rev.update({location : city }, {$set : {two : rev}});
	},
	"entersetting" : function(setting) {
		if(Settings.find({user: Meteor.userId()}).count()==0){
			Settings.insert(setting);
			
		}else{
			console.log("yes!")
			Settings.update({_id:Settings.findOne({user:Meteor.userId()})._id},{$set:setting});
		}
	},
	"removeAll": function(){
		Places.remove({});
	},

})