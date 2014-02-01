Meteor.publish('artworks', function(){
	return Artworks.find({},{sort:{'title':1}});
});