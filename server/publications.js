Meteor.publish('hello', function() {
	var currentUserId = this.userId;
	return Places.find({createdBy: currentUserId});
});
Meteor.publish("reviews", function() {
	return Reviews.find();
});
//Meteor.publish('userData', function () { 
	//return Meteor.users.find({{_id: this.userId}}, {fields: {createdAt: 1}}); 
//}); 