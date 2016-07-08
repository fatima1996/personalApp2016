Template.settings.helpers({
	 yourgreeting : function() {
	 	return Settings.findOne();
	 },
	 places:function(){
		return Places.find();
	}
});
Template.settings.events({
	"click .js-submit" : function(event){
		event.preventDefault();
		const user = Meteor.userId();
		const greeting = $(".js-greeting").val();
		const setting = {user:user, g: greeting}
		Meteor.call("entersetting", setting);

	},
	"click .js-remove" : function(event) {
		Meteor.call("removeAll");
	},
	"click .js-enter" : function(event){
		const dest = $(".js-d").val();
		const enter = $(".js-de").val();
		const bye = $(".js-dl").val();
		const trip = {location:dest, date_entered:enter, date_leaving:bye};
		console.dir(trip);
		Meteor.call("insertPlace",trip);
	}
})