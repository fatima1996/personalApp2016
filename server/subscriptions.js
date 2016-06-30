Meteor.publish('hello', function() {
	var currentUserId = this.userId;
	return Places.find(createdBy: currentUserId);
});