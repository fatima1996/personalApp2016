Meteor.methods({
	"insertPlace": function(trip) {
		Places.insert(trip);
	},
	"sayhilib": function(){
		console.log("hi!");
	},
	"insertDon": function(donobj){
		Don.insert(donobj);
	},
	"insertChe": function(donobj){
		console.log("hello")
		Che.insert(donobj);
	},
	"removeDon":function(){
		Don.remove({});
	},
	"removeChe": function(id){
		Che.remove({_id:id});
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