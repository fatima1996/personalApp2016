Template.place.helpers({
	'trip' : function(){
		var selectedloc = Session.get('l');
		var selectedbudget = Session.get('b');
		return Pl.find({location:selectedloc, budget:selectedbudget});
	}
}),

Template.place.events({
	'click .js-enter' : function(event) {
		event.preventDefault();
		console.log("ok");

		const loc = $(".js-loc").val();
		Session.set('l',loc);

		const budget = $(".js-budget").val();
		Session.set('b',budget);


	}
})
