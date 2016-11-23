Template.albumsView.events({
  'mouseover .albums_view':function(){
      Session.set('currentAlbumId', this._id);
  }
});

Template.albumsView.helpers({
  selfimages: function(){
    var curAlbum = Session.get('currentAlbum');
    console.log(curAlbum);
    var user = Meteor.user();
    var subs = Memberships.find(
      {
        userId: user._id
      }
    )
    .map(function (item) { return item.pictureId; });

        return Images.find(
        {
          _id: {$in: subs}
        },
        {
          sort: {submitted: 1}
        });
  },

  otherimages: function(){
    var user = Meteor.user();
    var subs = Memberships.find(
      {
        userId: user._id,
        albumId: this._id
      }
    )
    .map(function (item) { return item.pictureId; });

        return Images.find(
        {
          _id: {$nin: subs},
          userId: user._id
        },
        {
          sort: {submitted: 1}
        });

  }

});

Template.albumsView.rendered = function(){
}
