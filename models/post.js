import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  published: { type: Boolean, required: true, default: false },
  timestamp: Date,
});

export default mongoose.model("Post", PostSchema);
