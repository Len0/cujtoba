Messages = new Mongo.Collection('messages');

Meteor.methods({
  messageInsert: function(itemAttributes) {
    var user = Meteor.user();
    var message = _.extend(itemAttributes, {
      senderId: user._id,
      submitted: new Date()
    });
    var messageID = Messages.insert(message);
    return {
      _id: messageID
    };
  }
});
