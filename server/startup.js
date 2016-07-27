Meteor.startup(function(){
	if (Pl.find().count()==0) {
		Pl.insert({location:"New York", budget:"free", 
			link:"https://www.lonelyplanet.com/usa/new-york-city/travel-tips-and-articles/76493"});
		Pl.insert({location:"New York", budget:"free", 
			link:"http://www.timeout.com/newyork/things-to-do/free-things-to-do-in-nyc"});
		Pl.insert({location:"https://www.thrillist.com/entertainment/new-york/free-things-to-do-in-nyc"})
		Pl.insert({location:"New York", budget:"$25 or less", 
			link:"http://www.timeout.com/newyork/things-to-do/cheap-new-york-bargain-events-and-things-to-do-in-nyc"});
		Pl.insert({location:"New York", budget:"$25 or less",
			link:"https://manhattan.edu/news/top-10-things-do-nyc-student-budget"})
		Pl.insert({location:"New York", budget:"$25 or less",
			link:"http://www.businessinsider.com/free-and-cheap-things-to-do-in-nyc-2013-7"});

		Pl.insert({location:"Boston", budget:"$25 or less",
			link:"http://archive.boston.com/travel/boston/gallery/25_under_25_spring/"});
		Pl.insert({location:"Boston", budget:"$25 or less",
			link:"http://bostononbudget.com/"});
		Pl.insert({location:"Boston", budget:"$25 or less", 
			link:"http://www.wickedcheapboston.com/cheap-things-to-do-in-boston/"});
		Pl.insert({location:"Boston", budget:"free",
			link:"http://www.cityofboston.gov/visitors/free.asp" });
		Pl.insert({location:"Boston", budget:"free", 
			link:"https://www.thrillist.com/entertainment/boston/free-things-to-do-in-boston"});
		Pl.insert({location:"Boston", budget:"free", 
			link:"http://travel.nationalgeographic.com/travel/city-guides/free-boston-traveler/" });

		Pl.insert({location:"Miami", budget:"$25 or less",
			link:"https://trekeffect.com/travel-blog/25-ways-to-experience-miami-on-a-budget"});
		Pl.insert({location:"Miami", budget:"$25 or less",
			link:"http://www.planetware.com/tourist-attractions-/miami-us-fl-miami.htm"});
		Pl.insert({location:"Miami", budget:"$25 or less", 
			link:"http://thekrazycouponlady.com/travel/12-cheap-and-fun-things-to-do-in-miami/"});
		Pl.insert({location:"Miami", budget:"free",
			link:"http://www.smartdestinations.com/blog/5-free-things-to-do-in-miami/" });
		Pl.insert({location:"Miami", budget:"free", 
			link:"https://www.thrillist.com/entertainment/miami/33-free-things-to-do-in-miami"});
		Pl.insert({location:"Miami", budget:"free", 
			link:"http://www.miamiandbeaches.com/things-to-do/free-things-to-do" });

		Pl.insert({location:"Chicago", budget:"$25 or less",
			link:"https://www.timeout.com/chicago/things-to-do/cheap-things-to-do-in-chicago"});
		Pl.insert({location:"Chicago", budget:"$25 or less",
			link:"https://www.tripadvisor.com/Travel-g35805-c192723/Chicago:Illinois:2.Days.In.Chicago.On.A.Budget.html"});
		Pl.insert({location:"Chicago", budget:"$25 or less", 
			link:"http://midwestweekends.com/plan_a_trip/best_trips/cheap_trips/cheap_chicago.html"});
		Pl.insert({location:"Chicago", budget:"free",
			link:"http://www.choosechicago.com/articles/view/always-free-chicago-attractions/420/" });
		Pl.insert({location:"Chicago", budget:"free", 
			link:"https://www.thrillist.com/entertainment/chicago/free-things-to-do-in-chicago"});
		Pl.insert({location:"Chicago", budget:"free", 
			link:"http://www.chicagotraveler.com/free-things-do-chicago"});
	}
	if (Rev.find().count()==0) {
		Rev.insert({location:"New York", review:"I really enjoyed taking a stroll in Central Park! It feel like the best way to see New York City is to put on your walking shoes. We spent one day on an extensive tour of the best neighborhoods in New York and it was amazing. We also visited the Museum of Metropolitan Art, and it was very interesting."});
		Rev.insert({location:"Boston", review:"The place is very nice to see during the summer. One nice thing about Boston is how despite it being smaller than New York City or Los Angelos there is still so much to do. I had a blast while exploring Downtown Boston. I really enjoyed the pastries at Mike's pastry shop."});
		Rev.insert({location:"Chicago", review:"Chicago has been one of the most beautiful cities I have ever been able to experience in my life. I felt like I was in the better version of New York. It was bigger, cleaner, and the people were so friendly and there is so much to see. "});
		Rev.insert({location:"Miami", review:"I love this place. No doubt about it, this city will forever be the city that I will proudly say I'm from. From the variety of cultures and languages to the poorest and richest, this city has something for everybody, and it's a good thing too because everyone's trying to grab a piece of it. "});
	}
	if (Images.find().count()==0) {
		Images.insert({name:"Hillary", img:"https://5d326107-a-850057e4-s-sites.googlegroups.com/a/brandeis.edu/jbs-2016-cosi/courses/cosi152aj/quizzes/makeup-1/hillary.jpg?attachauth=ANoY7criidCovKHlVqiIRm0j19qVrUk_KOFxvFz02xikM8F4gnG8jCsVfponZw1pi09bbSTi7gpdZBkkzc0xtOdsRddzQ14mdwGwpnEEK8kmc-ek-vvNfPZJteqzLlFG5oIZbDMH_hAoE3nnWo6w4psyTGQan3Pc4SNhGL9_xzs6w-x8gEIqQliRlE7Mn5XtWBzQryQn3PalNvQEJIu4C4bAPTveAK0kr01_4dh0TGnD9sGNT2bpRNKkJBJqQU9plc4VxFNabUnmJhT2wUIFboSqQN323-2BJg%3D%3D&attredirects=0"});
		Images.insert({name:"Trump", img:"https://5d326107-a-850057e4-s-sites.googlegroups.com/a/brandeis.edu/jbs-2016-cosi/courses/cosi152aj/quizzes/makeup-1/trump.jpg?attachauth=ANoY7coPZjtNU6KeMrfUM9ZdPg01xDmdews3KRilzHwd-8mHQazHvYGAA6lxca8MbbyeIFERugjqQlOnsIaCMVK9iFi-DRurntW3e9Qr2huvhIhTzO_H5Grq8oJUkICiY-KNQ3o8jBrKF_qSuLYUbuF14D4zXXpIbh4RRKoJUogO7AzlEFB_RvPultBFVrMA8FHfRdEKPvvgqtneQh8gIeVSTUqS6j8KhXbOC8sShjkCCTKoIFJBpvLZ8TvTyqQfre-sGpLUpx52&attredirects=0"});
	}
});
