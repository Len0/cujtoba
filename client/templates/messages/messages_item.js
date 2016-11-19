Template.messagesItem.events({

});

Template.messagesItem.helpers({
  'userSender': function(messageSenderId){
      var userId = Meteor.userId();
      if(userId == messageSenderId){
          return "messages_item_text_user";
      }
  }

});

Template.messagesItem.rendered = function(){

}
