Template.commentSubmit.events({
  'click #post_comment_textarea_submit': function(event) {
    event.preventDefault();
    var comment = {
      content: $('#post_comment_textarea').val(),
      postId: Template.currentData().postId,
      published: true
    };
    Meteor.call('commentInsert', comment, function(error, result) {
      if(error){
        throw error;
      }

      swal({
        title: "Posted!",
        text: "Uspješno ste ostavili komentar.",
        type: "success",
        timer: 1500,
        showConfirmButton: false
      });

    });
  }
});

Template.commentSubmit.helpers({

});

Template.commentSubmit.rendered = function(){

}
