Template.comments.helpers({
	rev1 : function() {
		rev1 = Comments.findOne({location:theplace}).val();
		return rev1;
	}
})

Template.comments.events({
	"click .js-destsubmit" : function(event) {
		event.preventDefault();
		console.log("the button was clicked.");
		const theplace = $(".js-destinput").val();
	}
})