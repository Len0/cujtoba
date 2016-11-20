Template.postEdit.events({
  'click #post_edit_publish_button': function(event) {
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

'click #post_edit_save_button': function(event){
  event.preventDefault();
  var post = {
    _id: this._id,
    title: $('#post_edit_title_textbox').val(),
    content: $('.summernote_edit').summernote('code'),
    published: this.published
  };
  Meteor.call('postUpdate', post, function(error, result){

    if(result.result == 'updated_post'){
      swal({
        title: "Saved!",
        text: "Your changes are saved.",
        type: "success",
        timer: 1000,
        showConfirmButton: false
      });
    }
  })
},

'click #post_edit_delete_button': function(e) {
  e.preventDefault();
  if (confirm("Delete this post?")) {
    var currentPostId = this._id;
    Posts.remove(currentPostId);
    Router.go('postsList');
  }
},

'click #post_edit_cancel_button': function(event){
  event.preventDefault();
  Router.go('postsList');
}
});

Template.postEdit.helpers({
});

Template.postEdit.rendered = function(){
  $('.summernote_edit').summernote({
    height: 400
  });
  $('.summernote_edit').summernote('code', Template.parentData(1).content);
}
