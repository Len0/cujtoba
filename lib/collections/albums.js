Albums = new Mongo.Collection('albums');

Meteor.methods({
  albumsInsert: function(attributes) {
    var user = Meteor.user();
    var album = _.extend(attributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var albumId = Albums.insert(album);
    temp_log = {
      description: "New album inserted by user: " + user.username + " (" + user._id + ")",
      timestamp: new Date()
    }
    Logs.insert(temp_log);
    return {
      _id: albumId
    };
  },

  albumsRemove: function(album) {
    var album_exists = Albums.findOne({_id: album.itemId});
    if (!album_exists) {
      return {
        post_error: true,
        _id: album.itemId,
        description: 'Trying to remove nonexisting post'
      }
    }
    user = Meteor.user();
    Albums.remove({_id: album.itemId});

    return {
      _id: album.itemId
    };
  },

  albumsUpdate: function(post){
    var post_exists = Posts.findOne({_id: post._id});
    if (post_exists == undefined) {
      return {
        result: 'new_post'
      };
    }
    albums.update({_id: post._id}, {$set: {title: post.title, content: post.content}});

    return {
      result: 'updated_post'
    };
  }
});
