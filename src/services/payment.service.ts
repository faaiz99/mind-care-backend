import { stripe, API_URL } from '../config/stripe.config.ts';
import { Payment } from '../models/payment/payment.model.ts';

export const createPayment = async (sessionCharges: number) => {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price_data: {
					currency: 'usd',
					product_data: {
						name: "Therapy"
					},
					unit_amount: sessionCharges
				},
				quantity: 1
			},
		],
		mode: 'payment',
		success_url: `${API_URL}/client?success=true`,
		cancel_url: `${API_URL}/client?canceled=true`,
	},
	);
	return session.url
}

export const getPaymentsClient = async (id: string) => {
	const response = await Payment.find({ clientId: id })
	if (!response)
		throw new Error('Client Payments could not be found')
	return response
}

export const getPaymentsTherapist = async (id: string) => {
	const response = await Payment.find({ therapistId: id })
	if (!response)
		throw new Error('Therapist Payments could not be found')
	return response
}

export const getPayment = async (id: string) => {
	const response = await Payment.findOne({ _id: id })
	if (!response)
		throw new Error('Payment could no be found')
	return response

}
export const deletePayment = async (id: string) => {
	const response = await Payment.deleteOne({ _id: id })
	if (!response)
		throw new Error('Payment could not be deleted')
	return response

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updatePayment = async (payment: any) => {
	const filter = payment.id
	const response = await Payment.findOneAndUpdate(filter, payment, {
		returnOriginal: false
	})
	if (!response)
		throw new Error('Payment could not be updated')
	return response
}