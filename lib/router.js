Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
  name: 'postView',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/posts/edit/:_id', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/users/:_id', {
  name: 'profilesPage',
  data: function() { return Meteor.users.findOne(this.params._id); }
});



Router.route('/messages', {name: 'messagesPage'});


Router.route('/submit', {name: 'postSubmit'});

Router.route('/albums/create', {name: 'albumsSubmit'});

Router.route('/users', {name: 'usersPage'});

Router.route('/albums', {name: 'albumsPage'});

Router.route('/albums/:_id', {
  name: 'albumsView',
  data: function() { return Albums.findOne(this.params._id); }
});

Router.route('/images', {name: 'imagesPage'});

Router.route('/search', {name: 'searchesPage'});

Router.route('/subscriptions', {name: 'subscriptionsPage'});



/*Router.onBeforeAction('dataNotFound', {only: 'postPage'});*/
Router.onBeforeAction(requireLogin, {only: ['postSubmit', 'messagesPage']});
