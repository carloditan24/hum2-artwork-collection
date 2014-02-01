Template.artWorkForm.events({'submit' : function(event, template) {
  event.preventDefault();

  title = template.find("input[name=title]");
  author = template.find("input[name=author]");
  movement = template.find("input[name=movement]");
  element = template.find("input[name=element]");
  image = template.find("input[name=image]");

  var data = {
    title: title.value,
    author: author.value,
    movement: movement.value,
    element: element.value,
    image: image.value.replace("C:\\fakepath\\","")
  };
  artwork_id = Session.get("currentArtWorkId");
  Artworks.upsert({_id:artwork_id},data)  
  if(artwork_id) document.getElementById('artwork_form').reset();

}});

Template.deleteArtWork.events({'click button' : function(event, template){
  event.preventDefault();

  artwork_to_delete = template.find("input[id=artwork_id]");
  console.log(artwork_to_delete);
  if(confirm("Are you sure you want to delete this item ("+artwork_to_delete.name+")?")){
    Artworks.remove({_id:artwork_to_delete.value});
    document.getElementById('artwork_form').reset();
  }
}});

Template.artWorkPage.helpers({
  currentBook: function(){
    return Artworks.findOne(Session.get('currentArtWorkId'));
  }
});

Template.artWorkList.helpers({
  artworks: function(){
    return Artworks.find({},{sort: {'title':1}});    
  }
});

Template.searchArtWork.events({
    'keyup input.form-control': function (event) {
      event.preventDefault();
      Session.set("searchQuery", event.currentTarget.value);
    },
    'submit form':function(event, template){
      event.preventDefault();
      Session.set('searchQuery', template.find(".form-control").value)
    }
});
