Template.messagesPageBox.events({
  'submit .main-form-message-box': function(event, template){
    event.preventDefault();
    event.stopPropagation();

    var selectedUser = Session.get('currentMessageUser');
    var messageText = template.find('#message_page_box_chat_textarea').value


    if (messageText.length < 1){
      return;
    }

    var messageObject = {
      receiverId: selectedUser,
      text: messageText
    };

    Meteor.call('messageInsert', messageObject, function(error, result) {
      if(error){
        throw error;
      }

      $('#message_page_box_chat_textarea').val('');
    });
  }

});

Template.messagesPageBox.helpers({

});

Template.messagesPageBox.rendered = function(){

}
