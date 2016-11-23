Template.albumsList.events({

});

Template.albumsList.helpers({
  albums: function(){
      return Albums.find(
        {
          userId: Meteor.userId()
        },
        {
          sort: {submitted: -1}
        });
    }
});

Template.albumsList.rendered = function(){

}
