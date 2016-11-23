Template.albumsItemsList.events({

});

Template.albumsItemsList.helpers({
  images: function(){
      var currentAlbum = Template.currentData().parrent;
      var user = Meteor.user();
      var subs = Memberships.find(
        {
          albumId: currentAlbum
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
    }
});

Template.albumsItemsList.rendered = function(){

}
