Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var post = {
      title: $(e.target).find('[name=post_title]').val(),
      content: $('.summernote').summernote('code')
    };
    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
      return alert(error.reason);
      // show this result but route anyway
      if (result.postExists){
        alert('This link has already been posted');
      }
      Router.go('postsList');
    });
  }
});

Template.postSubmit.helpers({

})

Template.postSubmit.rendered = function(){
  $('.summernote').summernote({
    height: 400
  });
}
