Template.commentSubmit.events({
  'submit .main-form': function(event) {
    event.preventDefault();
    var comment = {
      content: event.target.post_comment.value,
      postId: Template.currentData().postId,
      parrentId: Template.currentData().parrent,
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
