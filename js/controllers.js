app.controller('MainController', ($scope) => {

  $scope.vm = {};
  $scope.vm.postFormVisible = false;
  $scope.vm.commentVisible = false;

  $scope.vm.formShow = function() {
    if ($scope.vm.postFormVisible === false) {
      $scope.vm.postFormVisible = true;
    } else {
      $scope.vm.postFormVisible = false;
    }
  }

  $scope.vm.toggleCommentForm = function(post) {
    if (post.commentFormVisible === false) {
      post.commentFormVisible = true;
    } else {
      post.commentFormVisible = false;
    }
  }

  $scope.vm.upvotePost = function(post) {
    post.upvotes++;
  }

  $scope.vm.downvotePost = function(post) {
    post.upvotes--;
  }

  $scope.vm.commentShow = function(post) {
    if (post.commentsVisible === false) {
      post.commentsVisible = true;
    } else {
      post.commentsVisible = false;
    }
  }

  $scope.vm.formHandler = function() {
    if ($scope.newPost.$valid) {
      let post = {
        image: $scope.newPost.postImageUrl.$modelValue,
        title: $scope.newPost.postTitle.$modelValue,
        upvotes: 0,
        author: $scope.newPost.postAuthor.$modelValue,
        body: $scope.newPost.postBody.$modelValue,
        date: Date.now(),
        commentsVisible: false,
        commentFormVisible: false,
        comments : []
      }
      $scope.vm.posts.push(post);
      $scope.vm.postFormVisible = false;
      $scope.postImageUrl = '';
      $scope.postTitle = '';
      $scope.postAuthor = '';
      $scope.postBody = '';
      $scope.newPost.$setPristine();
    }
  }

  $scope.vm.addComment = function(post, commentForm) {
    if (commentForm.$valid) {
      let comment = {
        author: $scope.vm.commentAuthor,
        text: $scope.vm.commentText
      }
      post.comments.push(comment);
      $scope.vm.toggleCommentForm(post);
      $scope.vm.commentShow(post);
      commentForm.$setPristine();
      $scope.vm.commentAuthor = '';
      $scope.vm.commentText = '';
    }
  }

  $scope.vm.sort = {
    method: '-upvotes',
    prettyName: 'Votes'
  }

  $scope.vm.sortByVotes = function() {
    $scope.vm.sort = {
      method: '-upvotes',
      prettyName: 'Votes'
    }
  }
  $scope.vm.sortByDate = function() {
    $scope.vm.sort = {
      method: '-date',
      prettyName: 'Date'
    }
  }
  $scope.vm.sortByTitle = function() {
    $scope.vm.sort = {
      method: 'title',
      prettyName: 'Title'
    }
  }

  $scope.vm.posts = [
    {
      image: "https://pbs.twimg.com/profile_images/681830250620272640/m0LCcHNi.jpg",
      title: "Give ya meat a good 'ole rub",
      upvotes: -12,
      author: "Ainsley Harriot",
      body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nunc felis, mollis eget enim euismod, sodales mollis sapien. Nam molestie iaculis nulla ac tincidunt. Curabitur eget lorem aliquam, luctus purus eget, interdum massa. Duis faucibus, dolor vitae sagittis eleifend, sem justo ullamcorper enim, eu viverra nulla leo sit amet risus.",
      date: Date.parse('Fri, 14 Oct 2016 09:45:00'),
      commentsVisible: false,
      commentFormVisible: false,
      comments : [
        {
          author: 'Taylor Hessel',
          text: 'Nice shitpost.'
        }
      ]
    },
    {
      image: "http://www.murraychass.com/wp-content/uploads/2012/04/Oscar-Gamble.jpg",
      title: "People don't think it be like it is, but it do",
      upvotes: 15,
      author: "Oscar Gamble",
      body: "Ut ut sapien nec ipsum pellentesque hendrerit. Maecenas vel vestibulum arcu, sollicitudin gravida odio. Duis euismod tellus at scelerisque aliquam. Proin commodo tellus felis, non pretium velit tincidunt ut. Maecenas ac pulvinar quam. Phasellus venenatis varius ipsum, ut tempus dui dictum non. Aenean ultrices eros lobortis, porttitor nibh in, faucibus sem.",
      date: Date.parse('Mon, 10 Oct 2016 13:30:00'),
      commentsVisible: false,
      commentFormVisible: false,
      comments : [
        {
          author: 'Taylor Hessel',
          text: 'Mysterious, yet profound.'
        },
        {
          author: 'Hannah Smith',
          text: 'Truer words have never been spoken.'
        },
        {
          author: 'Xavier Woods',
          text: '???'
        }
      ]
    },
    {
      image: "https://avatars1.githubusercontent.com/u/315788",
      title: "Top 10 reasons why robots are awesome",
      upvotes: 0,
      author: "Danny Fritz",
      body: "Quisque auctor nunc id pulvinar sollicitudin. Ut tempus nunc non mollis pellentesque. Donec non arcu ut nunc mollis pulvinar ut varius ex. Duis blandit volutpat placerat. Suspendisse potenti. Morbi faucibus a ante vitae dapibus. Duis fringilla aliquam nunc tincidunt interdum. Duis sit amet mi et nisl rhoncus aliquam ut id sapien.",
      date: Date.parse('Thurs, 13 Oct 2016 04:00:00'),
      commentsVisible: false,
      commentFormVisible: false,
      comments : [
        {
          author: 'Taylor Hessel',
          text: "Robots are only as useful as they're programmed to be.  Personally, I don't trust them."
        },
        {
          author: 'Johnny Five',
          text: 'NO DISASSEMBLE!'
        }
      ]
    },
    {
      image: "https://i4.ytimg.com/vi/kd4mj-8QCQw/hqdefault.jpg",
      title: "Make this the spookiest Halloween yet",
      upvotes: 7,
      author: "KXVO Pumpkin Man",
      body: "Duis ullamcorper mauris urna, ultricies ullamcorper est fermentum eu. Pellentesque purus sapien, sagittis a diam nec, blandit elementum erat. Nulla facilisi. Pellentesque enim sapien, dictum sit amet feugiat cursus, egestas at lectus.",
      date: Date.parse('Thurs, 06 Oct 2016 00:00:00'),
      commentsVisible: false,
      commentFormVisible: false,
      comments : []
    }
  ]
});
