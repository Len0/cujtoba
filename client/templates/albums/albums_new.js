Template.albumsNew.events({
  'click #albums_submit_new_button': function(event){
    event.preventDefault();
    Router.go('albumsSubmit');

  }

});

Template.albumsNew.helpers({

});

Template.albumsNew.rendered = function(){

}
