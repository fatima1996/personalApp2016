Meteor.publish('hello', function() {
	if(this.userId) {
		return Places.find({addedBy: this.userId});
	} else {
		this.ready();
	}
});

Meteor.publish("reviews", function() {
	return Reviews.find();
});
Meteor.publish("theSettings", function(){
    if(this.userId){
      return Settings.find();
    }else{
      this.ready();
    }
});
Meteor.publish("settings", function(userId) {
	if(this.userId){
		return Meteor.users.find({_id: userId}, {fields: {profile:1, "services.google.email":1}});
	} else{
		this.ready();
	}
});