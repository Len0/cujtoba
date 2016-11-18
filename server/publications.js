Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});

Meteor.publish('messages', function() {
  return Messages.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find();
});
