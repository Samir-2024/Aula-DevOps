import express from 'express';

const app = express();
const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

router.get('/me', (req, res) => {
    res.send('Samir Kaled Ali Chehade')
})

app.use('/api', router);

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server started at http://${HOST}:${PORT}`);
});