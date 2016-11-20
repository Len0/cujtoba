Template.usersItem.events({
  'click .user_page_item_add': function(event){
    event.preventDefault();
    event.stopPropagation();

    var subscriptionObject = {
      subscriptionId: this._id
    };
      Meteor.call('subscriptionInsert', subscriptionObject, function(error, result) {
        if(error){
          throw error;
        }

        swal({
          title: "Sent!",
          text: "Your have senat a subscription request.",
          type: "success",
          timer: 1000,
          showConfirmButton: false
        });

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

        swal({
          title: "Removed!",
          text: "Your have removed subscription.",
          type: "error",
          timer: 1000,
          showConfirmButton: false
        });
      });
  }
  });

Template.usersItem.helpers({
  isSubscribed: function(){
    var existingSubscription = Subscriptions.find({userId: Meteor.userId(), subscriptionId: this._id}).count();
    return  existingSubscription >  0;
  }
});

Template.usersItem.rendered = function(){

}
