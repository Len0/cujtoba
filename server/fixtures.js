if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });
  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}

/*Comments.insert({
  id: '8knH8au7QSGR4aaaa',
  author: 'admin',
  content:'ChildComment.',
  postId:'aPS6wF7j7admERxvN',
  userId:'oQ4fwrFF8HjcrDxan',
  parentId:'HBjsX5tkFz5bsDbaQ',
  published:true
});*/
