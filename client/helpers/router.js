Meteor.Router.add({
	'/': {
		to: 'artWorkList',
		and: function(){
			Session.set('currentArtWorkId',null);
			if(document.getElementById('artwork_form'))
				document.getElementById('artwork_form').reset();
		}
	},
	'/books/:_id:': {
		to: 'artWorkPage',
		and: function(id){ 
			Session.set('currentArtWorkId',id);
			title = document.getElementById('1');
			author = document.getElementById('2');
			movement = document.getElementById('3');
			element = document.getElementById('4');
			image = document.getElementById('5');

			artwork = Artworks.findOne({_id:Session.get('currentArtWorkId')});
			title.value = artwork.title;
			author.value = artwork.author;
			movement.value = artwork.movement;
			element.value = artwork.element;
			image.value = artwork.image;
		}
	}

});