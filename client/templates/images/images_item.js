Template.imagesItem.events({
  'click .image_page_item_remove': function(e){
    e.preventDefault();

    var image = {
      _id: this._id
    };

      Meteor.call('imagesRemove', image, function(error, result) {
        if(error){
          throw error;
        }

        swal({
          title: "Success!",
          text: "Your have deleted image.",
          type: "sucess",
          timer: 1000,
          showConfirmButton: false
        });
      });
  },

  'click .image_page_item_dislike': function(e){
    e.preventDefault();

    var voteItem = {
      pictureId: this._id,
      userId: Meteor.userId()
    };

    Meteor.call('votesRemove', voteItem, function(error, result) {
      if(error){
        throw error;
      }
    });
  },

  'click .image_page_item_like': function(e){
    e.preventDefault();
    var voteItem = {
      pictureId: this._id,
      userId: Meteor.userId()
    }

    Meteor.call('votesInsert', voteItem, function(error, result) {
      if(error){
        throw error;
      }
    });
  }

  });

Template.imagesItem.helpers({
  hasLiked: function(){
    var status = Votes.find(
      {
      pictureId: this._id,
      userId: Meteor.userId()
    }
  ).count();

  return status > 0;
},

voteCount: function(){
  var status = Votes.find(
    {
    pictureId: this._id,
    }
  ).count();

  return status;
}

});

Template.imagesItem.rendered = function(){

}
