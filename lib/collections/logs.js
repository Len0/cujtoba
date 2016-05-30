Logs = new Mongo.Collection('logs');

Meteor.methods({
  logInsert: function (log){
    Logs.insert(log);
  },

  logRemove: function(log){
    Logs.remove({_id: log._id});
  }

});
