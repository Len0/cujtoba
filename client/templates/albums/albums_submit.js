Template.albumsSubmit.events({
  'click #albums_submit_create_button': function(event){
    event.preventDefault();
    var album_title = $('#albums_submit_title_textbox').val();

    if(album_title.length < 1){
      return;
    }

    var album = {
      title: album_title,
      description: $('.summernote_submit').summernote('code'),
    };
    Meteor.call('albumsInsert', album, function(error, result) {
      if(error){
        throw error;
      }

      swal({
        title: "Success!",
        text: "You've creatan an album.",
        type: "success",
        timer: 1500,
        showConfirmButton: false
      });
      Router.go('albumsPage');
    });

  },

  'click #albums_submit_cancel_button': function(event){
    event.preventDefault();
    Router.go('albumsPage');
  },

  'click #albums_submit_add_button': function(event){

  }

});

Template.albumsSubmit.helpers({

});

Template.albumsSubmit.rendered = function(){
  $('.summernote_submit').summernote({
    height: 200
  });
}
