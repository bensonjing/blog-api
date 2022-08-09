import mongoose from "mongoose";
const { Schema } = mongoose;

const CommentSchema = new Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  timestamp: { type: Date, required: true, default: Date.now() },
});

export default mongoose.model("Comment", CommentSchema);
