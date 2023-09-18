import { Schema, model} from 'mongoose'

const openJournalSchema = new Schema({
	clientId:{
		type:Schema.Types.ObjectId,
		ref:'client'

	},
	questions: [{
		type:String
	}],
	answers:  [{
		type:String
	}],
	createdAt: {
		type: Date
	}
});

export const OpenJournal = model("openJournal", openJournalSchema);
