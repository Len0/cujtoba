Template.usersList.events({

});

Template.usersList.helpers({
  users: function(){
      return Meteor.users.find({},{sort: {username: 1}});
    }
});

Template.usersList.rendered = function(){

}
