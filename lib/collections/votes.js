Votes = new Mongo.Collection('votes');

Meteor.methods({
  votesInsert: function (vote){
    Votes.insert(vote);
  },

  votesRemove: function(vote){
    var vote_exists = Votes.findOne(
      {
        pictureId: vote.pictureId,
        userId: vote.userId
      }
    );
    if (!vote_exists) {
      return {
        post_error: true,

      }
    }
    Votes.remove({_id: vote_exists._id});

    return {
      _id: vote_exists._id
    };
  }

});
