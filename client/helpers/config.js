Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe('comments');
Meteor.subscribe('posts');
Meteor.subscribe('messages');
Meteor.subscribe('users');
Meteor.subscribe('subscriptions');
Meteor.subscribe('albums');
Meteor.subscribe('images');
Meteor.subscribe('memberships');
Meteor.subscribe('tags');
Meteor.subscribe('votes');
