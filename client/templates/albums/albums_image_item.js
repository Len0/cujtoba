Template.albumsImageItem.events({
  'click .album_view_page_item_add': function(event){
    event.preventDefault();
    event.stopPropagation();

    var albumIdSes = Session.get('currentAlbumId');

    if(albumIdSes == undefined) {
      return;
    }
    var item = {
      albumId: albumIdSes,
      pictureId: this._id

    };

      Meteor.call('membershipsInsert', item, function(error, result) {
        if(error){
          throw error;
        }
      });
    },

  'click .album_view_page_item_remove': function(event){
    event.preventDefault();
    event.stopPropagation();

    var albumIdSes = Session.get('currentAlbum');

    var item = {
      albumId: albumIdSes,
      pictureId: this._id

    };

      Meteor.call('membershipsRemove', item, function(error, result) {
        if(error){
          throw error;
        }
      });
  }
});

Template.albumsImageItem.helpers({
  isAdded: function() {
    var currentAlbum = Session.get('currentAlbum');
    var subs = Memberships.find(
      {
        pictureId: this._id,
        albumId: currentAlbum
      }
    ).count();

    return subs;
  }
});

Template.albumsImageItem.rendered = function(){

}
