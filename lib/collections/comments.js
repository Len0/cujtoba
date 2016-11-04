Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(itemAttributes) {
    var user = Meteor.user();
    var comment = _.extend(itemAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var commentID = Comments.insert(comment);
    temp_log = {
      description: "New comment inserted by user: " + user.username + " (" + user._id + ")",
      timestamp: new Date()
    }
    Logs.insert(temp_log);
    return {
      _id: commentID
    };
  }
});
