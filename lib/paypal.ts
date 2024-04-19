const base = process.env.PAYPAL_API_URL||'https://api.sandbox.paypal.com'

export const paypal = {
    createOder: async function createOder(price:number) {
        const accessToken = await generateAccessToken()
        const url = '${base}/v2/checkout/orders'
        const reponse = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            value: price,
                            currency_code: 'USD'
                        }
                    }
                ]
            })
        })
    
        return handleResponse(reponse)  
    },
    capturePayment: async function capturePayment(orderId: string) {
        const accessToken = await generateAccessToken()
        const url = '${base}/v2/checkout/orders/${orderId}/capture'
        const reponse = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        })
    
        return handleResponse(reponse)  
    }
}

async function generateAccessToken() {
    const { PAYPAL_CLIENT_ID, PAYPAL_SECRET } = process.env
    const auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_SECRET ).toString(
        'base64'
    )
    const response = await fetch('${base}/v1/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${auth}`
        },
        body: 'grant_type=client_credentials'
    })

    const jsonData = await handleResponse(response)
    return jsonData.access_token 
}

async function handleResponse(response: Response) {
    if (response.status === 200 || response.status === 201) {
        return response.json()
    }
    const errorMessage = await response.text()
    throw new Error(errorMessage)
}