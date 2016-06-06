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

UI.registerHelper('shortIt', function(stringToShorten, maxCharsAmount){
  if(!stringToShorten) return;
  if(stringToShorten.length <= maxCharsAmount){
    return stringToShorten;
  }
  return stringToShorten.substring(0, maxCharsAmount);
});

Template.postItem.events({
  'click .post_delete': function(event){
    event.preventDefault();
    post = Posts.findOne({_id:this._id});
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      closeOnConfirm: false,
      closeOnCancel: true },
      // Following users decision to delete file.
      function(isConfirm){
        if (isConfirm) {
          // Flow control of delete action.
          // Calling Meteor method to delete selected post
          Meteor.call('postRemove', post, function(error, result) {
            // display the error to the user and abort
            if (error){
              return alert(error.reason);
            }
            // show this result but route anyway
            if (result.post_exists_error){
              Router.go('postsList', {_id: result._id});
            }
          });
          swal("Deleted!", "Your imaginary file has been deleted.", "success");
          Router.go('postsList');
        }
        else {
          swal("Cancelled", "Your imaginary file is safe", "error");
        }
      });
    }
  });
