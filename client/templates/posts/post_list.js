Template.postsList.helpers({
  posts: function(){
    displayMine = Template.instance().showMinePosts.get();
    if(displayMine){
        return Posts.find({ userId: Meteor.user()._id }, {sort: {submitted: -1}});
    }
    else{
        return Posts.find({}, {sort: {submitted: -1}});
    }
  },
});

Template.postsList.events({
  'change [type=checkbox]': function(){
    if(Meteor.user()){
      showMine = Template.instance().showMinePosts.get();
      Template.instance().showMinePosts.set(!showMine);
    }
  }
});

Template.postsList.created = function (){
  this.showMinePosts = new ReactiveVar(false);
}
