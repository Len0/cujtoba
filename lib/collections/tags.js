Tags = new Mongo.Collection('tags');

Meteor.methods({
  tagsInsert: function (item){
    Tags.insert(item);
  },

  tagsRemove: function(item){
    Tags.remove({_id: item._id});
  }

});
