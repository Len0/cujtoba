Template.imagesList.events({

});

Template.imagesList.helpers({
  images: function(){
      var user = Meteor.user()
      return Images.find({ userId: user._id });
    }

});

Template.imagesList.rendered = function(){

}
