Meteor.publish('hello', function() {
	if(this.userId) {
		return Places.find({addedBy: this.userId});
	} else {
		this.ready();
	}
})

Meteor.publish("reviews", function() {
	return Reviews.find();
});
Meteor.publish('settings', function () { 
	return Settings.find({_id: this.userId}, {fields: {profile: 1, username: 1}});
});
//Meteor.publish('userData', function () { 
	//return Meteor.users.find({{_id: this.userId}}, {fields: {createdAt: 1}}); 
//}); 