Template.subscriptionsItem.events({
  'click .subscriptions_page_item_add': function(event){
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
  'click .subscriptions_page_item_remove': function(event){
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

Template.subscriptionsItem.helpers({
  isSubscribed: function(){
    var existingSubscription = Subscriptions.find({userId: Meteor.userId(), subscriptionId: this._id}).count();
    return  existingSubscription >  0;
  }
});

Template.subscriptionsItem.rendered = function(){

}
