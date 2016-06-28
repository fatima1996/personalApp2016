Template.place.helpers({
	places:function(){
		return Places.find();
	}
})

Template.place.events({
	"click .js-addtrip" : function(event) {
		console.log("Confirmed!");
		//read in the values and store them in variables
		const dest = $(".js-dest").val();
		const enter = $(".js-enter").val();
		const bye = $(".js-bye").val();
		const low = $(".js-low").val();
		const med = $(".js-med").val();
		const high = $(".js-high").val();
		const trip =
		{location:dest, date_entered:enter, date_leaving:bye, budget:[low, med, high]};
		console.dir(trip);
		//Places.insert(trip);
		Meteor.call("insertPlace",trip)
	},
	"click .js-removetrip" : function(event) {
		Meteor.call("removeTrip",this._id);
	},
	"click .js-removeAll" : function(event) {
		const pw = $(".js-password").val();
		Meteor.call("removeAll", pw)
	},
	
})
