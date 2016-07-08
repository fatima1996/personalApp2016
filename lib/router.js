Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/showBio/:_id',
 {name:"showBio", 
 	data: function(){
		const c = Bio.findOne({_id:this.params._id});
		console.dir(c);
		return c;
    }
});

Router.route('/',{name:"home"});
Router.route('comments');
Router.route('place');
Router.route('quiz4');












