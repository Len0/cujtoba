Template.albumsItem.events({
  'click .user_page_item':function(event){
    Session.set('currentAlbum', this._id);
  },
  'click .album_page_item_remove': function(event){
    event.preventDefault();
    event.stopPropagation();

    var item = {
      itemId: this._id
    };

      Meteor.call('albumsRemove', item, function(error, result) {
        if(error){
          throw error;
        }

        swal({
          title: "Removed!",
          text: "Your have removed subscription.",
          type: "success",
          timer: 1500,
          showConfirmButton: false
        });
      });
  }
  });

Template.albumsItem.helpers({

});

Template.albumsItem.rendered = function(){

}
