Template.settings.helpers({
	 yourgreeting : function() {
	 	return Settings.findOne();
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
})