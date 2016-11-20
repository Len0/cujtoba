Subscriptions = new Mongo.Collection('subscriptions');

Meteor.methods({
  subscriptionInsert: function(subscription) {
    var user = Meteor.user();

    var subscriptionItem = _.extend(subscription, {
      userId: user._id,
    });
    var existingSubscription = Subscriptions.find({userId: subscriptionItem.userId, subscriptionId: subscriptionItem.subscriptionId }).count();
    if(existingSubscription != 0){
      return;
    }
    var subscriptionId = Subscriptions.insert(subscriptionItem);
    temp_log = {
      description: "New subscription added by user: " + user.username + " (" + user._id + ")",
      timestamp: new Date()
    }
    Logs.insert(temp_log);
    return {
      _id: subscriptionId
    };
  },

  subscriptionRemove: function(subscription) {
    var user = Meteor.user();
    var subscriptionItem = _.extend(subscription, {
      userId: user._id,
    });


    var subscription_exists = Subscriptions.findOne({userId: subscriptionItem.userId, subscriptionId: subscriptionItem.subscriptionId });

    if (subscription_exists == undefined) {
      return {
        post_error: true,
        description: 'Trying to remove nonexisting subscription.'
      }
    }

    Subscriptions.remove({_id: subscription_exists._id});

    temp_log = {
      description: "Subscription removed by user: " + user.username + " (" + user._id + ")",
      timestamp: new Date()
    }
    Logs.insert(temp_log);
    return {
      _id: subscription_exists._id
    };
  }

});
