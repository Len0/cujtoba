Template.postSubmit.events({
  'click #post_submit_publish_button': function(event) {
    event.preventDefault();
    var post = {
      title: $('#post_submit_title_textbox').val(),
      content: $('.summernote_submit').summernote('code'),
      published: true
    };
    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      /*if (error)
      return alert(error.reason);
      // show this result but route anyway
      if (result.postExists){
        alert('This link has already been posted');
      }*/
      Router.go('postsList');
    });
  },

  'click #post_submit_save_button': function(event){
    event.preventDefault();
    var post = {
      title: $('#post_submit_title_textbox').val(),
      content: $('.summernote_submit').summernote('code'),
      published: false
    };
    Meteor.call('postInsert', post, function(error, result){
      
    })
  },

  'click #post_submit_cancel_button': function(event){
    event.preventDefault();
    Router.go('postsList');
  }
});

Template.postSubmit.helpers({

});

Template.postSubmit.rendered = function(){
  $('.summernote_submit').summernote({
    height: 400
  });
}
