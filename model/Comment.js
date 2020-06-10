import mongoose from 'mongoose';

const commentsSchema = new mongoose.Schema({
  message: String,
  user: { ref: 'User', type: mongoose.Schema.Types.ObjectId, required: true },
});
const Comment = mongoose.model('Comment', commentsSchema);

export default mongoose.models.Comment || mongoose.model('Comment', Comment);
