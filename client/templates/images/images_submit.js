Template.imagesSubmit.events({
  'click #albums_submit_add_link_button': function(e){
    e.preventDefault();

    var text = $('#images_submit_form_url').val();
    var tags_arr = $('#images_submit_form_tags').val()
    var users_arr = $('#images_submit_form_users').val()

    tags_arr = tags_arr.split(',');
    users_arr = users_arr.split(',');

    if (text.length < 1){
      return;
    }

    var arrayLength = tags_arr.length;
    for (var i = 0; i < arrayLength; i++) {
      var tag_item = {
        tag: tags_arr[i]
      };

      Meteor.call('tagsInsert', tag_item, function(error, result) {
      });
    }

    var image = {
      url: text,
      tags: tags_arr,
      users: users_arr,
      albumId: ''
    };

    Meteor.call('imagesInsert', image, function(error, result) {
    });
  }

});

Template.imagesSubmit.helpers({

});

Template.imagesSubmit.rendered = function(){

}
