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
  /*users: function(){
    var user = Meteor.user();
    var subs = Subscriptions.find(
      {
        userId: user._id
      }
    )
    .map(function (item) { return item.subscriptionId; });

      return Meteor.users.find(
        {
          _id: {$in: subs}
        },
        {
          sort: {username: 1}
        });
    },*/

    users: function(){
      var user = Meteor.user();
      var receivedSubs = Subscriptions.find(
        {
          subscriptionId: user._id
        }
      )
      .map(function (item) { return item.userId; });

      var sentSubs = Subscriptions.find(
        {
          userId: user._id
        }
      )
      .map(function (item) { return item.subscriptionId; });

      receivedSubs = _.intersection(receivedSubs, sentSubs)

      return Meteor.users.find(
        {
          _id: {$in: receivedSubs}
        },
        {
          sort: {username: 1}
        });
  },

  isUserSelected: function(){
    return !(Session.get('currentMessageUser') === undefined);
  }
});

Template.messagesPage.rendered = function(){

}
