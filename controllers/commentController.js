import Post from "../models/post";
import Comment from "../models/comment";

export function comment_list(req, res, next) {
  Comment.find({ post: req.params.postId })
    .sort({ timestamp: -1 })
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      res.json(result);
    });
}

export function comment_detail(req, res, next) {
  Comment.findById(req.params.commentId).exec((err, result) => {
    if (err) {
      return next(err);
    }
    res.json(result);
  });
}

export function create_comment(req, res, next) {
  const comment = new Comment({
    username: req.body.username,
    content: req.body.content,
    post: req.params.postId,
  });

  comment.save((err) => {
    if (err) {
      return next(err);
    }

    res.json({ message: "Comment created" });
  });
}

export function update_comment(req, res, next) {
  Comment.findByIdAndUpdate(
    req.params.commentId,
    {
      username: req.body.username,
      content: req.body.comment,
    },
    (err) => {
      if (err) {
        return next(err);
      }

      res.json({ message: "Comment updated" });
    }
  );
}

export function delete_comment(req, res, next) {
  Comment.findOneAndDelete(req.params.commentId, (err) => {
    if (err) {
      return next(err);
    }

    res.json({ message: "Comment deleted" });
  });
}
