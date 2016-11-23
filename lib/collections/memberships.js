Memberships = new Mongo.Collection('memberships');

Meteor.methods({
  membershipsInsert: function(attributes) {
    var user = Meteor.user();
    var item = _.extend(attributes, {
      userId: user._id,
      submitted: new Date()
    });

    var id = Memberships.insert(item);

    return {
      _id: id
    };
  },

  membershipsRemove: function(item) {
    var memb_exist = Memberships.findOne(
      {
      userId: Meteor.userId(),
      pictureId: item.pictureId,
      albumId: item.albumId
      }
    );
    console.log("cekk");
    if (!memb_exist) {
      console.log("cekkaaaa");
      return {
        post_error: true,
        description: 'Trying to remove nonexisting post'
      }
    }
    user = Meteor.user();
    console.log("cekksa");
    Memberships.remove({_id: memb_exist._id});

    return {
      _id: memb_exist._id
    };
  }
});
