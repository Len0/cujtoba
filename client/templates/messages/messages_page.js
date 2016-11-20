Template.messagesPage.events({
  'mouseenter .message_page_chat': function(){
    objDiv = $('#message_page_chat_view_scroll');
    //objDiv[0].scrollTop = objDiv[0].scrollHeight;
    objDiv.animate({ scrollTop: objDiv[0].scrollHeight}, 1000);
  },
  'click .message_page_chat_submit': function(){
    objDiv = $('#message_page_chat_view_scroll');
    //objDiv[0].scrollTop = objDiv[0].scrollHeight;
    objDiv.animate({ scrollTop: objDiv[0].scrollHeight}, 1000);
  }


});

Template.messagesPage.helpers({
  users: function(){
      return Meteor.users.find({},{sort: {username: 1}});
  },

  isUserSelected: function(){
    return !(Session.get('currentMessageUser') === undefined);
  }
});

Template.messagesPage.rendered = function(){

}
