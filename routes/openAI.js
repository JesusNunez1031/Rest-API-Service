require('dotenv').config({ path: '../.env' });
// const fs = require('fs');
// const axios = require('axios');
const { Configuration, OpenAIApi } = require('openai');

const apiConfig = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(apiConfig);

async function generateImage() {
    const response = await openai.createImage({
        prompt: 'a city in mars',
        n: 1,
        size: '1024x1024',
    });
    console.log(response.data.data[0].url);
}

async function generateText() {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'who is steve jobs?',
    });
    console.log(response.data.choices[0].text);
}

generateImage();
generateText();