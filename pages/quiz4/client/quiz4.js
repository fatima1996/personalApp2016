Template.quiz4.helpers({
	'listbio' : function(){
		return Bio.find();
	}
})
Template.quiz4.events({
	'click .js-submit' : function(event){
		const name = $(".js-name").val();
		const bio = $(".js-bioreview").val();
		const person = {n:name, b:bio};
		Meteor.call("insertBio",person);
	}
})
