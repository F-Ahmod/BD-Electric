import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Alert, Spinner } from 'react-bootstrap';




const CheckoutForm = ({ product }) => {

    const { price,_id} = product;
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [process, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/payAmount', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
                console.log(data)
            });

    }, [price]);


    // pay button
    const payButton = {
        border: '1px solid black',
        padding: '5px 30px',
        borderRadius: '25px',
        color: 'black',
        background: "#fff",
        marginTop: '30px'
    }

    const HandleSubmit = async (e) => {

        e.preventDefault();

        if (!stripe || !elements) {
            return;
        };
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        };
        setProcessing(true)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {

            setSuccess("");
            setError(error.message);
        }
        else {
            setError('');
        };
        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {

                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
        }
        else {
            setError('');
            setSuccess("your payment is done");
            setProcessing(false);

            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                paid: true,
                transsaction: paymentIntent.client_secret.slice('_secret')[0]
            };
            const uri = `http://localhost:5000/payProduct/${_id}`
            fetch(uri, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    alert("hello")

                })

        };
    };


    return (
        < >
            <form onSubmit={HandleSubmit} className="payment-form" style={{ display: "flex", justifyContent: 'center', marginTop: 20 }}>
                <article
                    className='shadow-sm'
                    style={{ background: "#fff", marginTop: 10, padding: 25, width: '60%', marginBottom: 2 }}
                >
                    <CardElement
                        options={{
                            style: {

                                base: {
                                    fontSize: '16px',
                                    color: 'black',
                                    '::placeholder': {
                                        color: 'black',
                                    },
                                },
                                invalid: {
                                    color: 'red',
                                },
                            },
                        }}
                    />
                    {process && !error ? <Spinner animation="border" /> : <button style={payButton} type="submit" disabled={!stripe}>
                        Pay $ {price}
                    </button>}

                    {success && <Alert className='mt-2 mb-2' variant="success" > {success}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>
                    }
                </article>
            </form>

        </>
    );
};

export default CheckoutForm;