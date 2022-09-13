const express = require('express')
const dotenv = require('dotenv')
const { Spot } = require('@binance/connector')

dotenv.config()

const app = express()

const keys = {
    apiKey: process.env.BINANCE_API_KEY,
    secret: process.env.BINANCE_SECRET_KEY,
};

const client = new Spot(keys.apiKey, keys.secret, { baseURL: 'https://testnet.binance.vision'})

app.get('/account', async (req, res) => {
    try {
        const data = await client.account().then(response => response.data);

        return res.send(data);
    } catch (error) {
        return res.send({ error })
    }
})


app.listen('3001', () => console.log('APP LISTEN ON PORT', 3001))