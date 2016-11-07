Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe('comments');
Meteor.subscribe('posts');
