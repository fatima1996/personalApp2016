Template.quizmakeup.helpers({
	reported:function(){
		return Don.find();
	}
});
Template.quizmakeup.events({
	"click .js-report": function(){
		console.log("clicked");
		//Meteor.call("removeDon");
		const cand = $(".js-candidates").val();
		const name = $(".js-name").val();
		const amount = $(".js-amount").val();
		const donobj = {cand:cand, name:name, amount:amount, createdAt:new Date()};
		Meteor.call("insertDon", donobj);
		Meteor.call("insertChe", donobj);
		//Meteor.call("removeDon");
	},
	"click .js-link":function(){
		var id = this._id;
		var name = this.name;
		var candi = this.cand;
		Session.set("selectedID", id);
		Session.set("selectedname", name);
		Session.set("selectedcandi", candi);
		Router.go('/info');
	}
})
Template.info.helpers({
	image: function(){
		var a = Session.get("selectedcandi");
		console.log(a);
		return Images.find({name:a});
	},
	donat : function(){
		var x = Session.get("selectedID");
		return Don.find({_id:x});
	},
	finding : function(){
		var y = Session.get("selectedname");
		var z = Session.get("selectedcandi");
		return Che.find({name:y, cand:z});
	}
});
Template.info.events({
	"click .js-delete":function(){
		var id = this._id;
		Meteor.call("removeChe", id);
	}
});