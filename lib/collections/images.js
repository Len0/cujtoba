Images = new Mongo.Collection('images');

Meteor.methods({
  imagesInsert: function(atributes) {
    var user = Meteor.user();

    var image = _.extend(atributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var imageId = Images.insert(image);


    temp_log = {
      description: "New image inserted by user: " + user.username + " (" + user._id + ")",
      timestamp: new Date()
    }
    Logs.insert(temp_log);
    return {
      _id: imageId
    };
  },

  imagesRemove: function(atributes) {
    var image_exists = Images.findOne({_id: atributes._id});
    if (!image_exists) {
      return {
        post_error: true,
        _id: post._id,
        description: 'Trying to remove nonexisting image'
      }
    }
    user = Meteor.user();
    Images.remove({_id: atributes._id});
    temp_log = {
      description: "Image: removed",
      timestamp: new Date()
    }
    Logs.insert(temp_log);
    return {
      _id: atributes._id
    };
  },

  imagesUpdate: function(post){
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
