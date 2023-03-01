import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/items', (req, res) => {
    const items = [
        { title: 'title1' },
        { title: 'title2' },
    ];
    res.json(items);
});

app.post('/api/items', (req, res) => {
    const data = req.body.title;
    res.send(data);
});


export default fromNodeMiddleware(app);
