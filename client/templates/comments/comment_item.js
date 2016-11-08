Template.commentItem.events({
  'click .comment_item_main_view_item_info_reply': function(event){
    event.stopPropagation();
    event.preventDefault();
    Template.instance().commentFieldVisibility.set(!Template.instance().commentFieldVisibility.get());
  }
});

Template.commentItem.helpers({
  commentFormHidden: function () {
    return Template.instance().commentFieldVisibility.get() ? true : false;
  }
});

Template.commentItem.created = function(){
  this.commentFieldVisibility = new ReactiveVar(false);
};

Template.commentItem.rendered = function(){

};
