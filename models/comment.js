import mongoose from "mongoose";
const { Schema } = mongoose;

const CommentSchema = new Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
});

export default mongoose.model("Comment", CommentSchema);
