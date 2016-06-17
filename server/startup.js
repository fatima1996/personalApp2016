Meteor.startup(function(){
	if (Places.find().count()==0) {
		Places.insert({location:"New York", date_entered:"12/4/16", date_leaving:"12/10/16", budget:"500"});
		Places.insert({location:"Boston", date_entered:"12/6/16", date_leaving:"12/10/16", budget:"750"});
	}
})
