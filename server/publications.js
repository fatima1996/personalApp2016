

Meteor.publish("reviews", function() {
	return Rev.find();
});
Meteor.publish("places", function() {
  return Places.find();
});
Meteor.publish("bio", function() {
  return Bio.find();
});
Meteor.publish("thePl", function() {
  return Pl.find();
});
Meteor.publish("theSettings", function(){
    if(this.userId){
      return Settings.find();
    }else{
      this.ready();
    }
});
Meteor.publish("planTrip", function(){
    if(this.userId){
      return Places.find();
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
