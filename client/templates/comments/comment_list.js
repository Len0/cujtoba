Template.commentList.events({

});

Template.commentList.helpers({
  comments: function(){
      return Comments.find({postId: Template.currentData().postId, parrentId: Template.currentData().parrent });
  }
});

Template.commentList.rendered = function(){

}
