Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert: function(postAttributes) {
    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var postId = Posts.insert(post);
    temp_log = {
      description: "New post inserted by user: " + user.username + " (" + user._id + ")",
      timestamp: new Date()
    }
    Logs.insert(temp_log);
    return {
      _id: postId
    };
  },

  postRemove: function(post) {
    var post_exists = Posts.findOne({_id: post._id});
    if (!post_exists) {
      return {
        post_error: true,
        _id: post._id,
        description: 'Trying to remove nonexisting post'
      }
    }
    user = Meteor.user();
    Posts.remove({_id: post._id});
    temp_log = {
      description: "Post:" + post.title + "(" + post._id + ") removed by user: " + user.username + " (" + user._id + ")",
      timestamp: new Date()
    }
    Logs.insert(temp_log);
    return {
      _id: post._id
    };
  },

  postUpdate: function(post){
    var post_exists = Posts.findOne({_id: post._id});
    if (post_exists == undefined) {
      return {
        result: 'new_post'
      };
    }
    console.log(post);
    Posts.update({_id: post._id}, {$set: {title: post.title, content: post.content}});

    return {
      result: 'updated_post'
    };
  }
});
