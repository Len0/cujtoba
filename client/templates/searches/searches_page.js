Template.searchesPage.events({
  'keyup #search_page_input': function(e){
    e.preventDefault();
    var queryString = $('#search_page_input').val();
    Session.set('newSearch', queryString);
  },

  'submit #search_page_input': function(e){
    e.preventDefault();
    var queryString = $('#search_page_input').val();
    Session.set('newSearch', queryString);
  },

  'click .search_clickable': function(e){
    e.preventDefault();
    var query = Session.get('newSearch');
    var target = e.target.innerHTML;
    var newQuery = target.trim();
    if(query[0] == '@' || query[0] =='#'){
      newQuery = query[0] + newQuery;
    }
    $('#search_page_input').val(newQuery);
    Session.set('newSearch', newQuery);
  }
});

Template.searchesPage.helpers({
  suggestions: function(){
    var query = Session.get('newSearch');
    if(query == undefined ) {
      query = '';
      return;
    }

    if(query[0] == '@'){
      query = query.slice(1);
      var regex = new RegExp(query, 'i'); //'i' for case insensitive search

      return Meteor.users.find(
        {
            username :{$regex: regex}
        }
      );
    }
    else if (query[0] == '#') {
      query = query.slice(1);
      var regex = new RegExp(query, 'i'); //'i' for case insensitive search
      return Tags.find(
        {
          tag :{$regex: regex}
        }
      );
    }
    else{
      var result_list = [];
      var query = Session.get('newSearch');
      if(query == undefined ) query = '';

      var regex = new RegExp(query, 'i'); //'i' for case insensitive search
      var users_list = Meteor.users.find(
        {
          username :{$regex: regex}
        }).map(function (item) { return item.username; });

      var tags_list = Tags.find(
        {
          tag :{$regex: regex}
        }
      ).map(function (item) { return item.tag; });

      result_list = result_list.concat(users_list);
      result_list = result_list.concat(tags_list);

      return result_list
    }
  },

  images: function(){
      var query = Session.get('newSearch');
      if(query == undefined ) query = '';
      if(query[0] == '@'){
        query = query.slice(1);
        var regex = new RegExp(query, 'i'); //'i' for case insensitive search

        return Images.find(
          {
            author :{$regex: regex}
          }
        );
      }
      else if (query[0] == '#') {
        query = query.slice(1);
        var regex = new RegExp(query, 'i'); //'i' for case insensitive search
        return Images.find(
          {
            tags :{$regex: regex}
          }
        );
      }
      else{
        var regex = new RegExp(query, 'i'); //'i' for case insensitive search
        return Images.find(
          {
            $or :[
              {author :{$regex: regex}},
              {tags :{$regex: regex}}
            ]
          });
          }
      }
});

Template.searchesPage.rendered = function(){

}
