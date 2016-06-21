Meteor.startup(function(){
	if (Places.find().count()==0) {
		Places.insert({location:"New York", date_entered:"12/4/16", date_leaving:"12/10/16", budget:"500"});
		Places.insert({location:"Boston", date_entered:"12/6/16", date_leaving:"12/10/16", budget:"750"});
	}
	if (Comments.find().count()==0) {
		Comments.insert({location:"New York", review1: "Someone suggested that the best way to see the Statue of Liberty was to take the Ferry. Good Call! We had a lovely time and got a great view of her. She seemed smaller in person. But still very majestic. The ferry ride was smooth and we got right back on to go back in Mahattan.", review2:"The American Museum of Natural History was the bomb! I adored touring this museum, which I guess is the one featured in the movie, Night at the Museum. This is my kind of museum."})
		Comments.insert({location:"Miami", review1: "I visit Key Biscayne, and would drive all the way down and have lunch or dinner at Boaters Grill which is right on the water and you can see the boats coming in and out.", review2:"There's one beach in south Florida that's different from all the other beaches. There's almost no thievery. People are friendly,and will almost always respect your space. Women are rarely hassled. Loud radios are almost unknown. There's almost no littering. Parking is close by and is $5 for the whole day - no meters. You can also get there on 3 different public bus lines for a $1.50 fare each way."})
	}
})
