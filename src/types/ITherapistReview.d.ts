export interface IRating extends Document {
  numberOfStars: number;
}

export interface IFeedback extends Document {
  clientName: string;
  feedbackBackBody: string;
  createdAt: string;
}
