Template.comments.helpers({
	'destination' : function() {
		return Rev.find();
	},
	'selectedDest' : function() {
		var selectedDest = Session.get('selectedDest');
		return Rev.findOne({_id: selectedDest});
	}

})

Template.comments.events({
	'click .dest' : function() {
		const loc = this._id;
		Session.set('selectedDest', loc);

	},
	'click .js-post' : function() {
		console.log("ok");
		const rev = $(".js-yourreview").val();
		const city = $(".js-city").val();
		Meteor.call("updateReview", rev, city);
	}

});
