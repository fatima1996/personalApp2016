Template.myProfile.helpers({
	
})

Template.myProfile.events({
	"click .js-submit" : function(event){
		const fname = $(".js-firstname").val();
		const lname = $(".js-lastname").val();
		const nname = $(".js-nickname").val();
		const email = $(".js-email").val();
		const by = $(".js-birthyear").val();
		Meteor.call("insertProfile", fname,lname,nname,email,by);
	}
});