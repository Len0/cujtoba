Template.albumsNotItemsList.events({

});

Template.albumsNotItemsList.helpers({
    images: function(){
        var currentAlbum = Template.currentData().parrent;
        var user = Meteor.user();
        var subs = Memberships.find(
          {
            userId: user._id,
            albumId: currentAlbum
          }
        )
        .map(function (item) { return item.pictureId; });

            return Images.find(
            {
              _id: {$nin: subs}
            },
            {
              sort: {submitted: 1}
            });
      }
});

Template.albumsNotItemsList.rendered = function(){

}
