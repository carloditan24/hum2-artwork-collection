if(Artworks.find().count() === 0){
    Artworks.insert({
      title: 'A Bigger Slash',
      author: 'David Hockney',
      movement: 'Pop Art',
      element: 'Form',
      image: 'a bigger splash - david hockney.jpg'
    });
}