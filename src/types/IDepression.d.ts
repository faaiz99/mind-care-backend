import { Schema, Document } from 'mongoose';

export interface IBeckDepression extends Document {
	clientId: Schema.Types.ObjectId;
	responses: Array<{
		questionNumber: number;
		response: 0 | 1 | 2 | 3;
	}>;
	score: number;
}