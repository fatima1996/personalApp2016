Meteor.methods({
	'insertProfile' : function(fname,lname,nname,email,by){
		 Prof.insert({
		 	fir: fname,
		 	las: lname,
		 	nn: nname,
		 	em: email,
		 	b: by
		 });
		 console.log("ok");
	}
});