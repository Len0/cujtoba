Template.commentItem.events({
  'click .comment_item_main_view_info_reply_link': function(event){
    event.preventDefault();
    $("#" + this._id).fadeToggle( "fast");
  }
});

Template.commentItem.helpers({

});

Template.commentItem.rendered = function(){

}
