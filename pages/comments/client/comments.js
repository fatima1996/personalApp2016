Template.comments.helpers({
	currentdest: function() {
		return Comments.find({location:"New York"});
	}
})

Template.comments.events({
	"click .js-destsubmit" : function(event) {
		event.preventDefault();
		console.log("the button was clicked.");
		const theplace = $(".js-destinput").val();

	}
})