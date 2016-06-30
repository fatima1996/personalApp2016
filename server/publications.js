Meteor.publish('hello', function() {
	return Prof.find();
});
