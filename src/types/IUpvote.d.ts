import { Document, Schema } from 'mongoose';

export interface IUpvote extends Document {
	upvoteId: Schema.Types.ObjectId;
	clientId: Schema.Types.ObjectId;
	therapistId: Schema.Types.ObjectId;
	postId: Schema.Types.ObjectId;
	commentId: Schema.Types.ObjectId;
}