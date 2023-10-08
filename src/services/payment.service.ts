import { stripe, API_URL } from '../configs/stripe/config.js';
import { Payment } from '../models/payment/model.js';
import { IPayment } from '../types/IPayment.js';

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
	return session
}

export const getPaymentsClient = async (id: string) => {
	const response = await Payment.find({ clientId: id }).populate({
		path:'therapistId',
		model:'therapist'
	})
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
	const response = await Payment.find({ clientId: id }).populate({
		path:'therapistId',
		model:'therapist'
	})
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

export const updatePayment = async (payment: IPayment, id:string) => {
	const response = await Payment.findOneAndUpdate({_id:id}, payment, {
		returnOriginal: false
	})
	if (!response)
		throw new Error('Payment could not be updated')
	return response
}

export const confirmPayment = async (id: string) => {
	
	const response = await stripe.checkout.sessions.retrieve(id)
	if(!response)
		throw new Error('Payment Could not be Verified')

	return response.payment_status

}

export const savePayment = async (payment:IPayment)=>{
	const response = await Payment.create(payment)
	if(!response)
		throw new Error('Payment Could not be Saved')
	return response
}