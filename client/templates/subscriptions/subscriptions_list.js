Template.subscriptionsList.events({

});

Template.subscriptionsList.helpers({
  subscriptions: function(){
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
    },

    awaitingSubscriptions: function(){
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

      receivedSubs = _.difference(receivedSubs, sentSubs)

      return Meteor.users.find(
        {
          _id: {$in: receivedSubs}
        },
        {
          sort: {username: 1}
        });
    }
});

Template.subscriptionsList.rendered = function(){

}
