Template.messagesPageUser.events({
  'click .messages_page_user_list_item': function(event, template){
    Session.set('currentMessageUser', template.data._id);
  }

});

Template.messagesPageUser.helpers({
  'selectedClass': function(){
      var userId = this._id;
      var currentSelectedUser = Session.get('currentMessageUser');
      if(userId == currentSelectedUser){
          return "messages_page_user_list_item_selected"
      }
  }
});

Template.messagesPageUser.rendered = function(){

}
