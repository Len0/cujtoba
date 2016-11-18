Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe('comments');
Meteor.subscribe('posts');
Meteor.subscribe('messages');
Meteor.subscribe('users');
