Template.commentList.events({

});

Template.commentList.helpers({
  comments: function(){
      return comments.find({});
  }
});

Template.commentList.rendered = function(){

}
