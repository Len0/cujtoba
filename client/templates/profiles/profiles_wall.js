Template.profilesWall.events({

});

Template.profilesWall.helpers({
  selfalbums: function(){
    return Albums.find({ userId: this._id }, {sort: {submitted: -1}});
  },
  selfimages: function(){
    return Images.find({ userId: this._id }, {sort: {submitted: -1}});
  }
});

Template.profilesWall.rendered = function(){

}
