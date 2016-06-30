Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});
Router.route('comments');
Router.route('place');
Router.route('settings');

Router.route('/navigation/:_id',
	{name:'profile',
	data: function(){ 	
		const c = City.findOne({_id:this.params._id});
		console.dir(c);
		return c;

	}
});


