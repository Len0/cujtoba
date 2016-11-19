Template.messagesView.events({

});

Template.messagesView.helpers({
  messages: function(){
    var selectedUser = Session.get('currentMessageUser');
    return Messages.find(
      {
        $or: [
          {$and : [
            {senderId: Meteor.userId()},
            {receiverId:selectedUser }
          ]},
          {$and : [
            {receiverId: Meteor.userId()},
            {senderId: selectedUser }
          ]}
        ]},
        {sort: {submitted: 1}});
  }
});

Template.messagesView.rendered = function(){
}
