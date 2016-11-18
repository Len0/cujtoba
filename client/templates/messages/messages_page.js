Template.messagesPage.events({

});

Template.messagesPage.helpers({
  users: function(){
      return Meteor.users.find();
  }
});

Template.messagesPage.rendered = function(){

}
