import Post from "../models/post";

export function post_list(req, res, next) {
  Post.find()
    .sort({ createdAt: -1 })
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      res.json(result);
    });
}

export function post_detail(req, res, next) {
  Post.findById(req.params.postId)
    .populate("author", "-password")
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      res.json(result);
    });
}

export function create_post(req, res, next) {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.user,
  });

  post.save((err) => {
    if (err) {
      return next(err);
    }

    res.json({ message: "Post created" });
  });
}

export function update_post(req, res, next) {
  Post.findByIdAndUpdate(
    req.params.postId,
    {
      title: req.body.title,
      content: req.body.content,
    },
    (err) => {
      if (err) {
        return next(err);
      }
      res.json({ message: "Post updated" });
    }
  );
}

export function delete_post(req, res, next) {
  Post.findByIdAndDelete(req.params.postId, (err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Post deleted" });
  });
}
