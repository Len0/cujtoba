Template.profilesWall.events({

});

Template.profilesWall.helpers({
  selfposts: function(){
    return Posts.find({ userId: this._id }, {sort: {submitted: -1}});  
  }
});

Template.profilesWall.rendered = function(){

}
