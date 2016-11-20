Template.postsList.events({
  'change [type=checkbox]': function(){
    if(Meteor.user()){
      showMine = Template.instance().showMinePosts.get();
      Template.instance().showMinePosts.set(!showMine);
    }
  }
});

Template.postsList.helpers({
  posts: function(){
    /*displayMine = Template.instance().showMinePosts.get();
    if(displayMine){
        return Posts.find({ userId: Meteor.user()._id }, {sort: {submitted: -1}});
    }*/
    var user = Meteor.user();
    var subs = Subscriptions.find(
      {
        userId: user._id
      }
    )
    .map(function (item) { return item.subscriptionId; });

    return Posts.find({userId: {$in: subs}}, {sort: {submitted: -1}});
  },
});

Template.postsList.created = function (){
  this.showMinePosts = new ReactiveVar(false);
}
