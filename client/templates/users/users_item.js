Template.usersItem.events({
  'click .user_page_item_add': function(event){
    event.preventDefault();
    event.stopPropagation();

    var subscriptionObject = {
      subscriptionId: this._id
    };
    alert(subscriptionObject.subscriptionId);
      Meteor.call('subscriptionInsert', subscriptionObject, function(error, result) {
        if(error){
          throw error;
        }
      });
    },
  'click .user_page_item_remove': function(event){
    event.preventDefault();
    event.stopPropagation();

    var subscriptionObject = {
      subscriptionId: this._id
    };
    
      Meteor.call('subscriptionRemove', subscriptionObject, function(error, result) {
        if(error){
          throw error;
        }
      });
  }
  });

Template.usersItem.helpers({

});

Template.usersItem.rendered = function(){

}
