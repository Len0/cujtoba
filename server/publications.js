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

Meteor.publish('subscriptions', function() {
  return Subscriptions.find();
});

Meteor.publish('albums', function() {
  return Albums.find();
});

Meteor.publish('images', function() {
  return Images.find();
});

Meteor.publish('memberships', function() {
  return Memberships.find();
});

Meteor.publish('tags', function() {
  return Tags.find();
});

Meteor.publish('votes', function() {
  return Votes.find();
});
