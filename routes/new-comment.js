Twatter.NewCommentRoute = Ember.Route.extend({
  model: function(params) {
    debugger
    var post = this.modelFor('post');
    var comment = this.store.createRecord('comment');
    post.get('comments').then(function(comments) {
      comments.pushObject(comment);
    });
    return comment;
  }
});
