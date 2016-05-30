Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

Template.postItem.events({
  'click .post_delete': function(event){
    event.preventDefault();
    post = Posts.findOne({_id:this._id});
    Meteor.call('postRemove', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);
      // show this result but route anyway
      if (result.post_exists_error)
        Router.go('postsList', {_id: result._id});
    });
  }
});
