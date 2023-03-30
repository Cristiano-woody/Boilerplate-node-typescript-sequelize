import express from 'express';

const app = express();

app.get('/', (requent, response) => {
    return response.json({message: 'Hello word!'})
})

app.listen(3333);
