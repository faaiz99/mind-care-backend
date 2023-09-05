import { stripe, API_URL } from '../config/stripe.config.ts';


export const payment = async (sessionCharges: number) => {
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


