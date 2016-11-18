Messages = new Mongo.Collection('messages');

Meteor.methods({
  messageInsert: function(itemAttributes) {
    var user = Meteor.user();
    var comment = _.extend(itemAttributes, {
      senderId: user._id,
      submitted: new Date()
    });
    var messageID = Comments.insert(comment);
    return {
      _id: messageID
    };
  }
});
